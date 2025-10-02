# Task Manager Web App

Made by Ryan De Guzman, ryanlink74@outlook.com

This is a full-stack task management application built with Django REST Framework and React.js, designed for the ABBA Software Development Operational Test.

1. Architecture

- **Backend**: Django + Django REST Framework with ViewSets
- **Frontend**: React.js with Hooks
- **Database**: SQLite
- **API Communication**: Axios

### Backend Setup (Django)

1. **Navigate to backend directory:**   :   cd backend
2. **Install dependencies directly (simpler approach):**
   ```bash
   pip install django djangorestframework
   ```
   
   **OR create virtual environment (if you prefer):**
   ```bash
   python -m venv venv
   # On Windows:
   venv\Scripts\activate
   # On Mac/Linux:
   source venv/bin/activate
   pip install django djangorestframework
   ```
4. **Run migrations:**  :   
   python manage.py makemigrations
   python manage.py migrate
5. **Start the development server:**    :   python manage.py runserver

   The backend will be available at `http://127.0.0.1:8000/`


### Frontend Setup (React)

1. **Navigate to frontend directory:**  :   cd frontend
2. **Install dependencies:**    :   npm install
3. **Start the development server:**    :   npm start
   The frontend will be available at `http://localhost:3000/`

**Note:** If you get a cross-env error, run:
```bash
npm install cross-env --save
```



2.  API Endpoints

All endpoints are prefixed with the base URL: `http://127.0.0.1:8000/`

| Method  | Endpoint | Description |
|---------|----------|-------------|
| `GET`   | `/tasks/` | List all tasks |
| `POST`  | `/tasks/` | Create a new task |
| `GET`   | `/tasks/{id}/` | Retrieve a task by ID |
| `PUT`   | `/tasks/{id}/` | Update a task (title & description) |
| `PATCH` | `/tasks/{id}/` | Toggle task completed status |
| `DELETE`| `/tasks/{id}/` | Delete a task |

### Example API Usage

**Create a new task:**
```bash
curl -X POST http://127.0.0.1:8000/tasks/ \
  -H "Content-Type: application/json" \
  -d '{"title": "New Task", "description": "Task description"}'
```

**Get all tasks:**
```bash
curl http://127.0.0.1:8000/tasks/
```

**Toggle task completion:**
```bash
curl -X PATCH http://127.0.0.1:8000/tasks/1/
```



3.  Features

### Core Requirements 
-  View list of tasks
-  Create new tasks
-  Update existing tasks
-  Mark tasks as completed
-  Delete tasks
-  Django REST Framework with ViewSets
-  React.js with Hooks
-  Axios for API calls
-  Loading states and error handling

### Bonus Features
- **Search functionality** - Filter tasks by title or description
- **Status filtering** - View all, pending, or completed tasks
- **Sorting options** - Sort by title, status, or creation date
- **Responsive design** - Works on desktop, tablet, and mobile
- **Modern UI** - Professional design with smooth animations
- **Confirmation dialogs** - Prevent accidental deletions
- **Task counters** - Shows filtered vs total task count




4.   Testing the Application

1. **Start both servers:**
   - Backend: `http://127.0.0.1:8000/`
   - Frontend: `http://localhost:3000/`

2. **Test CRUD operations:**
   - Create a new task using the form
   - Edit an existing task by clicking "Edit"
   - Mark tasks as complete/incomplete
   - Delete tasks with confirmation
   - Use search and filter functionality

3. **Verify API endpoints:**
   - Check browser developer tools for API calls
   - Use curl commands to test endpoints directly

---

