
```markdown
# 📝 Task Manager App

A fully functional and responsive **Task Manager** web application built with a **TypeScript-based Node.js backend**, **PostgreSQL database**, and a clean **vanilla JavaScript frontend**.  
This beginner-friendly full-stack project supports task creation, editing, deletion, and dark mode — all implemented with best practices and modern tooling.

---

## 🚀 Features

- ✅ Create, Read, Update, and Delete tasks (CRUD)
- 📝 Each task supports an optional description
- 🌗 Toggle between Light and Dark Mode (CSS variables)
- 📱 Responsive UI with mobile-first design
- 🧩 Clean, modular code structure using TypeScript
- ⚡ Fast installs using `pnpm`
- 🔐 Secure environment configuration using `.env`

---

## 🛠️ Tech Stack

| Layer     | Technology                     |
|-----------|--------------------------------|
| Backend   | Node.js, Express, TypeScript   |
| Frontend  | HTML, CSS, JavaScript          |
| Database  | PostgreSQL                     |
| Package   | pnpm                           |
| Dev Tools | ts-node-dev / tsx              |

---

## 📂 Folder Structure

```

<pre><code> 📁 task-manager-app/ ├── public/ # Frontend files │ ├── index.html # UI layout │ ├── style.css # Styling (with dark mode) │ └── script.js # Frontend logic │ ├── src/ # Backend source code │ ├── config/ # DB connection │ │ └── db.ts │ ├── controllers/ # Route logic │ │ └── task.controller.ts │ ├── models/ # DB schema + queries │ │ └── task.model.ts │ ├── routes/ # Express routers │ │ └── task.router.ts │ └── server.ts # Server entry point │ ├── .env # Environment variables ├── .gitignore # Ignored files ├── package.json ├── tsconfig.json ├── pnpm-lock.yaml └── README.md # You're reading it! </code></pre>

````

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/SanjayMudela/task-manager-app.git
cd task-manager-app
````

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Set Up PostgreSQL

* Create a database (e.g., `task_manager`)
* Add your database credentials in a `.env` file:

```env
DATABASE_URL=postgres://username:password@localhost:5432/task_manager
PORT=3000
```

### 4. Run the Backend Server

```bash
pnpm dev
```

> Uses `ts-node-dev` or `tsx` for live reloading during development

### 5. Launch the Frontend

Open `public/index.html` in your browser or use a Live Server.

---

## 📸 Screenshot

![Screenshot](./066c888f-aafd-41a4-9544-02986cfa6fdc.png)

---

## 📜 License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

---

## 👨‍💻 Author

**Sanjay Mudela**
GitHub: [@SanjayMudela](https://github.com/SanjayMudela)

````

