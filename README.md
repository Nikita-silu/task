# Frontend Developer Intern Assignment

## Overview
This project is a full-stack task management web application built as part of the Frontend Developer Intern assignment.  
The application includes user authentication, a protected dashboard, profile management, and task CRUD operations with a clean and responsive UI.

---

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcrypt

---

## Features

### Authentication
- User registration
- User login
- JWT-based authentication
- Protected routes

### Dashboard
- Secure dashboard accessible only after login
- Create, view, delete tasks
- Search and filter tasks
- Logout functionality

### Profile Management
- Fetch user profile details
- Update user name and email
- Profile page accessible from dashboard

### Security
- Password hashing using bcrypt
- JWT authentication middleware
- Authorization headers required for protected APIs

---

## Project Structure

```
project-root/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── services/
├── README.md
```

---

## How to Run Locally

### Backend Setup
```bash
cd backend
npm install
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

The application will run on:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

---

## API Documentation

### Base URL
```
http://localhost:5000/api
```

---

### Authentication APIs

#### Register User
**POST** `/auth/register`

Request Body:
```json
{
  "name": "Nikita",
  "email": "nikita@gmail.com",
  "password": "password123"
}
```

---

#### Login User
**POST** `/auth/login`

Request Body:
```json
{
  "email": "nikita@gmail.com",
  "password": "password123"
}
```

Response:
```json
{
  "token": "JWT_TOKEN"
}
```

---

#### Get User Profile
**GET** `/auth/profile`

Headers:
```
Authorization: Bearer <JWT_TOKEN>
```

Response:
```json
{
  "name": "Nikita",
  "email": "nikita@gmail.com"
}
```

---

#### Update User Profile
**PUT** `/auth/profile`

Headers:
```
Authorization: Bearer <JWT_TOKEN>
```

Request Body:
```json
{
  "name": "Nikita Silu",
  "email": "nikitasilu@gmail.com"
}
```

---

### Task APIs

#### Get All Tasks
**GET** `/tasks`

Headers:
```
Authorization: Bearer <JWT_TOKEN>
```

---

#### Create Task
**POST** `/tasks`

Headers:
```
Authorization: Bearer <JWT_TOKEN>
```

Request Body:
```json
{
  "title": "Complete assignment"
}
```

---

#### Delete Task
**DELETE** `/tasks/:id`

Headers:
```
Authorization: Bearer <JWT_TOKEN>
```

---

## Security Practices
- Passwords are securely hashed using bcrypt
- JWT tokens are used for authentication
- Protected APIs require valid authorization headers
- Unauthorized requests return appropriate error responses

---

## Scalability Considerations
- Frontend can be deployed on a CDN (Vercel / Netlify)
- Backend services can be containerized and scaled horizontally
- Database indexing can be applied for better performance
- Modular architecture allows easy feature expansion

---

## Conclusion
This project demonstrates full-stack development skills with a strong focus on frontend engineering, secure authentication, API integration, and scalable application structure.

