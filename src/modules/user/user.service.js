import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User } from './user.model.js';

const createUserInDB = async (payload) => {
  const hashedPassword = await bcrypt.hash(payload.password, 10);
  const user = await User.create({
    ...payload,
    password: hashedPassword,
  });
  
  const result = user.toObject();
  delete result.password;
  return result;
};

const loginUserFromDB = async (payload) => {
  const { email, password } = payload;
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    throw new Error('User not found');
  }
  const isPasswordMatched = await bcrypt.compare(password, user.password);
  if (!isPasswordMatched) {
    throw new Error('Invalid password');
  }
  
  const userWithoutPassword = user.toObject();
  delete userWithoutPassword.password;

  const token = jwt.sign(
    { userId: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );
  return { user: userWithoutPassword, token };
};

const getAllUsersFromDB = async () => {
  const result = await User.find();
  return result;
};

export const UserService = {
  createUserInDB,
  loginUserFromDB,
  getAllUsersFromDB,
};
