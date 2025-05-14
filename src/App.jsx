import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Layouts
import AuthLayout from "./Layouts/AuthLayout";
import MainLayout from "./Layouts/MainLayout";

// Authentication
import LoginPage from "./components/Authentication/LoginPage";
import PasswordRecoveryPage from "./components/Authentication/PasswordRecoveryPage";
import VerificationCodePage from "./components/Authentication/VerificationCodePage";
import ResetPasswordPage from "./components/Authentication/ResetPasswordPage";

// Main Components
import Dashboard from "./components/Home/Dashboard";
import Test from "./components/Test";
import CompletedTest from "./components/CompletedTest";
import UploadedTest from "./components/UploadedTest";
import AddTest from "./components/AddTest";
import AddTestPage from "./pages/AddTestPage";
import LinkPosts from "./components/LinkPosts";
import Messages from "./components/Messages";
import Assignments from "./components/Assignments/Assignments";
import PostSection from "./components/PostSection";
import TempComponent from "./components/TempPage";
import ContentManagement from './ContentFile/ContentManagement';
import AllFilesPage from "./ContentFile/AllFilesPage";
import TestPages from "./ContentFile/TestPages";
import MessagesPage from "./components/MessagePage";
import SettingPage from "./Settings/SettingPage";
// import LiveVideo from "./components/Home/LiveVideo";
import Welcome from "./components/Welcome/Welcome";
import Domain from "./components/Welcome/Domain";
const App = () => {
  return (
    <Router>

      <Routes>
        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/password-recovery" element={<PasswordRecoveryPage />} />
          <Route path="/password-verify" element={<VerificationCodePage />} />
          <Route path="/password-reset" element={<ResetPasswordPage />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/domain" element={<Domain />} />
        </Route>

        {/* Main App Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/test" element={<Test />} />
          <Route path="/test/completedtest" element={<CompletedTest />} />
          <Route path="/test/uploadedtest" element={<UploadedTest />} />
          <Route path="/post" element={<LinkPosts />} />
          <Route path="/posts" element={<LinkPosts />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/me" element={<MessagesPage />} />
          <Route path="/postsection" element={<PostSection />} />
          <Route path="/add-test" element={<AddTest />} />
          <Route path="/add-test-page" element={<AddTestPage />} />
          <Route path="/temp" element={<TempComponent />} />
          <Route path="/content" element={<ContentManagement />} />
          <Route path="/all" element={<AllFilesPage />} />
          <Route path="/pages" element={<TestPages />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/settings" element={<SettingPage />} />
          {/* <Route path="/live" element={<LiveVideo />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
