import React, { useState, useEffect } from "react";
import { Box, Card, CardContent, CardMedia, Typography, Avatar, CardActions, Button, useMediaQuery, useTheme, IconButton, Menu, MenuItem } from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import EditIcon from "@mui/icons-material/Edit";
import Comments from "./Comments";
import Collapse from "@mui/material/Collapse";

function PostCard({ post, onDelete }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // < 600px (موبايل)
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600px - 900px (تابلت)
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg")); // > 1200px (ديسكتوب كبير)

  // التأكد من إن comments دايمًا مصفوفة
  const initialComments = Array.isArray(post.comments) ? post.comments : [];
  const [comments, setComments] = useState(initialComments);
  const [showComments, setShowComments] = useState(false);
  const [likes, setLikes] = useState(post.likes || 0);
  const [isLiked, setIsLiked] = useState(false);

  // State للتحكم في القايمة
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // State محلي لتخزين محتوى البوست
  const [postContent, setPostContent] = useState(post.content);

  // State لتخزين الوقت الديناميك
  const [dynamicTime, setDynamicTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const postDate = new Date(post.time);
      const now = new Date();
      const diffMs = now - postDate; // الفرق بالمللي ثانية

      const diffSeconds = Math.floor(diffMs / 1000);
      const diffMinutes = Math.floor(diffSeconds / 60);
      const diffHours = Math.floor(diffMinutes / 60);
      const diffDays = Math.floor(diffHours / 24);

      if (diffDays > 0) {
        setDynamicTime(`منذ ${diffDays} ${diffDays === 1 ? "يوم" : "أيام"}`);
      } else if (diffHours > 0) {
        setDynamicTime(`منذ ${diffHours} ${diffHours === 1 ? "ساعة" : "ساعات"}`);
      } else if (diffMinutes > 0) {
        setDynamicTime(`منذ ${diffMinutes} ${diffMinutes === 1 ? "دقيقة" : "دقايق"}`);
      } else {
        setDynamicTime(`منذ ${diffSeconds} ${diffSeconds === 1 ? "ثانية" : "ثواني"}`);
      }
    };

    updateTime(); // تحديث الوقت فورًا
    const interval = setInterval(updateTime, 60000); // تحديث كل دقيقة

    return () => clearInterval(interval); // تنظيف عند إلغاء التركيب
  }, [post.time]);

  const handleAddComment = (newComment) => {
    console.log("Received new comment in PostCard:", newComment);
    const updatedComments = Array.isArray(comments) ? [...comments, newComment] : [newComment];
    setComments(updatedComments);
    console.log("Updated comments state:", updatedComments);
  };

  const toggleComments = () => {
    setShowComments((prev) => !prev);
  };

  const handleLike = () => {
    if (isLiked) {
      setLikes((prevLikes) => {
        const newLikes = prevLikes - 1;
        console.log("Likes updated to:", newLikes);
        return newLikes;
      });
      setIsLiked(false);
    } else {
      setLikes((prevLikes) => {
        const newLikes = prevLikes + 1;
        console.log("Likes updated to:", newLikes);
        return newLikes;
      });
      setIsLiked(true);
    }
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(postContent).then(() => {
      alert("تم نسخ النص بنجاح!");
    }).catch(err => {
      console.error("فشل في النسخ:", err);
    });
    handleMenuClose();
  };

  const handleEdit = () => {
    const newContent = prompt("تعديل المنشور:", postContent);
    if (newContent !== null && newContent.trim() !== "") {
      setPostContent(newContent);
      console.log("تم تعديل المنشور إلى:", newContent);
    }
    handleMenuClose();
  };

  return (
    <Card
      sx={{
        maxWidth: "calc(100% - 200px)",
        width: "100%",
        margin: "20px auto",
        border: "1px solid #e0e0e0",
        borderRadius: "10px",
        minHeight: { xs: 250, sm: 300, md: 350 },
        overflow: "visible",
        position: "relative",
        padding: { xs: 1, sm: 2 },
      }}
    >
      {/* زر الحذف وأيقونة التلات نقاط في أعلى اليسار */}
      <Box sx={{ position: "absolute", top: { xs: 5, sm: 10 }, left: { xs: 5, sm: 10 }, display: "flex", alignItems: "center" }}>
        <IconButton
          onClick={handleMenuClick}
          sx={{ marginRight: { xs: 0.5, sm: 1 }, padding: { xs: "2px", sm: "5px" } }}
        >
          <MoreVertIcon sx={{ fontSize: { xs: 18, sm: 24 } }} />
        </IconButton>
        <Button
          startIcon={<DeleteIcon />}
          onClick={() => onDelete(post.id)}
          sx={{
            color: "#d32f2f",
            border: "1px solid #eee",
            fontSize: { xs: "12px", sm: "14px" },
            padding: { xs: "2px 5px", sm: "5px" },
          }}
        >
          حذف المنشور
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          PaperProps={{
            sx: {
              width: { xs: 150, sm: 200 },
              fontSize: { xs: "12px", sm: "14px" },
            },
          }}
        >
          <MenuItem onClick={handleCopy} sx={{ fontSize: { xs: "12px", sm: "14px" }, padding: { xs: "6px 12px", sm: "8px 16px" } }}>
            <ContentCopyIcon sx={{ marginRight: 1, fontSize: { xs: 16, sm: 18 } }} /> نسخ
          </MenuItem>
          <MenuItem onClick={handleEdit} sx={{ fontSize: { xs: "12px", sm: "14px" }, padding: { xs: "6px 12px", sm: "8px 16px" } }}>
            <EditIcon sx={{ marginRight: 1, fontSize: { xs: 16, sm: 18 } }} /> تعديل
          </MenuItem>
        </Menu>
      </Box>

      {/* صورة البروفايل والاسم */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: { xs: "5px", sm: "10px" },
          flexDirection: "row-reverse",
          flexWrap: "wrap",
        }}
      >
        <Avatar
          src={post.avatar}
          alt="User"
          sx={{ width: { xs: 30, sm: 40 }, height: { xs: 30, sm: 40 }, marginLeft: { xs: 1, sm: 2 } }}
        />
        <Box>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", fontSize: { xs: "14px", sm: "16px" } }}
          >
            {post.userName}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#555", marginTop: { xs: 0.5, sm: 1 }, fontSize: { xs: "12px", sm: "14px" } }}
          >
            {post.userTitle}
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "#90949c", marginLeft: { xs: 1, sm: 2 }, marginTop: { xs: -1, sm: -2 }, fontSize: { xs: "10px", sm: "12px" } }}
          >
            {dynamicTime || post.time} {/* استخدام الوقت الديناميك إذا موجود */}
          </Typography>
        </Box>
      </Box>

      <CardContent sx={{ padding: { xs: 1, sm: 2 } }}>
        <Typography
          variant="body1"
          color="text.primary"
          sx={{ fontSize: { xs: "14px", sm: "16px" }, lineHeight: 1.5 }}
        >
          {postContent}
        </Typography>

        {post.image && (
          <CardMedia
            component="img"
            image={post.image}
            alt="Post Image"
            sx={{
              display: "block",
              margin: { xs: "10px auto", sm: "15px auto" },
              borderRadius: "10px",
              width: "100%",
              maxHeight: { xs: 200, sm: 300, md: 400 },
              objectFit: "cover",
            }}
          />
        )}
      </CardContent>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: { xs: "0 10px", sm: "0 40px" },
          color: "#555",
          fontSize: { xs: "12px", sm: "14px" },
        }}
      >
        <Typography
          variant="body2"
          onClick={toggleComments}
          sx={{
            cursor: "pointer",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          {Array.isArray(comments) ? comments.length : 0} تعليق
        </Typography>
        <Typography variant="body2">{likes} إعجاب</Typography>
      </Box>

      <hr
        style={{
          border: "0.5px solid #ddd",
          width: { xs: "90%", sm: "95%" },
          margin: { xs: "5px auto", sm: "10px auto" },
        }}
      />

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: { xs: 1, sm: 2 },
          padding: { xs: "5px", sm: "10px" },
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Button
          startIcon={<SendOutlinedIcon sx={{ color: "#818181", fontSize: { xs: 16, sm: 20 } }} />}
          sx={{ color: "#000000", fontSize: { xs: 12, sm: 14 } }}
        >
          مراسلة
        </Button>
        <Button
          startIcon={<ChatBubbleOutlineIcon sx={{ color: "#818181", fontSize: { xs: 16, sm: 20 } }} />}
          sx={{ color: "#000000", fontSize: { xs: 12, sm: 14 } }}
          onClick={toggleComments}
        >
          تعليق
        </Button>
        <Button
          startIcon={
            <ThumbUpIcon sx={{ color: isLiked ? "#0066ff" : "#818181", fontSize: { xs: 16, sm: 20 } }} />
          }
          sx={{
            color: isLiked ? "#0066ff" : "#000000",
            fontSize: { xs: 12, sm: 14 },
          }}
          onClick={handleLike}
        >
          أعجبني
        </Button>
      </CardActions>

      {/* التعليقات */}
      <Collapse in={showComments}>
        <Box
          sx={{
            padding: { xs: 1, sm: 2, md: 3 },
            minHeight: { xs: 150, sm: 200 },
            overflow: "auto",
          }}
        >
          <Comments commentsData={comments} onAddComment={handleAddComment} />
        </Box>
      </Collapse>
    </Card>
  );
}

export default PostCard;
