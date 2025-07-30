import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './index.css';
import Economy from './components/Economy';
import NationalHighlights from './components/Hightless';
import StockMarket from './components/Stock';
import CurrencyExchange from './components/Exchange';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import ProtectedRoute from "./protectedRoute";
import {AuthProvider} from "./context/Authcontext";
import Dashboard from './components/dashboard';
import Verify from './components/verify';

const App = () => {
  return (
     <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify" element={<Verify />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard/>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>   
    </AuthProvider>
  );
};

export default App;