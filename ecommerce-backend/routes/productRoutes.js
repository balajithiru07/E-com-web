const express = require('express');
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');
const { protect, admin } = require('../middlewares/authMiddleware'); // Import admin middleware
const router = express.Router();

// Public Routes
router.get('/', getProducts);
router.get('/:id', getProductById);

// Admin-Only Routes
router.post('/', protect, admin, createProduct);
router.put('/:id', protect, admin, updateProduct);
router.delete('/:id', protect, admin, deleteProduct);

module.exports = router;
