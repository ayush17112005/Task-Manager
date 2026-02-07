# Task Management Application - MERN Stack

A full-stack Task Management web application built with MongoDB, Express.js, React, and Node.js.

## 📋 Features

- ✅ Create, Read, Update, and Delete (CRUD) tasks
- ✅ Task fields: Title, Description, Status
- ✅ RESTful API architecture
- ✅ Input validation and error handling
- ✅ MongoDB for persistent data storage
- ✅ Responsive design

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **express-validator** - Input validation

### Frontend
- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Material-UI Icons** - Icon library
- **Axios** - HTTP client

## 📁 Project Structure

```
Global_Trend_Assign/
├── backend/
│   ├── config/
│   │   └── db.js           # MongoDB connection
│   ├── controllers/
│   │   └── taskController.js # Business logic
│   ├── models/
│   │   └── Task.js         # Task schema
│   ├── routes/
│   │   └── taskRoutes.js   # API routes
│   ├── .env                # Environment variables
│   ├── .env.example        # Example env file
│   ├── .gitignore          # Git ignore file
│   ├── package.json        # Dependencies
│   └── server.js           # Entry point
├── frontend/
│   ├── public/
│   │   ├── index.html      # HTML template
│   │   └── manifest.json   # PWA manifest
│   ├── src/
│   │   ├── components/
│   │   │   ├── FilterBar.js    # Filter component
│   │   │   ├── TaskCard.js     # Task card component
│   │   │   ├── TaskForm.js     # Task form component
│   │   │   └── TaskList.js     # Task list component
│   │   ├── services/
│   │   │   └── api.js      # API service
│   │   ├── App.js          # Main app component
│   │   ├── index.css       # Global styles
│   │   └── index.js        # Entry point
│   ├── .env                # Environment variables
│   ├── .gitignore          # Git ignore file
│   ├── package.json        # Dependencies
│   ├── postcss.config.js   # PostCSS config
│   └── tailwind.config.js  # Tailwind config
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Global_Trend_Assign
   ```

2. **Navigate to backend directory**
   ```bash
   cd backend
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Configure environment variables**
   - Copy `.env.example` to `.env`
   ```bash
   copy .env.example .env
   ```
   - Update the `.env` file with your MongoDB URI:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/taskmanagement
   NODE_ENV=development
   ```

5. **Start MongoDB**
   - Make sure MongoDB is running on your system
   - Default connection: `mongodb://localhost:27017`

6. **Run the server**
   
   For development (with auto-reload):
   ```bash
   npm run dev
   ```
   
   For production:
   ```bash
   npm start
   ```

7. **Server should be running on** `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory** (from project root)
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables** (optional)
   - The `.env` file is already configured to connect to `http://localhost:5000`
   - If your backend runs on a different port, update `.env`:
   ```
   REACT_APP_API_URL=http://localhost:YOUR_PORT/api
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Frontend should be running on** `http://localhost:3000`

### Running Full Stack Application

1. **Start MongoDB** (in a separate terminal)

2. **Start Backend Server** (in a separate terminal)
   ```bash
   cd backend
   npm run dev
   ```

3. **Start Frontend Server** (in a separate terminal)
   ```bash
   cd frontend
   npm start
   ```

4. **Access the application** at `http://localhost:3000`

## 🎨 UI Components

The frontend consists of clean, reusable components:

- **TaskForm** - Create and edit tasks with validation
- **TaskCard** - Displays individual task with status indicators
- **TaskList** - Grid layout of all tasks
- **FilterBar** - Quick filter by task status
- **App** - Main application layout with header and footer

**Design Features:**
- Google-inspired minimalist design
- Blue (#1a73e8) primary color scheme
- Smooth transitions and hover effects
- Status-based color coding (green for completed, yellow for in-progress, gray for pending)
- Responsive grid layout (1 column mobile, 2 columns tablet, 3 columns desktop)

## 📡 API Endpoints

### Base URL: `http://localhost:5000/api`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/tasks` | Get all tasks |
| GET | `/tasks/:id` | Get a single task |
| POST | `/tasks` | Create a new task |
| PUT | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |

### Request/Response Examples

#### Create Task (POST /api/tasks)
**Request Body:**
```json
{
  "title": "Complete assignment",
  "description": "Finish the MERN stack task management app",
  "status": "pending"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "65f8a9b2c3d4e5f6g7h8i9j0",
    "title": "Complete assignment",
    "description": "Finish the MERN stack task management app",
    "status": "pending",
    "createdAt": "2026-02-07T10:30:00.000Z",
    "updatedAt": "2026-02-07T10:30:00.000Z"
  }
}
```

#### Get All Tasks (GET /api/tasks)
**Response:**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "65f8a9b2c3d4e5f6g7h8i9j0",
      "title": "Complete assignment",
      "description": "Finish the MERN stack task management app",
      "status": "in-progress",
      "createdAt": "2026-02-07T10:30:00.000Z",
      "updatedAt": "2026-02-07T11:00:00.000Z"
    }
  ]
}
```

#### Update Task (PUT /api/tasks/:id)
**Request Body:**
```json
{
  "status": "completed"
}
```

#### Delete Task (DELETE /api/tasks/:id)
**Response:**
```json
{
  "success": true,
  "message": "Task deleted successfully",
  "data": {}
}
```

## ✅ Task Schema

| Field | Type | Required | Options |
|-------|------|----------|---------|
| title | String | Yes | Max 100 characters |
| description | String | Yes | Max 500 characters |
| status | String | No | `pending`, `in-progress`, `completed` (default: `pending`) |
| createdAt | Date | Auto | Timestamp |
| updatedAt | Date | Auto | Timestamp |

## 🧪 Testing the API

You can test the API using:
- **Postman** - Import the endpoints and test
- **Thunder Client** (VS Code extension)
- **cURL** - Command line
- **Browser** - For GET requests

Example cURL command:
```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d "{\"title\":\"Test Task\",\"description\":\"Testing the API\",\"status\":\"pending\"}"
```

## 🎨 Frontend Features

- ✨ **Clean Google-inspired UI** - Simple and professional design
- 📱 **Fully Responsive** - Works on all devices
- 🎯 **Task Filtering** - Filter by status (All, Pending, In Progress, Completed)
- ✏️ **Inline Editing** - Edit tasks directly from the list
- 🔄 **Real-time Updates** - Instant feedback on actions
- 🎭 **Material-UI Icons** - Beautiful and consistent icons
- 🎨 **Tailwind CSS** - Modern utility-first styling

## 🔜 Bonus Features (Optional)

- [ ] Implement user authentication (JWT)
- [ ] Add task search functionality
- [ ] Deploy to cloud platform (Vercel + MongoDB Atlas)
- [ ] Add unit and integration tests
- [ ] Task categories/tags
- [ ] Due dates and reminders

## 👨‍💻 Author

Full Stack Development Internship Assignment

## 📝 License

This project is for educational purposes.
