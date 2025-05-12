import React, { useState } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  LinearProgress,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

function AllFilesPage() {
  const [files, setFiles] = useState([
    { id: 1, name: 'دورة تدريبية متقدمة', date: '22 Jan 2022', progress: 60, status: 'تم الرفع', type: 'PDF' },
    { id: 2, name: 'فيديو تعليمي', date: '20 Jan 2022', progress: 72, status: 'تم الرفع', type: 'Video' },
    { id: 3, name: 'واجب جديد', date: '24 Jan 2022', progress: 78, status: 'حدث خطأ', type: 'Assignment' },
    { id: 4, name: 'اختبار أسبوعي', date: '25 Jan 2022', progress: 50, status: 'قيد المعالجة', type: 'Exam' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openUploadDialog, setOpenUploadDialog] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [newName, setNewName] = useState('');
  const [newFile, setNewFile] = useState({
    name: '',
    type: '',
    date: '',
    progress: 0,
    status: ''
  });

  const filteredFiles = files.filter(file =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    setFiles(files.filter(file => file.id !== id));
  };

  const handleEditClick = (file) => {
    setSelectedFile(file);
    setNewName(file.name);
    setOpenEditDialog(true);
  };

  const handleEditSave = () => {
    setFiles(files.map(file => 
      file.id === selectedFile.id ? { ...file, name: newName } : file
    ));
    setOpenEditDialog(false);
  };

  const handleUploadSave = () => {
    const newId = files.length + 1;
    const newFileToAdd = { ...newFile, id: newId };
    setFiles([...files, newFileToAdd]);
    setOpenUploadDialog(false);
    setNewFile({
      name: '',
      type: '',
      date: '',
      progress: 0,
      status: ''
    });
  };

  const getRowColor = (status) => {
    if (status === 'حدث خطأ') {
      return '#ffcccc'; // اللون الأحمر الفاتح للملفات التي بها خطأ
    }
    return 'transparent'; // عادي إذا كانت الحالة أخرى
  };

  return (
    <Box sx={{ p: 3, marginRight: '272px', width: 'calc(100% - 275px)' }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
        جميع الملفات
      </Typography>

      {/* حقل البحث */}
      <TextField
        label="بحث عن الملف"
        variant="outlined"
        fullWidth
        sx={{ mb: 3 }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // تحديث قيمة البحث
      />

      {/* زر إضافة ملف جديد */}
      <Button 
        variant="contained" 
        color="primary" 
        sx={{  width: '100%' }}
        onClick={() => setOpenUploadDialog(true)}
      >
        رفع ملف جديد
      </Button>

      <TableContainer component={Paper} sx={{ maxWidth: '100%' }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>الإجراءات</TableCell>
              <TableCell>النوع</TableCell>
              <TableCell>التاريخ</TableCell>
              <TableCell>التقدم</TableCell>
              <TableCell>الحالة</TableCell>
              <TableCell>اسم الملف</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredFiles.map((file) => (
              <TableRow key={file.id} sx={{ backgroundColor: getRowColor(file.status) }}>
                <TableCell>
                  <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                    <EditIcon color="primary" onClick={() => handleEditClick(file)} />
                    <DeleteIcon color="error" onClick={() => handleDelete(file.id)} />
                  </Box>
                </TableCell>
                <TableCell>{file.type}</TableCell>
                <TableCell>{file.date}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LinearProgress variant="determinate" value={file.progress} sx={{ width: '100px', mr: 1 }} />
                    <Typography variant="body2">{file.progress}%</Typography>
                  </Box>
                </TableCell>
                <TableCell>{file.status}</TableCell>
                <TableCell sx={{ paddingLeft: 0 }}>{file.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for editing */}
      <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
        <DialogTitle>تعديل اسم الملف</DialogTitle>
        <DialogContent>
          <TextField
            label="اسم الملف"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditDialog(false)} color="secondary">
            إلغاء
          </Button>
          <Button onClick={handleEditSave} color="primary">
            حفظ
          </Button>
        </DialogActions>
      </Dialog>

      {/* Dialog for uploading new file */}
      <Dialog open={openUploadDialog} onClose={() => setOpenUploadDialog(false)}>
        <DialogTitle>رفع ملف جديد</DialogTitle>
        <DialogContent>
          <TextField
            label="اسم الملف"
            value={newFile.name}
            onChange={(e) => setNewFile({ ...newFile, name: e.target.value })}
            fullWidth
          />
          <TextField
            label="التاريخ"
            value={newFile.date}
            onChange={(e) => setNewFile({ ...newFile, date: e.target.value })}
            fullWidth
            sx={{ mt: 2 }}
          />
          <TextField
            label="التقدم"
            value={newFile.progress}
            onChange={(e) => setNewFile({ ...newFile, progress: parseInt(e.target.value) })}
            type="number"
            fullWidth
            sx={{ mt: 2 }}
          />
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>الحالة</InputLabel>
            <Select
              value={newFile.status}
              onChange={(e) => setNewFile({ ...newFile, status: e.target.value })}
              label="الحالة"
            >
              <MenuItem value="تم الرفع">تم الرفع</MenuItem>
              <MenuItem value="قيد المعالجة">قيد المعالجة</MenuItem>
              <MenuItem value="حدث خطأ">حدث خطأ</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>النوع</InputLabel>
            <Select
              value={newFile.type}
              onChange={(e) => setNewFile({ ...newFile, type: e.target.value })}
              label="النوع"
            >
              <MenuItem value="PDF">PDF</MenuItem>
              <MenuItem value="Video">Video</MenuItem>
              <MenuItem value="Assignment">Assignment</MenuItem>
              <MenuItem value="Exam">Exam</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenUploadDialog(false)} color="secondary">
            إلغاء
          </Button>
          <Button onClick={handleUploadSave} color="primary">
            حفظ
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default AllFilesPage;
