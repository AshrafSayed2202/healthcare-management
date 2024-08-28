import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/DashboardComponent';
import PatientManagement from './components/PatientManagementComponent';
import AppointmentManagement from './components/AppointmentManagementComponent';
import PatientPortal from './components/PatientPortalComponent';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/patients" element={<PatientManagement />} />
        <Route path="/appointments" element={<AppointmentManagement />} />
        <Route path="/portal" element={<PatientPortal />} />
      </Routes>
    </Router>
  );
};

export default App;
