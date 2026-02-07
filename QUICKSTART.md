# Quick Start Guide

## 🚀 Get the app running in 3 steps!

### Step 1: Install Backend Dependencies
```bash
cd backend
npm install
```

### Step 2: Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

### Step 3: Run the Application

**Option A: Run Both Servers Manually**

Terminal 1 - Backend:
```bash
cd backend
npm run dev
```

Terminal 2 - Frontend:
```bash
cd frontend
npm start
```

**Option B: Run with npm-run-all (Install first)**

From project root:
```bash
npm install -g npm-run-all
```

Then create a package.json in root with:
```json
{
  "scripts": {
    "dev": "npm-run-all --parallel dev:*",
    "dev:backend": "cd backend && npm run dev",
    "dev:frontend": "cd frontend && npm start"
  }
}
```

Run both:
```bash
npm run dev
```

## ⚠️ Prerequisites

Before running, make sure:
- ✅ Node.js is installed (v14+)
- ✅ MongoDB is installed and running
  - Windows: `mongod` in terminal
  - Mac: `brew services start mongodb-community`
  - Linux: `sudo systemctl start mongod`

## 🔗 Access Points

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- API Health: http://localhost:5000

## 🐛 Troubleshooting

**MongoDB Connection Error:**
- Ensure MongoDB is running
- Check MongoDB URI in `backend/.env`

**Port Already in Use:**
- Backend: Change PORT in `backend/.env`
- Frontend: It will prompt you to use another port

**Dependencies Issues:**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

## 📝 Test the App

1. Open http://localhost:3000
2. Create a new task
3. Edit the task
4. Change status using the dropdown
5. Filter tasks by status
6. Delete a task

Enjoy! 🎉
