import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { AllRoutes } from './routes';

function App() {
  return (
    <div>
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
