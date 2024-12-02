import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';

import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import AppointmentDetailsPage from './pages/appointment/AppointmentDetailsPage';
import ConfirmationPage from "./pages/appointment/ConfirmationPage";
import PractitionerProfilPage from "./pages/PractitionerProfilePage";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/results" element={<SearchResultsPage />} />
        <Route path="/appointment-details" element={<AppointmentDetailsPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/practitioner/:id" element={<PractitionerProfilPage />} />
       
      </Routes>
    </Router>
  );
};

export default App;
