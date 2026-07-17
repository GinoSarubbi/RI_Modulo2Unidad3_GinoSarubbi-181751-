import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ usuario, children }) {
  const location = useLocation();

  if (!usuario) {

    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute;
