import { useState } from "react";
import { Box, Typography, IconButton, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function Comments({ commentsData, onAddComment }) {
  const [newComment, setNewComment] = useState(""); // نص التعليق الجديد
  const [replyInputIndex, setReplyInputIndex] = useState(null); // لتحديد أي تعليق عليه رد مفتوح
  const [replyText, setReplyText] = useState(""); // نص الرد الذي يكتبه المستخدم

  // Debugging: التأكد من قيمة commentsData
  console.log("Comments Component Rendered, commentsData:", commentsData);

  // التعامل مع الحالة لو commentsData مش مصفوفة
  const isCommentsArray = Array.isArray(commentsData);
  console.log("Is commentsData an array?", isCommentsArray);

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      console.log("Adding new comment:", newComment);
      onAddComment({
        name: "أنت",
        content: newComment,
        avatar: "",
      });
      setNewComment("");
    } else {
      console.log("New comment is empty, cannot add.");
    }
  };

  const handleReplyClick = (index) => {
    if (replyInputIndex === index) {
      setReplyInputIndex(null); // لو تم الضغط مرة ثانية، يقفل مربع الرد
    } else {
      setReplyInputIndex(index); // يفتح مربع الرد على تعليق معين
    }
    setReplyText(""); // مسح نص الرد لما نفتح خانة جديدة
  };

  const handleSendReply = (commentIndex) => {
    if (replyText.trim() !== "") {
      console.log("Adding reply to comment", commentIndex, ":", replyText);
      onAddComment({
        name: "أنت",
        content: replyText,
        avatar: "",
        replyTo: commentIndex, // نحدد إن ده رد على تعليق معين
      });
      setReplyText("");
      setReplyInputIndex(null); // قفل خانة الرد بعد الإرسال
    } else {
      console.log("Reply is empty, cannot add.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "200px",
        position: "relative",
      }}
    >
      {/* خانة إضافة تعليق جديد (هتظهر مع الـ Collapse) */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#fff",
          padding: "10px",
          display: "flex",
          alignItems: "center",
          gap: 1,
          direction: "rtl",
        }}
      >
        <TextField
          fullWidth
          size="small"
          placeholder="اكتب تعليقك هنا..."
          variant="outlined"
          value={newComment}
          onChange={(e) => {
            console.log("New comment input:", e.target.value);
            setNewComment(e.target.value);
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
            },
          }}
        />
        <IconButton onClick={handleAddComment} color="primary">
          <SendIcon />
        </IconButton>
      </Box>

      {/* التعليقات */}
      {isCommentsArray ? (
        commentsData.map((comment, index) => (
          <Box key={index}>
            {/* التعليق الأساسي */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                gap: 2,
                padding: "10px",
                borderBottom: "1px solid #eee",
              }}
            >
              <Typography variant="body1">{comment.content}</Typography>
              {/* زر الرد */}
              <Button
                variant="text"
                size="small"
                onClick={() => handleReplyClick(index)}
                sx={{ color: "#0066ff", fontSize: "12px" }}
              >
                رد
              </Button>
            </Box>

            {/* خانة الرد لو مفتوحة */}
            {replyInputIndex === index && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  alignItems: "center",
                  gap: 1,
                  padding: "10px",
                  paddingRight: "30px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "10px",
                  margin: "5px 0",
                }}
              >
                <TextField
                  fullWidth
                  size="small"
                  placeholder="اكتب ردك هنا..."
                  variant="outlined"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "20px",
                    },
                  }}
                />
                <IconButton onClick={() => handleSendReply(index)} color="primary">
                  <SendIcon />
                </IconButton>
              </Box>
            )}

            {/* عرض الردود أسفل التعليق */}
            {commentsData
              .filter((reply) => reply.replyTo === index)
              .map((reply, replyIndex) => (
                <Box
                  key={replyIndex}
                  sx={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    alignItems: "center",
                    gap: 2,
                    padding: "10px",
                    paddingRight: "30px",
                    backgroundColor: "#f5f5f5",
                    borderRadius: "10px",
                    margin: "5px 0",
                  }}
                >
                  <Typography variant="body2">{reply.content}</Typography>
                </Box>
              ))}
          </Box>
        ))
      ) : (
        <Typography>لا توجد تعليقات لعرضها.</Typography>
      )}
    </Box>
  );
}

export default Comments;