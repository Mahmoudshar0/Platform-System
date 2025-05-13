import React, { useState } from "react";
import { Dialog, DialogContent, Button, Box, Typography } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import VideoDialog from "./VideoDialog";
import PostList from "./PostList";

const AddContentDialog = ({ open, onClose, onPostSubmit, onVideoSubmit }) => {
  const [openPostForm, setOpenPostForm] = useState(false);
  const [openVideoForm, setOpenVideoForm] = useState(false);

  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth dir="rtl">
        <DialogContent sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            اختر نوع الإضافة
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<CreateIcon />}
              onClick={() => {
                setOpenPostForm(true);
                onClose();
              }}
              sx={{ textTransform: "none" }}
            >
              إضافة منشور
            </Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<VideoLibraryIcon />}
              onClick={() => {
                setOpenVideoForm(true);
                onClose();
              }}
              sx={{ textTransform: "none" }}
            >
              إضافة فيديو
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
      <PostList open={openPostForm} onClose={() => setOpenPostForm(false)} onSubmit={onPostSubmit} />
      <VideoDialog open={openVideoForm} onClose={() => setOpenVideoForm(false)} onSubmit={onVideoSubmit} />
    </>
  );
};

export default AddContentDialog;
