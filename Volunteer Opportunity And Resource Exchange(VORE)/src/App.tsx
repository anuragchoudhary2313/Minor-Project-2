import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import OpportunitiesPage from './pages/OpportunitiesPage';
import ResourcesPage from './pages/ResourcesPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import ForumPage from './pages/ForumPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="opportunities" element={<OpportunitiesPage />} />
            <Route path="resources" element={<ResourcesPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="forum" element={<ForumPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;