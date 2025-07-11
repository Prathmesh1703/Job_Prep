import { Button } from "@/components/ui/button"
import { useAuth0 } from "@auth0/auth0-react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomePage } from "@/routes/home";
import { PublicLayout } from "@/layouts/public-layout";
// import AuthenticationLayout from "@/layouts/auth-layout";
// import LoginButton from "./routes/logIn";
// import LogoutButton from "./routes/logout";


const App = () => {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route element={<PublicLayout />}>
            <Route index element={<HomePage />} />
        </Route>  

        {/* authentication layout */}
        <div className="Login_Logout" style={{ textAlign: "right" }}>
      {
        isAuthenticated ? (
          <div>
        {user && (
          <>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </>
        )}
            <Button onClick={() => logout({})}>
              Log Out
            </Button>
          </div>
        ) : (
          <Button onClick={() => loginWithRedirect()}>
            Log In
          </Button>
        )
  }
      </div>
    </Routes>
  </Router>
  );
}


export default App