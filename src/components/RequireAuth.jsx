import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts';

export const RequireAuth = ({ children }) => {
  const { state } = useAuth();
  const location = useLocation();

  return state.isLoggedIn ? (
    children
  ) : (
    <Navigate to="/auth" state={{ from: location }} replace />
  );
};
