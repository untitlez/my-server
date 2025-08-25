# 🖥️ My Server (Backend)

This is a Node.js + Express + MongoDB backend project for creating and managing lesson plans for teachers.
It includes full CRUD operations, image search via Unsplash, JWT authentication with HTTP-only cookies, and AI-powered suggestions using outsourced AI services

---

## ✨ Features

- 🔐 Authentication & Authorization
  - 🛡️ JWT stored in HTTP-only cookies
  - 👤 Register, login, logout
  - 🎓 Role-based access (teacher/admin)

- 👥 User Management
  - ➕ Create
  - 👀 Read
  - ✏️ Update
  - 🗑️ Delete users

- 📚 Subject Management
  - 📝 Full CRUD operations for subjects

- 📑 Lesson Plan Management
  - 📝 Full CRUD operations
  - 🔗 Link lesson plans to subjects
  - 🤖 AI-assisted lesson suggestions

- 🖼️ Image Search
  - 🔍 Integration with Unsplash API to add images to lesson plans

- 🤖 AI-powered Content Generation
  - 💡 Lesson ideas
  - 📝 Summaries
  - 📖 Examples

- 🛡️ Protected Routes & Security
  - 🔑 Auth middleware for secure endpoints
  - 🌍 CORS and environment variable management

- ⚠️ Error Handling & Logging
  - 🛠️ Centralized error handling
  - 📜 Consistent API responses

---

## 🚀 Getting Started

1. Clone & install dependencies
```bash
git clone https://github.com/untitlez/my-server.git
cd my-server
npm install
```

2. Create .env
```env
PORT=5000
UNSPLASH_ACCESS_KEY=your_unsplash_access_key
```

3. Run development server
```bash
npm start
```

4. Open in Browser to test
```bash
http://localhost:5000 .
```

## 🌐 Deploy on Render
```plaintext
1. Create New Web Service → Connect my-server repo
2. Add Environment Variables:
  - PORT=
  = NODE_ENV=
  - UNSPLASH_ACCESS_KEY=
  - DATABASE_URL=
  - JWT_SECRET=
  - OPENAI_API_KEY=

Render will auto-deploy on push to main branch.
```

## 📂 Project Structure
```plaintext
my-server/
├── config/
│   └── db.js                   
│
├── controllers/                
│   ├── auth.js
│   ├── images.js
│   ├── lesson-plan.js
│   ├── openAi.js
│   ├── subject.js
│   └── user.js
│
├── middleware/                 
│   └── auth.js                 
│
├── model/                      
│   ├── lesson-plan.js
│   ├── subject.js
│   └── user.js
│
├── routes/                     
│   ├── auth.js
│   ├── images.js
│   ├── lesson-plan.js
│   ├── openAi.js
│   ├── subject.js
│   └── user.js
│
├── services/                   
│   ├── auth.js
│   ├── images.js
│   ├── lesson-plan.js
│   ├── openAi.js
│   ├── subject.js
│   └── user.js
│
├── .env                        
├── package.json
└── server.js                   
```
