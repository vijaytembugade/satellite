import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  UserProfile,
  JobListing,
  Auth,
  Role,
  Homepage,
  JobReferalForm,
  Profile,
  Chat,
} from '../screens';

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/referalForm" element={<JobReferalForm />} />
        <Route path="/referalForm/:jobID" element={<JobReferalForm />} />
        <Route path="/jobs" element={<JobListing />} />
        <Route path="/auth" element={<Auth />} />
        {/* Not needed Remove Later */}
        <Route path="/role" element={<Role />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chat/:chatId" element={<Chat />} />
      </Routes>
    </div>
  );
}

export { AllRoutes };
