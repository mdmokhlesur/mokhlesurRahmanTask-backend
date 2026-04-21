# Coder71 - Backend (Recursive Screen Splitter)

This is the backend API for the Recursive Screen Splitter application, built with Node.js, Express, and MongoDB.

## 🛠️ Tech Stack
- **Node.js & Express**: Web server framework
- **MongoDB & Mongoose**: Database and ODM
- **JWT**: For secure user authentication
- **Bcryptjs**: Password hashing

## ⚙️ Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Environment Variables**:
   Copy `.env` and fill in your MongoDB credentials:
   ```bash
   DATABASE_URL=mongodb+srv://mokhlesurinfo5_db_user:J3U3rAGa0Vn0XeAz@coder71.zaxyclf.mongodb.net/
   JWT_SECRET=your_super_secret_key_here
   PORT=5000
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
- **CORS Configuration**: Restricted to allowed origins.
