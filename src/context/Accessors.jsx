// External Modules
import { useLocation, Navigate } from "react-router-dom";

const PROTECTED_ROUTES = ["/", "/search"];
const USER_PROTECTED_ROUTES = ["/login"];

export const AccessWraper = ({ children, User }) => {
  // Constants
  const location = useLocation();

  if (PROTECTED_ROUTES.includes(location.pathname) && !User?.data && !User?.isLoading) {
    return <Navigate to="/login" replace />;
  }

  if (USER_PROTECTED_ROUTES.includes(location.pathname) && User?.data && !User?.isLoading) {
    return <Navigate to="/" replace />;
  }

  return children;
};
