# MERN Stack Application

## Description

This is a full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to register, log in, log out, and set personal goals. The backend is deployed on Heroku, with MongoDB as the database.

## Features

- User registration and authentication (login/logout).
- Set personal goals.
- Responsive UI with React Router for navigation.
- Notifications using React Toastify.

## Tech Stack

- **Frontend**: React, React Router, React Toastify
- **Backend**: Node.js, Express.js, MongoDB
- **Database**: MongoDB (hosted on Heroku)
- **Deployment**: Heroku

## Installation

1. Clone the repository:
   ```bash
   $ git clone <repository-url>
   $ cd <repository-folder>
2. Install backend dependencies:
   ```bash
   $ cd backend
   $ npm install
3. Install frontend dependencies:
   ```bash
   $ cd ../frontend
   $ npm install
4. Create a `.env` file in the backend folder and add the following:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   PORT=your_port_number
5. Run the application:
   ```bash
   # Start the backend server
   $ cd backend
   $ npm run server
   ```

   ```bash
   # Start the frontend server
   $ cd ../frontend
   $ npm start
   ```

## Usage
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Log in an existing user
- `GET /api/users/logout` - Log out the user

## API Endpoints
### Users
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Log in an existing user
- `GET /api/users/logout` - Log out the user
### Goals
- `GET /api/goals` - Get all goals
- `POST /api/goals` - Create a new goal

## Deployment

The app is deployed on Heroku with MongoDB connected through a cloud database service.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
