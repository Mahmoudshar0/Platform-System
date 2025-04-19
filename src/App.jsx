import React, { Children } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostSection from "./components/PostSection";
import Test from "./components/Test";
import AddTest from "./components/AddTest";
import TempComponent from "./components/TempPage";
import UploadedTest from "./components/UploadedTest";
import CompletedTest from "./components/CompletedTest";
import AddTestPage from "./pages/AddTestPage";
import LinkPosts from "./components/LinkPosts";
import VideoDialog from "./components/VideoDialog";
import AddContentDialog from "./components/AddContentDialog";
import Messages from "./components/Messages";
import PostCard from "./components/PostCard";
import ContentManagement from "./components/ContentManagement";
import LoginPage from "./components/Authentication/LoginPage"
import MainLayout from "./Layouts/MainLayout";
import AuthLayout from "./Layouts/AuthLayout";
import PasswordRecoveryPage from "./components/Authentication/PasswordRecoveryPage";
import VerificationCodePage from "./components/Authentication/VerificationCodePage";
import ResetPasswordPage from "./components/Authentication/ResetPasswordPage";

const App = () => {
  return (
    <Router>
      <Routes>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/password-recovery" element={<PasswordRecoveryPage />} />
          <Route path="/password-verify" element={<VerificationCodePage />} />
          <Route path="/password-Reset" element={<ResetPasswordPage />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/" element={<h1>الصفحة الرئيسية</h1>} />
          <Route path="/test" element={<Test />} />
          <Route path="/test/completedtest" element={<CompletedTest />} />
          <Route path="/test/uploadedtest" element={<UploadedTest />} />
          <Route path="/post" element={<LinkPosts />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/add-test" element={<AddTest />} />
          <Route path="/content" element={<ContentManagement />} />
        </Route>

      </Routes>
    </Router>
  );
};
export default App;
