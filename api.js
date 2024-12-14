// src/services/api.js
import axios from 'axios';


// Example function for fetching products
export const fetchProducts = async () => {
  const response = await axios.get('/api/products');
  return response.data;
};

// Example function for user login
export const loginUser = async (credentials) => {
  const response = await axios.post('/api/users/login', credentials);
  return response.data;
};

// Example function for user registration
export const registerUser = async (userData) => {
  const response = await axios.post('/api/users/register', userData);
  return response.data;
};
