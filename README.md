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

### Version Check
```bash
python --version  # Should be 3.8+
node --version    # Should be v18.20.8
npm --version     # Should be 9.0+
```

### Matching Node.js Version to v18.20.8

**⚠️ Important:** This project requires Node.js v18.20.8 exactly.

**Check current version:**
```bash
node --version
```

**If nvm is not installed, install it first:**

**Windows (PowerShell as Administrator):**
```powershell
# Install nvm-windows via PowerShell
iwr -useb https://raw.githubusercontent.com/coreybutler/nvm-windows/master/install.ps1 | iex
```

**Windows (Command Prompt as Administrator):**
```cmd
# Download nvm-windows installer
curl -o nvm-setup.exe https://github.com/coreybutler/nvm-windows/releases/download/1.1.12/nvm-setup.exe

# Run the installer (use .\ prefix in PowerShell)
.\nvm-setup.exe
```

**Windows (PowerShell - if curl doesn't work):**
```powershell
# Download using PowerShell
Invoke-WebRequest -Uri "https://github.com/coreybutler/nvm-windows/releases/download/1.1.12/nvm-setup.exe" -OutFile "nvm-setup.exe"

# Run the installer
.\nvm-setup.exe
```

**Mac/Linux:**
```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Reload your shell configuration
source ~/.bashrc
# OR
source ~/.zshrc
```

**Then change to Node.js v18.20.8:**
```bash
# Install and switch to v18.20.8
nvm install 18.20.8
nvm use 18.20.8

# Set as default version
nvm alias default 18.20.8
```

**Alternative (if nvm doesn't work):**
- Download Node.js v18.20.8 directly from [nodejs.org](https://nodejs.org/)
- Install following the setup wizard

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

2. **Install dependencies:**
   ```bash
   pip install django djangorestframework
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

### Frontend Setup

**⚠️ Ensure you're using Node.js v18.20.8 before proceeding**

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

- **Cross-env error:** `npm install cross-env --save`
- **Node version mismatch:** Ensure Node.js v18.20.8
- **Python issues:** Ensure Python 3.8+ is installed
- **Port conflicts:** Backend (8000), Frontend (3000)

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
**Node.js Version: v18.20.8**  
**Python Version: 3.8+**