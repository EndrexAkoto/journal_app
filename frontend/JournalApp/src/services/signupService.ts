import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Replace with your actual backend URL

export const signup = async (userData: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, userData);
    return response.data; // Optionally handle response
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};
