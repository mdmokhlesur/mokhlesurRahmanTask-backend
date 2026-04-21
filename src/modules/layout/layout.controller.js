import { LayoutService } from './layout.service.js';
import { validateLayoutTree } from './layout.validation.js';

// Save layout controller
const saveLayout = async (req, res) => {
  try {
    // Validate the tree structure recursively before saving
    const validationError = validateLayoutTree(req.body.structure);
    if (validationError) {
      return res.status(400).json({
        success: false,
        message: 'Invalid layout structure',
        error: validationError,
      });
    }

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

// Get layouts controller
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
