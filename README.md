# Svelte FastAPI User Management

This project is a user management system that utilizes a FastAPI backend with a Svelte frontend and PostgreSQL as the database. It provides functionality for registering, logging in, and managing user accounts.

## Features
- User Registration
- User Login
- User Profile Management
- JWT Authentication
- Responsive Svelte Frontend

## Getting Started

### Prerequisites
- Python 3.7+
- Node.js 14+
- PostgreSQL 12+
- pip
- npm

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/svelte-fastapi-user-management.git
   cd svelte-fastapi-user-management
   ```

2. Set up the backend:
   - Navigate to the `backend` directory:  
     ```bash
     cd backend
     ```  
   - Create a virtual environment:  
     ```bash
     python -m venv venv
     source venv/bin/activate  # On Windows use `venv\Scripts\activate`
     ```
   - Install dependencies:
     ```bash
     pip install -r requirements.txt
     ```
   - Set up the PostgreSQL database and update `DATABASE_URL` in `backend/app/main.py`.
   - Run the server:
     ```bash
     uvicorn app.main:app --reload
     ```

3. Set up the frontend:
   - Navigate to the `frontend` directory:  
     ```bash
     cd ../frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Run the development server:
     ```bash
     npm run dev
     ```

Now you can access the app at `http://localhost:5173` and the API at `http://localhost:8000`.

## How it Works
- **Backend**: The FastAPI application handles routing, database connections, user authentication, and API endpoints.
- **Frontend**: The Svelte app provides a user-friendly interface that interacts with the FastAPI backend through RESTful APIs.

## Contributing
Feel free to fork the repository and submit pull requests for improvements!

## License
This project is licensed under the MIT License.