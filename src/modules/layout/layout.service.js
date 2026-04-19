import { Layout } from './layout.model.js';

const saveLayoutInDB = async (userId, payload) => {
  const result = await Layout.findOneAndUpdate(
    { user: userId },
    { ...payload, user: userId },
    { upsert: true, new: true }
  );
  return result;
};

const getLayoutsFromDB = async (userId) => {
  const result = await Layout.find({ user: userId });
  return result;
};

export const LayoutService = {
  saveLayoutInDB,
  getLayoutsFromDB,
};
