import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import PatientManagement from './components/PatientManagement';
import AppointmentManagement from './components/AppointmentManagement';
import PatientPortal from './components/PatientPortal';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/patients" component={PatientManagement} />
        <Route path="/appointments" component={AppointmentManagement} />
        <Route path="/portal" component={PatientPortal} />
      </Switch>
    </Router>
  );
};

export default App;
