import React, { useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const VideoDialog = ({ open, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const fileInputRef = useRef(null); // للتحكم في حقل الإدخال

  const handleSubmit = () => {
    if (title && description && videoFile) {
      onSubmit({ title, description, videoFile });
      setTitle("");
      setDescription("");
      setVideoFile(null);
      onClose();
    } else {
      alert("يرجى ملء جميع الحقول وتحميل فيديو!");
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideoFile(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click(); // فتح نافذة اختيار الملفات
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      dir="rtl"
      PaperProps={{
        sx: { borderRadius: "16px", m: 2, backgroundColor: "#fff" },
      }}
    >
      <DialogContent sx={{ p: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 500, color: "#000" }}>
            إضافة فيديو
          </Typography>
          <IconButton onClick={onClose} sx={{ color: "#000", p: 0, "&:hover": { backgroundColor: "transparent" } }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography sx={{ mb: 1, color: "#000", fontSize: "0.875rem" }}>
            عنوان الفيديو
          </Typography>
          <TextField
            fullWidth
            placeholder="اسم الفيديو"
            size="small"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                backgroundColor: "#fff",
                "& fieldset": { borderColor: "#E0E0E0" },
              },
            }}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography sx={{ mb: 1, color: "#000", fontSize: "0.875rem" }}>
            وصف قصير للفيديو
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            placeholder="وصف الفيديو"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                backgroundColor: "#fff",
                "& fieldset": { borderColor: "#E0E0E0" },
              },
            }}
          />
        </Box>
        <Box
          sx={{
            border: "2px dashed #E0E0E0",
            borderRadius: "8px",
            p: 3,
            mb: 3,
            textAlign: "center",
            cursor: "pointer",
            "&:hover": { backgroundColor: "#fafafa" },
          }}
          onClick={handleUploadClick} // جعل الـ Box زر للضغط
        >
          <input
            type="file"
            accept="video/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }} // إخفاء حقل الإدخال
          />
          <Typography sx={{ color: "#757575" }}>
            {videoFile ? videoFile.name : "تحميل الفيديو"}
          </Typography>
        </Box>
        <Button
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          sx={{
            backgroundColor: "#0D47A1",
            color: "#fff",
            borderRadius: "8px",
            py: 1.5,
            textTransform: "none",
            "&:hover": { backgroundColor: "#0A3880" },
          }}
        >
          إرسال المقالة
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default VideoDialog;

