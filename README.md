# Coder71 - Backend (Recursive Screen Splitter)

This is the backend API for the Recursive Screen Splitter application, built with Node.js, Express, and MongoDB.

## 🛠️ Tech Stack
- **Node.js & Express**: Web server framework
- **MongoDB & Mongoose**: Database and ODM
- **JWT**: For secure user authentication
- **Bcryptjs**: Password hashing
- **Express Rate Limit**: API protection

## ⚙️ Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Environment Variables**:
   Copy `.env.example` to `.env` and fill in your MongoDB credentials:
   ```bash
   cp .env.example .env
   ```
   Required variables:
   - `DATABASE_URL`: Your MongoDB connection string.
   - `JWT_SECRET`: A secure string for token signing.
   - `PORT`: Port number (default: 5000).

3. **Run Server**:
   ```bash
   # Development (with nodemon)
   npm run dev

   # Production
   npm start
   ```

## 🔐 API Endpoints

### Authentication
- `POST /api/v1/auth/register`: Create a new account.
- `POST /api/v1/auth/login`: Authenticate and receive a JWT.
- `GET /api/v1/auth/me`: Get current user details (requires token).

### Layout Management
- `GET /api/v1/layouts`: Fetch the user's saved layout.
- `POST /api/v1/layouts`: Save/update the user's current layout.

## 🛡️ Security Features
- **JWT Authentication**: All layout operations are protected.
- **Rate Limiting**: Prevents abuse on authentication and data endpoints.
- **CORS Configuration**: Restricted to allowed origins.
