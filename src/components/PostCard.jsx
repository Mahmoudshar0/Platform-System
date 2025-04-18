// PostCard.js
import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, Avatar } from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { CardActions, Button } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

function PostCard({ post }) {
  return (
    <Card sx={{ maxWidth: 800, margin: "20px auto", boxShadow: 2, borderRadius: "10px", width: "100%" }}>
      {/* صورة البروفايل والاسم */}
      <Box sx={{ display: "flex", alignItems: "center", padding: "10px", flexDirection: "row-reverse" }}>
        <Avatar src={post.avatar} alt="User" sx={{ marginLeft: "10px" }} />
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {post.userName}
          </Typography>
          <Typography variant="body2" sx={{ color: "#555", marginTop: "2px" }}>
            {post.userTitle}
          </Typography>
          <Typography variant="caption" sx={{ color: "#90949c", marginLeft: "10px", marginTop: "-4px" }}>
            {post.time}
          </Typography>
        </Box>
      </Box>

      <CardContent>
        <Typography variant="body1" color="text.primary">
          {post.content}
        </Typography>

        {post.image && (
          <CardMedia
            component="img"
            image={post.image}
            alt="Post Image"
            sx={{
              display: "block",
              margin: "15px auto",
              borderRadius: "10px",
              width: "99%",
              maxHeight: "400px",
            }}
          />
        )}
      </CardContent>

      <Box sx={{ display: "flex", justifyContent: "space-between", padding: "0 40px", color: "#555", fontSize: "14px" }}>
        <Typography variant="body2">{post.comments} تعليق</Typography>
        <Typography variant="body2">{post.likes} إعجاب</Typography>
      </Box>

      <hr style={{ border: "0.5px solid #ddd", width: "90%", margin: "10px auto" }} />

      <CardActions sx={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
        <Button startIcon={<SendOutlinedIcon sx={{ color: "#818181" }} />} sx={{ color: "#000000" }}>
          مراسلة
        </Button>
        <Button startIcon={<ChatBubbleOutlineIcon sx={{ color: "#818181" }} />} sx={{ color: "#000000" }}>
          تعليق
        </Button>
        <Button startIcon={<ThumbUpIcon sx={{ color: "#818181" }} />} sx={{ color: "#000000" }}>
          أعجبني
        </Button>
      </CardActions>
    </Card>
  );
}

export default PostCard;


