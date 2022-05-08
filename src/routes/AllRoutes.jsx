import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RequireAuth } from '../components';
import {
  UserProfile,
  JobListing,
  Auth,
  Homepage,
  JobReferalForm,
  Profile,
  JobDescription,
} from '../screens';

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route
          path="/referalForm"
          element={
            <RequireAuth>
              <JobReferalForm />
            </RequireAuth>
          }
        />
        <Route
          path="/referalForm/:jobID"
          element={
            <RequireAuth>
              <JobReferalForm />
            </RequireAuth>
          }
        />
        <Route path="/jobDescription/:jobID" element={<JobDescription />} />
        <Route path="/jobs" element={<JobListing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export { AllRoutes };
