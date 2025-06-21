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
import Welcome from "./components/Welcome/Welcome";
import Domain from "./components/Welcome/Domain";


// import all user pages
import  {PdfPage} from "./pages/PdfPage/PdfPage";

// PDF Viewer
import  PDFViewerPage  from "./pages/PdfPage/PDFViewer"; 

// Articles
import ArticlePage from "./pages/Articlespage/Articlepage";
import Article  from "./pages/Articlespage/Article";
import UserDashboard from "./components/UserDashboard/UserHome";
import UserProfile from "./components/UserDashboard/Interaction page/Socialmedia/Userprofile";
import VideoUploadForm from "./components/Home/VideoUploadForm";
import Notifications from "./components/UserDashboard/Interaction page/Socialmedia/Notifications";
import ProtectedRoute from "./components/Authentication/ProtectedRoute";
import MainDashboard from "./components/UserDashboard/MainDashboard";
import ListTests from "./components/UserDashboard/EducationalContent/ListTests";
import SubmitAssignments from "./components/UserDashboard/EducationalContent/SubmitAssignments";
import ChatGPT from "./components/UserDashboard/EducationalContent/ChatGPT";
import UserInteraction from "./components/UserDashboard/ReactionUsers/UserInteraction";
import AddLive from "./components/Home/Live/AddLive";
import Live from "./components/Home/Live/live";

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
          <Route path="/live" element={<Live />} />

        </Route>

        <Route element={<UserDashboard />}>
          <Route path="/userdashboard" element={<MainDashboard />} />
          <Route path="/userdashboard/userprofile" element={<UserProfile />} />
          <Route path="/userdashboard/VideoUploadForm" element={<VideoUploadForm />} />
          <Route path="/userdashboard/notifications" element={<Notifications />} />
          <Route path="/userdashboard/ListTests" element={<ListTests />} />
          <Route path="/userdashboard/SubmitAssignments" element={<SubmitAssignments />} />
          <Route path="/userdashboard/ChatGPT" element={<ChatGPT />} />
          <Route path="/userdashboard/UserInteraction" element={<UserInteraction />} />
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
          <Route path="/AddLive" element={<AddLive />} />
          <Route path="/pdfpage" element={<PdfPage/>} />
          <Route path="/pdf-viewer/:pdfId" element={<PDFViewerPage/>} />
          {/* //--------------------- */}
          <Route path="/article" element={<ArticlePage/>} /> 
          <Route path="/article/:articleId" element={<Article />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
