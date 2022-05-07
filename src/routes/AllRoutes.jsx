import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, UserProfile, JobListings, Auth, Role } from '../screens';

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/jobListings" element={<JobListings />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/role" element={<Role />} />
      </Routes>
    </div>
  );
}

export { AllRoutes };
