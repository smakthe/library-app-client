import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { BookProvider } from './context/BookContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import BookDetail from './components/Books/BookDetail';
import UserProfile from './components/UserProfile';
import NotFound from './pages/NotFound';
import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <BookProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/books/:id" element={<BookDetail/>} />
            <Route path="/profile" element={<UserProfile/>} />
            <Route element={<NotFound/>} />
          </Routes>
        </Router>
      </BookProvider>
    </AuthProvider>
  );
};

export default App;