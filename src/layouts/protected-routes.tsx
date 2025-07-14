import { LoaderPage } from "@/routes/loader-page";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

const ProtectRoutes = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <LoaderPage />;
  }

  if (!isAuthenticated) {
    // Optionally, you can trigger loginWithRedirect here
    // loginWithRedirect();
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectRoutes;