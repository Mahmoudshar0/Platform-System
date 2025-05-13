
// <<<<<<< HEAD
// import React, { Children } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import AuthLayout from "./Layouts/AuthLayout";
// import MainLayout from "./Layouts/MainLayout";
// import Test from "./components/Test";
// import LoginPage from "./components/Authentication/LoginPage"
// import PasswordRecoveryPage from "./components/Authentication/PasswordRecoveryPage";
// import VerificationCodePage from "./components/Authentication/VerificationCodePage";
// import ResetPasswordPage from "./components/Authentication/ResetPasswordPage";
// import AddTest from "./components/AddTest";
// import UploadedTest from "./components/UploadedTest";
// import CompletedTest from "./components/CompletedTest";
// import LinkPosts from "./components/LinkPosts";
// import Messages from "./components/Messages";
// import ContentManagement from "./components/ContentManagement";
// import Dashboard from "./components/Home/Dashboard";
// import Assignments from "./components/Assignments/Assignments";


// const App = () => {
//   return (
//     <Router>
//       <Routes>

//         <Route element={<AuthLayout />}>
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/password-recovery" element={<PasswordRecoveryPage />} />
//           <Route path="/password-verify" element={<VerificationCodePage />} />
//           <Route path="/password-Reset" element={<ResetPasswordPage />} />
//         </Route>

//         <Route element={<MainLayout />}>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/test" element={<Test />} />
//           <Route path="/test/completedtest" element={<CompletedTest />} />
//           <Route path="/test/uploadedtest" element={<UploadedTest />} />
//           <Route path="/post" element={<LinkPosts />} />
//           <Route path="/messages" element={<Messages />} />
//           <Route path="/add-test" element={<AddTest />} />
//           <Route path="/content" element={<ContentManagement />} />
//           <Route path="/assignments" element={<Assignments />} />
//         </Route>

//       </Routes>
//     </Router>
//   );
// };
// export default App;
// =======
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
// import Header from "./components/Header";
// import PostSection from "./components/PostSection";
// import Test from "./components/Test";
// import AddTest from "./components/AddTest";
// import TempComponent from "./components/TempPage";
// import UploadedTest from "./components/UploadedTest";
// import CompletedTest from "./components/CompletedTest";
// import AddTestPage from "./pages/AddTestPage";
// import LinkPosts from "./components/LinkPosts";
// import VideoDialog from "./components/VideoDialog";
// import AddContentDialog from "./components/AddContentDialog";
// import Messages from "./components/Messages";
// import PostCard from "./components/PostCard";
// import ContentManagement from './ContentFile/ContentManagement';
// import AllFilesPage from "./ContentFile/AllFilesPage";
// import TestPages from "./ContentFile/TestPages";
// import Tables from "./ContentFile/Tables";
// import TableRow from "./ContentFile/TableRow";
// import ProgressBar from "./ContentFile/ProgressBar";
// import MessagesPage from "./components/MessagePage";
// import MessageList from "./components/MessageList";
// // import  Groups from "./components/Groups";
// import Settings from "./Settings/SettingPage";
// import SettingPage from "../src/Settings/SettingPage";




// // import NotificationDropdown from "./components/NotificationDropdown";
// // import TaskTable from "./components/TaskTable";
// // import live from "./components/live";

// const App = () => {
//   return (
//     <Router>
//         <Sidebar />
//           <Header />
        
//           <Routes>
//   <Route path="/" element={<h1>الصفحة الرئيسية</h1>} />
//   <Route path="/test" element={<Test />} />
//   <Route path="/test/completedtest" element={<CompletedTest />} />
//   <Route path="/test/uploadedtest" element={<UploadedTest />} />
//   <Route path="/post" element={<LinkPosts />} />
//   <Route path="/Posts" element={<LinkPosts />} />
//   <Route path="/messages" element={<Messages />} />
//   {/* <Route path="/Groups" element={<Groups/>} /> */}
//   <Route path="/PostSection" element={<PostSection />} />
//   <Route path="/add-test" element={<AddTest />} />
//   <Route path="/add-test-page" element={<AddTestPage />} />
//   <Route path="/temp" element={<TempComponent />} />
//   <Route path="/content" element={<ContentManagement />} />
//   <Route path="/all" element={<AllFilesPage />} />
//   <Route path="/test" element={<TestPages />} />
//   <Route path="/Pages" element={<TestPages />} />
//   {/* <Route path="/all" element={<TestPages />} /> */}
//   <Route path="/me" element={<MessagesPage />} />
//   <Route path="/Settings" element={<Settings />} />
//   <Route path="/Settings" element={<SettingPage />} /> 
//   {/* <Route path="/Notification" element={<Notificatio />} /> */}
//   {/* <Route path="/content/tasks" element={<TaskTable />} /> */}
// </Routes>

        
//     </Router>
//   );
// };

// export default App;
// >>>>>>> master

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Layouts
import AuthLayout from "./Layouts/AuthLayout";
import MainLayout from "./Layouts/MainLayout";

// Global UI
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

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
import Tables from "./ContentFile/Tables";
import TableRow from "./ContentFile/TableRow";
import ProgressBar from "./ContentFile/ProgressBar";
import MessagesPage from "./components/MessagePage";
import MessageList from "./components/MessageList";
import SettingPage from "./Settings/SettingPage"; // Assuming this is the correct one

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
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
