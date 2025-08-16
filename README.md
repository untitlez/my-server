# my-server

This is a **Node.js + Express** backend project that proxies requests to the [Unsplash API](https://unsplash.com/developers).  
It can be deployed on [Render](https://render.com) and keeps your Unsplash API key secure.

---

## Project Structure

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

1. Create New Web Service → Connect my-server repo
2. Add Environment Variables:
- UNSPLASH_ACCESS_KEY
- PORT (optional, Render assigns one automatically)

Render will auto-deploy on push to main branch.

## Project Structure
```plaintext
my-server/
├── config/
│   └── db.js           
├── controllers/
│   ├── exports.js      
│   └── images.js       
├── routes/
│   ├── exports.js      
│   └── images.js       
├── .env                
└── server.js
```
