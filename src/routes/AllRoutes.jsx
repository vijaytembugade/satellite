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
  ProfileShare,
} from '../screens';

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/share/profile/:id" element={<ProfileShare />} />
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
        <Route
          path="/jobDescription/:jobID"
          element={
            <RequireAuth>
              <JobDescription />
            </RequireAuth>
          }
        />
        <Route
          path="/jobs"
          element={
            <RequireAuth>
              <JobListing />
            </RequireAuth>
          }
        />
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
