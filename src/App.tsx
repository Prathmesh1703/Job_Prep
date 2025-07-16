import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "@/routes/home";
import { PublicLayout } from "@/layouts/public-layout";
import { AuthLayout } from "@/layouts/auth-layout";
import { Dashboard } from "@/routes/dashboard";
import { Profile } from "@/routes/profile";
import { HrInterview } from "@/mock-interview/HrInterview";
import ProtectRoutes from "./layouts/protected-routes";
import { MainLayout } from "./layouts/MainLayout";

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
          <Route path="mock-interview/HrInterview" element={<HrInterview />} />
        </Route>
        
        /* Protected routes */
       <Route
          element={
            <ProtectRoutes>
              <MainLayout />
            </ProtectRoutes>
          }
        >
          {/* add all the protect routes */}
          <Route element={<Generate />} path="/generate">
            <Route index element={<Dashboard />} />
            <Route path=":interviewId" element={<CreateEditPage />} />
            <Route path="interview/:interviewId" element={<MockLoadPage />} />
            <Route
              path="interview/:interviewId/start"
              element={<MockInterviewPage />}
            />
            <Route path="feedback/:interviewId" element={<Feedback />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;