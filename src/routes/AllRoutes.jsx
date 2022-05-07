import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  UserProfile,
  JobReferalForm,
  Auth,
  Role,
  Profile,
} from '../screens';

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/referalForm" element={<JobReferalForm />} />
        <Route path="/auth" element={<Auth />} />
        {/* Not needed Remove Later */}
        <Route path="/role" element={<Role />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export { AllRoutes };
