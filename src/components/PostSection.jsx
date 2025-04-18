import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import PostCard from "./PostCard";

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
  ]);

  // دالة لحذف منشور معين
  const handleDeletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <Box sx={{ padding: "20px" }}>
      {posts.map((post) => (
        <Box key={post.id} sx={{ marginBottom: "10px" }}>
          <PostCard post={post} />
          <Button 
            variant="contained" 
            color="error" 
            onClick={() => handleDeletePost(post.id)}
            sx={{ marginTop: "10px" }}
          >
            حذف المنشور
          </Button>
        </Box>
      ))}
    </Box>
  );
}

export default PostSection;

