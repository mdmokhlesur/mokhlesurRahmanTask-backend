import { Layout } from './layout.model.js';

// Save layout service
const saveLayoutInDB = async (userId, payload) => {
  const result = await Layout.findOneAndUpdate(
    { user: userId },
    { ...payload, user: userId },
    { upsert: true, returnDocument: 'after' }
  );
  return result;
};

// Get layouts service
const getLayoutsFromDB = async (userId) => {
  const result = await Layout.find({ user: userId });
  return result;
};

export const LayoutService = {
  saveLayoutInDB,
  getLayoutsFromDB,
};
