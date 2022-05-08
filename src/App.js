import React from 'react';
import { Navbar } from './components';
import { AllRoutes } from './routes/AllRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar />
      <AllRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
