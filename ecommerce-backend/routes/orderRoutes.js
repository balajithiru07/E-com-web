const express = require('express');
const { protect } = require('../middlewares/authMiddleware'); // Ensure this middleware exists
const {
  placeOrder,
  getOrderById,
  getOrderHistory,
  cancelOrder,
} = require('../controllers/orderController'); // Replace with actual functions

const router = express.Router();

// Routes for order management
router.post('/', protect, placeOrder); // Place a new order
router.get('/:id', protect, getOrderById); // Get a single order by ID
router.get('/', protect, getOrderHistory); // Get order history for a user
router.delete('/:id', protect, cancelOrder); // Cancel an order

module.exports = router;
