import { UserService } from './user.service.js';

// Register user controller
const registerUser = async (req, res) => {
  try {
    const result = await UserService.createUserInDB(req.body);
    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: result,
    });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({
      success: false,
      message: err.message || 'Failed to register user',
      error: err,
    });
  }
};

// Login user controller
const loginUser = async (req, res) => {
  try {
    const { user, token } = await UserService.loginUserFromDB(req.body);
    res.status(200).json({
      success: true,
      message: 'User logged in successfully',
      data: { user, token },
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(401).json({
      success: false,
      message: err.message || 'Login failed',
      error: err,
    });
  }
};

// Get all users controller
const getAllUsers = async (req, res) => {
  try {
    const result = await UserService.getAllUsersFromDB();
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch users',
      error: err,
    });
  }
};

export const UserController = {
  registerUser,
  loginUser,
  getAllUsers,
};
