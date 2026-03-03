## Technologies Used

### Backend

-   Node.js with Express.js
-   PostgreSQL Database
-   Sequelize ORM
-   JWT Authentication
-   MVC Architecture

### Frontend

-   React.js
-   React Router for navigation
-   React Table for data display
-   Context API for state management
-   Axios for API requests

### Infrastructure

-   Docker for containerization
-   Docker Compose for orchestrating multiple containers

## Project Structure

The project follows a clear separation between backend and frontend:

-   `backend/`: Express.js API using MVC architecture
-   `frontend/`: React.js single-page application

## Getting Started

### Prerequisites

-   Install Docker and Docker Compose
-   Node.js and npm (for local development without Docker)

### Installation and Setup

1. Start the database using Docker Compose:

    ```bash
    docker-compose up
    ```

2. Start the Backend API:

    ```bash
    npm run dev
    ```

3. Start the Frontend:

    ```bash
    npm run start
    ```

4. The application will be available at:
    -   Frontend: http://localhost:3000
    -   Backend API: http://localhost:5001
    -   Database: PostgreSQL running on port 5432

## API Endpoints

### Authentication

-   `POST /api/auth/register`: Register a new user
-   `POST /api/auth/login`: User login
-   `GET /api/auth/profile`: Retrieve user profile (requires authentication)

## Database Schema

The application uses a PostgreSQL database with the following main tables:

-   `users`: Stores user account information
