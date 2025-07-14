import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "@/routes/home";
import { PublicLayout } from "@/layouts/public-layout";
import { AuthLayout } from "@/layouts/auth-layout";
import { Dashboard } from "@/routes/dashboard";
import { Profile } from "@/routes/profile";

const App = () => {
  return (
    <Router>
      <AuthLayout />
      <Routes>
        /* Public routes */
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        /* Protected routes */
        

      </Routes>
    </Router>
  );
};

export default App;