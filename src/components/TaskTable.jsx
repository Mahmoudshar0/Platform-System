// import React, { useState } from 'react';
// import {
//   Box,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   LinearProgress,
//   Avatar,
//   IconButton,
//   Typography,
//   styled,
//   Checkbox
// } from '@mui/material';
// import { Edit, Delete, SwapVert } from '@mui/icons-material';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   borderBottom: 'none',
//   padding: '8px',
//   backgroundColor: theme.palette.background.paper,
//   color: theme.palette.text.primary,
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   backgroundColor: '#fff',
//   border: '1px solid #ddd',
//   borderRadius: '5px',
//   marginBottom: '10px',
//   boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
//   '&:not(:last-child)': {
//     marginBottom: '10px',
//   },
// }));

// // بيانات وهمية ل initialTasks
// const initialTasks = [
//   {
//     id: 1,
//     status: 'قيد التنفيذ',
//     date: '2025-04-11',
//     progress: 50,
//     title: 'مهمة 1',
//     subtitle: 'وصف المهمة 1',
//     avatar: 'https://i.pravatar.cc/150?img=1', // رابط صورة افتراضية
//   },
//   {
//     id: 2,
//     status: 'منتهي',
//     date: '2025-04-10',
//     progress: 100,
//     title: 'مهمة 2',
//     subtitle: 'وصف المهمة 2',
//     avatar: 'https://i.pravatar.cc/150?img=2',
//   },
//   // أضف المزيد من المهام حسب الحاجة
// ];

// const getStatusStyle = (status) => {
//   if (status === 'قيد التنفيذ') {
//     return {
//       bgcolor: '#e0f7fa',
//       color: '#007bff',
//       text: 'قيد التنفيذ',
//     };
//   }
//   return {
//     bgcolor: '#fce4ec',
//     color: '#e91e63',
//     text: 'منتهي',
//   };
// };

// function TaskTable() {
//   const [tasks, setTasks] = useState(initialTasks);

//   const handleDelete = (id) => {
//     const newTasks = tasks.filter((task) => task.id !== id);
//     setTasks(newTasks);
//   };

//   const handleEdit = (task) => {
//     console.log('تعديل المهمة:', task);
//     // لاحقًا ممكن نفتح فورم لتعديل البيانات
//   };

//   return (
//     <Box sx={{ px: 2, py: 4, direction: 'rtl' }}>
//       <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 1, backgroundColor: 'transparent' }}>
//         <Table sx={{ borderCollapse: 'separate', borderSpacing: '0 10px' }}>
//           <TableHead>
//             <TableRow>
//               <StyledTableCell align="center"><SwapVert /> ترتيب</StyledTableCell>
//               <StyledTableCell align="center">حالة الملف</StyledTableCell>
//               <StyledTableCell align="center">تاريخ التحميل</StyledTableCell>
//               <StyledTableCell align="center">حالة التقدم</StyledTableCell>
//               <StyledTableCell align="center">الوصف</StyledTableCell>
//               <StyledTableCell align="center">إجراء</StyledTableCell>
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {tasks.map((task) => (
//               <StyledTableRow key={task.id}>
//                 <StyledTableCell align="center">
//                   <IconButton size="small" color="error" onClick={() => handleDelete(task.id)}>
//                     <Delete fontSize="small" />
//                   </IconButton>
//                   <IconButton size="small" onClick={() => handleEdit(task)}>
//                     <Edit fontSize="small" />
//                   </IconButton>
//                 </StyledTableCell>

//                 <StyledTableCell align="center">
//                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                     <Checkbox checked={task.status === 'منتهي'} />
//                     <Box
//                       sx={{
//                         bgcolor: getStatusStyle(task.status).bgcolor,
//                         color: getStatusStyle(task.status).color,
//                         px: 2,
//                         py: 0.5,
//                         borderRadius: 1,
//                         fontSize: '0.875rem',
//                       }}
//                     >
//                       {getStatusStyle(task.status).text}
//                     </Box>
//                   </Box>
//                 </StyledTableCell>

//                 <StyledTableCell align="center">
//                   <Typography variant="body2" color="text.secondary">
//                     {task.date}
//                   </Typography>
//                 </StyledTableCell>

//                 <StyledTableCell align="center">
//                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                     <Typography variant="body2">{task.progress}</Typography>
//                     <Box sx={{ flex: 1 }}>
//                       <LinearProgress
//                         variant="determinate"
//                         value={task.progress}
//                         sx={{
//                           height: 8,
//                           borderRadius: 5,
//                           bgcolor: '#e0e0e0',
//                           '& .MuiLinearProgress-bar': {
//                             bgcolor: '#007bff',
//                             borderRadius: 5,
//                           },
//                         }}
//                       />
//                     </Box>
//                   </Box>
//                 </StyledTableCell>

//                 <StyledTableCell>
//                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                     <Avatar src={task.avatar} />
//                     <Box>
//                       <Typography variant="subtitle1">{task.title}</Typography>
//                       <Typography variant="body2" color="primary">
//                         {task.subtitle}
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </StyledTableCell>

//                 <StyledTableCell align="center">
//                   <Checkbox />
//                 </StyledTableCell>
//               </StyledTableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// }

// export default TaskTable;

