import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../utils/auth.js';

/**
 * Protect private routes
 * Redirects to login if not authenticated
 */
export default function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
}
