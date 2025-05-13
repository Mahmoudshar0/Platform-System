import React, { useState } from "react";
import { Box, Button } from "@mui/material"; // إضافة Button للـ import
import PostCard from "./PostCard";
import AddContentDialog from "./AddContentDialog";

function PostSection() {
  // State للمنشورات (ديناميكية)
  const [posts, setPosts] = useState([
    {
      id: 1,
      userName: "محمد عبد الحميد",
      userTitle: "د. مادة أساسيات البرمجة",
      time: "منذ 5 دقائق",
      content: "هذا هو محتوى المنشور، يمكنك كتابة أي نص هنا ليظهر فوق الصورة.",
      image: "/images/logo.jpg",
      likes: 25,
      comments: 10,
      avatar: "/public/imagess/profile.jpg",
    },
    {
      id: 2,
      userName: "أحمد علي",
      userTitle: "طالب في كلية الحاسبات",
      time: "منذ 10 دقائق",
      content: "منشور آخر للتجربة، هذا نص مختلف.",
      image: "/images/logo.jpg",
      likes: 15,
      comments: 5,
      avatar: "/public/imagess/profile2.jpg",
    },
    {
      id: 3,
      userName: "سارة محمد",
      userTitle: "طالبة في كلية الآداب",
      time: "منذ 15 دقيقة",
      content: "هذا منشور ثالث للتجربة، محتوى مختلف تمامًا!",
      image: "/images/logo.jpg",
      likes: 30,
      comments: 8,
      avatar: "/public/imagess/profile3.jpg",
    },
    {
      id: 4,
      userName: "ريهام أحمد",
      userTitle: "طالبة في كلية الحاسبات",
      time: "منذ 20 دقيقة",
      content: "BIS",
      image: null,
      likes: 0,
      comments: 0,
      avatar: "/public/imagess/profile4.jpg",
    },
  ]);

  // State للتحكم في فتح/غلق Dialog
  const [openAddDialog, setOpenAddDialog] = useState(false);

  // دالة لحذف منشور معين مع رسالة تأكيد
  const handleDeletePost = (id) => {
    const confirmDelete = window.confirm("هل أنت متأكد أنك تريد حذف هذا المنشور؟");
    if (confirmDelete) {
      setPosts(posts.filter((post) => post.id !== id));
      console.log(`Post with id ${id} deleted.`); // Debugging
    }
  };

  // دالة لإضافة منشور جديد
  const handleAddPost = (newPost) => {
    const newId = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1; // تحديد ID جديد
    const postWithDetails = {
      ...newPost,
      id: newId,
      userName: "مستخدم جديد",
      userTitle: "طالب",
      time: "الآن",
      likes: 0,
      comments: 0,
      avatar: "/public/imagess/profile5.jpg",
    };
    setPosts([postWithDetails, ...posts]); // إضافة المنشور الجديد في الأعلى
    console.log("New post added:", postWithDetails); // Debugging
  };

  // دالة لإضافة فيديو (غير مستخدمة حاليًا)
  const handleAddVideo = (newVideo) => {
    console.log("New video added:", newVideo); // Debugging
  };

  return (
    <Box sx={{ padding: "20px" }}>
      
    

      {/* Dialog لإضافة المحتوى */}
      <AddContentDialog
        open={openAddDialog}
        onClose={() => setOpenAddDialog(false)}
        onPostSubmit={handleAddPost}
        onVideoSubmit={handleAddVideo}
      />

      {/* عرض المنشورات */}
      {posts.map((post) => (
        <Box key={post.id} sx={{ marginBottom: "10px" }}>
          <PostCard post={post} onDelete={handleDeletePost} />
        </Box>
      ))}
    </Box>
  );
}

export default PostSection;
