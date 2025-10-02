# Task Manager Web App

**Made by:** Ryan De Guzman  
**Email:** ryanlink74@outlook.com

A full-stack task management application built with Django REST Framework and React.js for the ABBA Software Development Operational Test.

## Architecture

- **Backend**: Django + Django REST Framework with ViewSets
- **Frontend**: React.js with Hooks
- **Database**: SQLite
- **API Communication**: Axios

## Prerequisites

- **Python**: 3.8+
- **Node.js**: v18.20.8 (required - must match exactly)
- **npm**: 9.0+

### Node.js Version Matching

**⚠️ Important:** This project requires Node.js v18.20.8 exactly.

**Check current version:**
```bash
node --version
```

**If you don't have v18.20.8, install it:**

**Option 1: Direct Download (Recommended)**
1. Go to [nodejs.org](https://nodejs.org/)
2. Download Node.js v18.20.8 LTS
3. Run the installer and follow the setup wizard

**Option 2: Using nvm**
```bash
# Install nvm first
# Windows: iwr -useb https://raw.githubusercontent.com/coreybutler/nvm-windows/master/install.ps1 | iex
# Mac/Linux: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Then install Node.js v18.20.8
nvm install 18.20.8
nvm use 18.20.8
```

**Verify version:**
```bash
node --version  # Should output: v18.20.8
```

## Quick Start

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies (with error handling):**
   ```bash
   # Try basic installation first
   pip install django djangorestframework
   
   # If pip fails, try with --user flag
   pip install --user django djangorestframework
   
   # If still fails, try upgrading pip first
   python -m pip install --upgrade pip
   pip install django djangorestframework
   
   # Alternative: use pip3 if pip doesn't work
   pip3 install django djangorestframework
   ```

3. **Run migrations:**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

4. **Start server:**
   ```bash
   python manage.py runserver
   ```
   
   Backend: `http://127.0.0.1:8000/`

### Backend Troubleshooting

**If pip install fails:**
```bash
# Method 1: Upgrade pip
python -m pip install --upgrade pip

# Method 2: Use --user flag
pip install --user django djangorestframework

# Method 3: Use pip3
pip3 install django djangorestframework

# Method 4: Use python -m pip
python -m pip install django djangorestframework
```

**If Django commands fail:**
```bash
# Try with python -m
python -m django makemigrations
python -m django migrate
python -m django runserver

# Or try with python3
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver
```

**If port 8000 is busy:**
```bash
# Use different port
python manage.py runserver 8001
```

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start server:**
   ```bash
   npm start
   ```
   
   Frontend: `http://localhost:3000/`

## API Endpoints

Base URL: `http://127.0.0.1:8000/`

| Method  | Endpoint | Description |
|---------|----------|-------------|
| `GET`   | `/tasks/` | List all tasks |
| `POST`  | `/tasks/` | Create a new task |
| `GET`   | `/tasks/{id}/` | Retrieve a task by ID |
| `PUT`   | `/tasks/{id}/` | Update a task |
| `PATCH` | `/tasks/{id}/` | Toggle completion status |
| `DELETE`| `/tasks/{id}/` | Delete a task |

### Task Model
```json
{
  "id": 1,
  "title": "Sample Task",
  "description": "Task description (optional)",
  "completed": false,
  "created_at": "2024-01-01T12:00:00Z"
}
```

## Features

### Core Requirements
- View, create, update, delete tasks
- Mark tasks as completed
- Django REST Framework with ViewSets
- React.js with Hooks
- Loading states and error handling

### Bonus Features
- Search functionality
- Status filtering (all/pending/completed)
- Task sorting options
- Responsive design
- Confirmation dialogs

## Project Structure

```
task-manager-app/
├── backend/                    # Django REST API
│   ├── config/                # Django settings
│   ├── tasks/                 # Tasks app
│   │   ├── models.py         # Task model
│   │   ├── views.py          # API views
│   │   ├── serializers.py    # Task serializer
│   │   └── urls.py           # Task URLs
│   └── db.sqlite3            # SQLite database
├── frontend/                  # React.js application
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── App.js            # Main component
│   │   └── api.js            # API configuration
│   └── package.json          # Dependencies
└── README.md
```

## Testing

1. **Start both servers:**
   - Backend: `http://127.0.0.1:8000/`
   - Frontend: `http://localhost:3000/`

2. **Test operations:**
   - Create, edit, delete tasks
   - Mark tasks as complete/incomplete
   - Use search and filter functionality

## Troubleshooting

### Backend Issues
- **pip install fails:** Try `pip install --user django djangorestframework` or `python -m pip install --upgrade pip`
- **Django commands fail:** Try `python -m django runserver` or `python3 manage.py runserver`
- **Port 8000 busy:** Use `python manage.py runserver 8001`
- **Python issues:** Ensure Python 3.8+ is installed

### Frontend Issues
- **Cross-env error:** `npm install cross-env --save`
- **Node version issues:** Must use Node.js v18.20.8 exactly
- **npm install fails:** Try `npm install --legacy-peer-deps`
- **Port 3000 busy:** Frontend will automatically use next available port

### General Issues
- **Port conflicts:** Backend (8000), Frontend (3000)
- **Permission errors:** Run terminal as Administrator (Windows) or use `sudo` (Mac/Linux)

## Test Compliance

✅ **Backend Requirements**
- Django project with tasks app
- Django REST Framework with ViewSets
- SQLite database
- All required API endpoints

✅ **Frontend Requirements**
- React.js with Hooks
- All CRUD operations
- Axios for API calls
- Loading states and error handling

✅ **Integration & Testing**
- Full frontend-backend integration
- All CRUD operations working from UI
- Proper repository structure

---

**Built for ABBA Software Development Operational Test**  
**Node.js Version: Latest LTS (or v18.20.8)**