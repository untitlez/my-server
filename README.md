# My Server

This is a Node.js + Express + MongoDB backend project for creating and managing lesson plans for teachers.
It includes full CRUD operations, image search via Unsplash, JWT authentication with HTTP-only cookies, and AI-powered suggestions using outsourced AI services

---

## Features
- Authentication & Authorization
    - JWT stored in HTTP-only cookies
    - Register, login, logout, role-based access (teacher/admin)
- User Management
    - Create, read, update, delete users
- Subject Management
    - Full CRUD operations for subjects
- Lesson Plan Management
    - Full CRUD operations
    - Link lesson plans to subjects
    - AI-assisted lesson suggestions
- Image Search
    - Integration with Unsplash API to add images to lesson plans
- AI-powered Content Generation
    - Outsourced AI for lesson ideas, summaries, or examples
- Protected Routes & Security
    - Auth middleware for secure endpoints
    - CORS and environment variable management
- Error Handling & Logging
    - Centralized error handling for consistent API responses

---

## Getting Started

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

## API Endpoints
```plaintext
GET /api/images/search?query= → Search images from Unsplash
GET /api/exports/pdf → Export data as PDF (example)
```

## Deploy on Render
```plaintext
1. Create New Web Service → Connect my-server repo
2. Add Environment Variables:
- UNSPLASH_ACCESS_KEY
- PORT (optional, Render assigns one automatically)
Render will auto-deploy on push to main branch.
```

## Project Structure
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
