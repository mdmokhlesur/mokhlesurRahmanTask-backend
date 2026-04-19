import { LayoutService } from './layout.service.js';

const saveLayout = async (req, res) => {
  try {
    const result = await LayoutService.saveLayoutInDB(req.user.userId, req.body);
    res.status(200).json({
      success: true,
      message: 'Layout saved successfully',
      data: result,
    });
  } catch (err) {
    console.error('Save layout error:', err);
    res.status(500).json({
      success: false,
      message: 'Failed to save layout',
      error: err,
    });
  }
};

const getLayouts = async (req, res) => {
  try {
    const result = await LayoutService.getLayoutsFromDB(req.user.userId);
    res.status(200).json({
      success: true,
      message: 'Layouts fetched successfully',
      data: result,
    });
  } catch (err) {
    console.error('Fetch layouts error:', err);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch layouts',
      error: err,
    });
  }
};

export const LayoutController = {
  saveLayout,
  getLayouts,
};
