import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, Outlet } from "react-router-dom";
import AddContentDialog from "./AddContentDialog";

function LinkPosts() {
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [posts, setPosts] = useState([]);
  const [videos, setVideos] = useState([]);
  const [activeLink, setActiveLink] = useState("posts");

  const handlePostSubmit = (post) => {
    setPosts([...posts, { ...post, id: Date.now() }]);
  };

  const handleVideoSubmit = (video) => {
    setVideos([...videos, { ...video, id: Date.now() }]);
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const handleDeleteVideo = (id) => {
    setVideos(videos.filter((video) => video.id !== id));
  };

  const renderContentItem = (item, type, onDelete) => (
    <Box
      sx={{
        my: 2,
        p: 2,
        border: "1px solid #ccc",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        position: "relative",
      }}
    >
      <Typography sx={{ fontWeight: "bold" }}>
        {type === "post" ? "منشور" : item.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {type === "post" ? item.content : item.description}
      </Typography>
      {item.video && (
        <video controls src={URL.createObjectURL(item.video)} style={{ maxWidth: "100%", marginTop: "8px" }} />
      )}
      {item.image && (
        <img src={URL.createObjectURL(item.image)} alt="post" style={{ maxWidth: "100%", marginTop: "8px" }} />
      )}
      {type === "video" && item.videoFile && (
        <video controls src={URL.createObjectURL(item.videoFile)} style={{ maxWidth: "100%", marginTop: "8px" }} />
      )}
      <Button
        variant="outlined"
        color="error"
        startIcon={<DeleteIcon />}
        onClick={() => onDelete(item.id)}
        sx={{
          alignSelf: "flex-end",
          mt: 1,
          textTransform: "none",
          borderRadius: "8px",
        }}
      >
        حذف
      </Button>
    </Box>
  );

  return (
    <Box sx={{ width: "calc(100vw - 300px)", m: 0, p: 0 }}>
      {/* اللينكات في أقصى اليمين */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "28px",
          px: 6,
          py: 2,
          justifyContent: "flex-end",
          marginTop:"25px"
        }}
      >
        <Link
          to="/messages"
          style={{
            textDecoration: "none",
            color: activeLink === "posts" ? "#E3E3E3" : "inherit",
            fontWeight: "bold",
          }}
          onClick={() => setActiveLink("posts")}
        >
          الرسائل
        </Link>
        <Link
          to="/posts"
          style={{
            textDecoration: "none",
            color: activeLink === "messages" ? "#E3E3E3" : "inherit",
            fontWeight: "bold",
          }}
          onClick={() => setActiveLink("messages")}
        >
                    المنتديات (المنشورات)

        </Link>
      </Box>

      {/* الخط الفاصل باستخدام Box */}
      <Box
        sx={{
          width: "calc(100% - 96px)", // العرض بعد طرح الـ padding (px: 6 = 48px لكل جهة)
          margin: "0 auto", // التوسيط لضمان المساواة من الناحيتين
          borderBottom: "1px solid #ccc",
          opacity: "0.5",
          position: "relative",
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          py: 2,
          px: 6,
        }}
      >
        <Button
          startIcon={<AddIcon sx={{ marginLeft: "5px" }} />}
          sx={{
            textTransform: "none",
            borderRadius: 1,
            fontWeight: "bold",
            border: "1px solid #818181",
            color: "#818181",
            direction: "rtl",
          }}
          onClick={() => setOpenAddDialog(true)}
        >
          إضافة منشور جديد
        </Button>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <TextField
            placeholder="بحث..."
            variant="outlined"
            sx={{
              bgcolor: "#F0F0F0",
              borderRadius: 1,
              width: { xs: "100%", sm: 300 },
              "& .MuiOutlinedInput-root": {
                borderRadius: 1,
                fontSize: 14,
                "& input": { padding: "8px 14px" },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <SearchIcon sx={{ color: "#888", fontSize: 16 }} />
                </InputAdornment>
              ),
            }}
          />
          
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              fontSize: 14,
              border: "1px solid #EBEBEB",
              color: "#667085",
              "&:hover": { backgroundColor: "#f5f5f5" },
            }}
          >
            <FilterListIcon sx={{ fontSize: 20 }} /> فلترة
          </Button>
        </Box>
      </Box>
      <AddContentDialog
        open={openAddDialog}
        onClose={() => setOpenAddDialog(false)}
        onPostSubmit={handlePostSubmit}
        onVideoSubmit={handleVideoSubmit}
      />
      <Box sx={{ px: 6 }}>
        {posts.map((post) => renderContentItem(post, "post", handleDeletePost))}
        {videos.map((video) => renderContentItem(video, "video", handleDeleteVideo))}
      </Box>
      {/* <Outlet /> */}
    </Box>
    
  );
}

export default LinkPosts;





