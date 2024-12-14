const placeOrder = async (req, res) => {
    res.status(201).json({ message: 'Order placed successfully' });
  };
  
  const getOrderById = async (req, res) => {
    res.status(200).json({ message: `Order details for ID: ${req.params.id}` });
  };
  
  const getOrderHistory = async (req, res) => {
    res.status(200).json({ message: 'User order history' });
  };
  
  const cancelOrder = async (req, res) => {
    res.status(200).json({ message: `Order ID: ${req.params.id} canceled` });
  };
  
  module.exports = {
    placeOrder,
    getOrderById,
    getOrderHistory,
    cancelOrder,
  };
  