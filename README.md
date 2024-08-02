# User Authentication API

This project is a simple user authentication API built using Node.js, Express, and MongoDB. It includes user registration, login, and profile management functionality with JWT-based authentication.

## Features

- User registration
- User login with JWT token generation
- Profile retrieval for authenticated users
- Profile update for authenticated users
- Profile deletion for authenticated users

## Technologies Used

- Node.js
- Express
- MongoDB (with Mongoose)
- JSON Web Token (JWT)
- bcryptjs for password hashing
- cookie-parser for parsing cookie
- body-parser for parsing incoming request body
- cors to configure Cross-Origin Resource Sharing (CORS)
- dotenv for environment variables
- nodemon for development

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/vedantsalunke29/Assignment.git
   cd backend
   
   Install dependencies:
   npm install
   
   .env file
   PORT=5000
   MONGO_URI=your-mongodb-uri-here
   JWT_SECRET=your-jwt-secret-here
   
   For development with nodemon:
   npm run dev
   
## API Endpoints

- User Registration
  
![Screenshot 2024-08-02 170207](https://github.com/user-attachments/assets/4b0d23d9-c5f1-438e-b78c-29490bdcff14)

- User Login
  
![Screenshot 2024-08-02 170859](https://github.com/user-attachments/assets/95ed88b0-6f02-4bb3-a764-c82eaf62bc7d)

- Get User Profile
  
  ![Screenshot 2024-08-02 171048](https://github.com/user-attachments/assets/a9d4c8cb-a932-4783-abe1-796f5545a380)

- Update User Profile
  
![Screenshot 2024-08-02 171512](https://github.com/user-attachments/assets/409cfd5b-4e8c-482f-8a75-88905f175eb7)

- Delete User Profile
  
![Screenshot 2024-08-02 171815](https://github.com/user-attachments/assets/e19676e7-8bcd-44f1-ac19-b3a3e71bee5c)
