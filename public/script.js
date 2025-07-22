
// Your API endpoint
const apiUrl = 'http://localhost:3000/api/tasks';

// Get elements from the HTML
const form = document.getElementById('task-form');
const taskInput = document.getElementById('task-title');
const descInput = document.getElementById('task-desc');
const taskList = document.getElementById('task-list');
const themeBtn = document.getElementById('toggle-theme');

// Track dark mode state
let isDark = false;

/* ---------------------------------------------
   🌓 Toggle Dark/Light Mode
---------------------------------------------- */
themeBtn.addEventListener('click', () => {
  // Toggle the data-theme attribute on the <body>
  document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
  themeBtn.textContent = isDark ? '🌙 Dark Mode' : '☀️ Light Mode';
  isDark = !isDark;
});

/* ---------------------------------------------
   📤 Submit Form - Add Task
---------------------------------------------- */
form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent page reload

  // Get values from form inputs
  const title = taskInput.value.trim();
  const description = descInput.value.trim();

  // Validation: title must not be empty
  if (!title) return alert('Task title is required');

  // Send POST request to backend
  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, description }) // Include both
  });

  // If task added successfully
  if (res.ok) {
    taskInput.value = '';
    descInput.value = '';
    fetchTasks(); // Refresh task list
  } else {
    alert('❌ Failed to add task');
  }
});

/* ---------------------------------------------
   📥 Fetch and Render All Tasks
---------------------------------------------- */
async function fetchTasks() {
  taskList.innerHTML = ''; // Clear current tasks
  try {
    const res = await fetch(apiUrl);        // GET /api/tasks
    const data = await res.json();          // Example: { tasks: [...] }
    const tasks = data.tasks;               // ✅ FIX: extract tasks array

    console.log('Fetched tasks:', tasks);   // Debug in console

    tasks.forEach(task => {
      // Create <li> for each task
      const li = document.createElement('li');

      // Task Title
      const title = document.createElement('h3');
      title.textContent = task.title;

      // Task Description
      const desc = document.createElement('p');
      desc.textContent = task.description || ''; // show if available

      // ❌ Delete Button
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = '❌';
      deleteBtn.onclick = () => deleteTask(task.id);

      // ✏️ Edit Button
      const editBtn = document.createElement('button');
      editBtn.textContent = '✏️';
      editBtn.onclick = () => editTask(task);

      // Append to <li> and then to task list
      li.append(title, desc, editBtn, deleteBtn);
      taskList.appendChild(li);
    });
  } catch (err) {
    console.error('❌ Failed to fetch tasks:', err);
    alert('Failed to load tasks. Check backend server.');
  }
}

/* ---------------------------------------------
   ❌ Delete Task by ID
---------------------------------------------- */
async function deleteTask(id) {
  await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
  fetchTasks(); // Refresh list
}

/* ---------------------------------------------
   ✏️ Edit Task (Title only for now)
---------------------------------------------- */
function editTask(task) {
  const newTitle = prompt('Edit task title:', task.title);
  const newDesc = prompt('Edit task description:', task.description || '');

  if (!newTitle || !newTitle.trim()) {
    return alert('Title cannot be empty.');
  }

  // Send PUT request with both updated fields
  fetch(`${apiUrl}/${task.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: newTitle.trim(),
      description: newDesc ? newDesc.trim() : ''
    })
  }).then(fetchTasks);
}


// ✅ Initial fetch when page loads
window.addEventListener('DOMContentLoaded', fetchTasks);
