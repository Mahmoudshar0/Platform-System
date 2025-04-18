import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Paper,
  Avatar,
  Button,
  LinearProgress,
  Tab,
  Tabs,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  TableSortLabel,
  TextField
} from '@mui/material';
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Circle as CircleIcon,
  FilterList as FilterListIcon
} from '@mui/icons-material';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'JAN', value: 2000 },
  { name: 'FEB', value: 2400 },
  { name: 'MAR', value: 1800 },
  { name: 'APR', value: 3200 },
  { name: 'MAY', value: 2800 },
  { name: 'JUN', value: 3600 },
  { name: 'JUL', value: 3000 },
  { name: 'AUG', value: 3800 },
  { name: 'SEP', value: 3200 },
  { name: 'OCT', value: 2800 },
  { name: 'NOV', value: 3400 },
  { name: 'DEC', value: 3900 }
];

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: 'white',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    transform: 'scale(1.05)',
    transition: 'all 0.2s ease-in-out'
  },
  padding: '4px 8px !important',
  borderRadius: '8px',
  minWidth: 'auto',
  fontSize: '0.875rem',
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  gap: '2px',
  textTransform: 'none',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
}));

function App() {
  const [tabValue, setTabValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [files, setFiles] = useState([
    { id: 1, name: 'دورة تدريبية متقدمة', date: '22 Jan 2022', progress: 60, status: 'تم الرفع' },
    { id: 2, name: 'دورة تدريبية متقدمة', date: '20 Jan 2022', progress: 72, status: 'تم الرفع' },
    { id: 3, name: 'واجب جديد', date: '24 Jan 2022', progress: 78, status: 'حدث خطأ' }
  ]);

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('date');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortFiles = (files) => {
    const comparator = (a, b) => {
      if (orderBy === 'date') {
        return order === 'asc'
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date);
      }
      if (orderBy === 'progress') {
        return order === 'asc' ? a.progress - b.progress : b.progress - a.progress;
      }
      if (orderBy === 'status') {
        return order === 'asc'
          ? a.status.localeCompare(b.status)
          : b.status.localeCompare(a.status);
      }
      return 0;
    };
    return files.sort(comparator);
  };

  const filteredFiles = sortFiles(
    files.filter(file =>
      file.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const addFile = () => {
    const newFile = {
      id: files.length + 1,
      name: 'دورة جديدة',
      date: '25 Apr 2025',
      progress: 50,
      status: 'قيد المعالجة'
    };
    setFiles([...files, newFile]);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between', flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="subtitle2" sx={{ fontSize: { xs: '0.8rem', md: 'inherit' } }}>
              مرحباً بك
            </Typography>
            <Typography variant="subtitle1" fontWeight="bold" sx={{ fontSize: { xs: '0.9rem', md: 'inherit' } }}>
              د. محمد عبد الحميد
            </Typography>
          </Box>
          <Avatar src="/avatar.jpg" sx={{ width: { xs: 32, md: 40 }, height: { xs: 32, md: 40 } }} />
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          flex: 1,
          px: { xs: 2, sm: 3 },
          pt: { xs: 2, sm: 3 },
          mr: { xs: 0, md: '250px' },
          overflowY: 'hidden',
          boxSizing: 'border-box',
          maxWidth: { xs: '100%', md: 'calc(100% - 250px)' },
          height: { xs: 'calc(100vh - 56px)', md: 'calc(100vh - 64px)' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            mb: 3,
            gap: 2
          }}
        >
          <Box>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 1, fontSize: { xs: '1rem', md: 'inherit' } }}>
              مجموع الملفات التي تم تحميلها
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.8rem', md: 'inherit' } }}>
              تتبع محتواك والملفات التي تم تحميلها
            </Typography>
          </Box>
          <CustomButton variant="contained" startIcon={<AddIcon />} sx={{ fontSize: { xs: '0.75rem', md: 'inherit' } }} onClick={addFile}>
            إضافة جديد
          </CustomButton>
        </Box>

        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'flex-end' }}>
          <Tabs value={tabValue} onChange={(e, v) => setTabValue(v)} textColor="primary" indicatorColor="primary">
            <Tab label="شهرياً" />
            <Tab label="أسبوعي" />
            <Tab label="يومياً" />
          </Tabs>
        </Box>

        <Paper sx={{ p: { xs: 2, sm: 3 }, mb: 4, boxShadow: 'none' }}>
          <Typography variant="h6" sx={{ mb: 2, fontSize: { xs: '1rem', md: 'inherit' } }}>2025</Typography>
          <Box sx={{ height: { xs: 250, md: 300 }, width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4318FF" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#4318FF" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    background: '#2B3674',
                    border: 'none',
                    borderRadius: 8,
                    color: 'white'
                  }}
                />
                <Area type="monotone" dataKey="value" stroke="#4318FF" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </Box>
        </Paper>

        <Box
          sx={{
            mb: 4,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'flex-start', width: { xs: '100%', md: 'auto' } }}>
            <TextField
              label="بحث"
              variant="outlined"
              size="small"
              value={searchTerm}
              onChange={handleSearchChange}
              sx={{ width: { xs: '100%', md: 300 } }}
            />
            <Button
              variant="outlined"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                border: '1px solid #EBEBEB',
                color: '#667085',
                flexDirection: 'row-reverse',
                '&:hover': { backgroundColor: '#f5f5f5' },
                fontSize: { xs: '12px', sm: '14px' }
              }}
            >
              <FilterListIcon sx={{ fontSize: { xs: '18px', sm: '20px' } }} />
              فلترة
            </Button>
          </Box>

          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'flex-end', width: { xs: '100%', md: 'auto' } }}>
            <Button variant="contained" color="primary" size="small">
              عرض الكل
            </Button>
            <Button variant="outlined" size="small">
              الملفات PDF
            </Button>
            <Button variant="outlined" size="small">
              الفيديوهات
            </Button>
            <Button variant="outlined" size="small">
              الملفات
            </Button>
            <Button variant="outlined" size="small">
              الاختبارات
            </Button>
            <Button variant="outlined" size="small">
              الواجبات
            </Button>
          </Box>
        </Box>

        <Paper sx={{ p: { xs: 2, sm: 3 }, boxShadow: 'none' }}>
          <TableContainer sx={{ px: { xs: 0, sm: 1 } }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <IconButton size="small">
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                      <IconButton size="small">
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === 'date'}
                      direction={orderBy === 'date' ? order : 'asc'}
                      onClick={() => handleRequestSort('date')}
                    >
                      تاريخ التحميل
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === 'progress'}
                      direction={orderBy === 'progress' ? order : 'asc'}
                      onClick={() => handleRequestSort('progress')}
                    >
                      حالة التقدم
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>حالة الملف</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredFiles.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <IconButton size="small">
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                        <IconButton size="small">
                          <EditIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ fontSize: { xs: '0.75rem', md: 'inherit' } }}>{row.date}</TableCell>
                    <TableCell sx={{ fontSize: { xs: '0.75rem', md: 'inherit' } }}>{row.progress}</TableCell>
                    <TableCell>
                      <LinearProgress
                        variant="determinate"
                        value={row.progress}
                        sx={{
                          height: 8,
                          borderRadius: 5,
                          backgroundColor: '#F1F5F9',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 5,
                            backgroundColor: '#4318FF'
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell sx={{ fontSize: { xs: '0.75rem', md: 'inherit' } }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <CircleIcon sx={{ fontSize: 12, color: row.status === 'تم الرفع' ? '#8CE8A2' : '#FF4D4D' }} />
                        {row.status}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Box>
  );
}

export default App;

















