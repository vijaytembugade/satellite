import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, UserProfile, JobListings } from '../screens';

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/jobListings" element={<JobListings />} />
      </Routes>
    </div>
  );
}

export { AllRoutes };
