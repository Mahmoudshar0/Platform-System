import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
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
// import NotificationDropdown from "./components/NotificationDropdown";
// import TaskTable from "./components/TaskTable";
// import live from "./components/live";

const App = () => {
  return (
    <Router>
        <Sidebar />
          <Header />
          {/* <NotificationDropdown /> */}

          
          
          <Routes>
  <Route path="/" element={<h1>الصفحة الرئيسية</h1>} />
  <Route path="/test" element={<Test />} />
  <Route path="/test/completedtest" element={<CompletedTest />} />
  <Route path="/test/uploadedtest" element={<UploadedTest />} />
  <Route path="/post" element={<LinkPosts />} />
  <Route path="/Posts" element={<LinkPosts />} />
  <Route path="/messages" element={<Messages />} />
  <Route path="/PostSection" element={<PostSection />} />
  <Route path="/add-test" element={<AddTest />} />
  <Route path="/add-test-page" element={<AddTestPage />} />
  <Route path="/temp" element={<TempComponent />} />
  <Route path="/content" element={<ContentManagement />} />
  {/* <Route path="/Notification" element={<Notificatio />} /> */}
  {/* <Route path="/content/tasks" element={<TaskTable />} /> */}
</Routes>

        
    </Router>
  );
};

export default App;
