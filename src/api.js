import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export const registerUser = async (data) => {
  return await axios.post(`${API_URL}/auth/register`, data);
};

export const loginUser = async (data) => {
  return await axios.post(`${API_URL}/auth/login`, data);
};

export const fetchBooks = async () => {
  return await axios.get(`${API_URL}/books`);
};

export const fetchBookById = async (id) => {
  return await axios.get(`${API_URL}/books/${id}`);
};

export const borrowBook = async (id, token) => {
  return await axios.post(`${API_URL}/books/${id}/borrow`, {}, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const returnBook = async (id, token) => {
  return await axios.post(`${API_URL}/books/${id}/return`, {}, {
    headers: { Authorization: `Bearer ${token}` }
  });
};