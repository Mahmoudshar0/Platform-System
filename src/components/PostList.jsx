import React, { useState } from "react";
import { Dialog, DialogContent, DialogActions, Button, TextField, Box, Typography } from "@mui/material";

const PostList = ({ open, onClose, onSubmit }) => {
  const [content, setContent] = useState(""); // State لتخزين نص المنشور
  const [image, setImage] = useState(null); // State لتخزين ملف الصورة

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // تحويل الملف لـ URL مؤقت
      setImage(imageUrl);
      console.log("Selected image:", imageUrl); // Debugging
    }
  };

  const handleSubmit = () => {
    if (content.trim() === "") {
      alert("يرجى كتابة محتوى المنشور!");
      return;
    }

    const newPost = {
      content: content,
      image: image || null, // الصورة هتكون URL مؤقت لو موجودة
    };

    onSubmit(newPost); // تمرير المنشور الجديد لدالة onSubmit
    setContent(""); // إعادة تعيين الحقول
    setImage(null);
    onClose(); // إغلاق الـ Dialog
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth dir="rtl">
      <DialogContent sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          إضافة منشور جديد
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="محتوى المنشور"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            variant="outlined"
            placeholder="اكتب منشورك هنا..."
          />
          <Box>
            <Typography variant="body2" sx={{ mb: 1 }}>
              اختر صورة (اختياري):
            </Typography>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ marginBottom: "10px" }}
            />
            {image && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2">معاينة الصورة:</Typography>
                <img
                  src={image}
                  alt="معاينة الصورة"
                  style={{ maxWidth: "100%", maxHeight: "200px", borderRadius: "10px" }}
                />
              </Box>
            )}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose} color="secondary">
          إلغاء
        </Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          إرسال
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PostList;
