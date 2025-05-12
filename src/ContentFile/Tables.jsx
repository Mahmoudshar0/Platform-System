import React, { useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
} from '@mui/material';

const Tables = ({ onEdit, onDelete }) => {
  const data = [
    {
      id: 1,
      status: 'تم الرفع',
      statusText: 'تم الرفع',
      date: '22 Jan 2022',
      percentage: 60,
      title: 'المستندات الرسمية',
      subtitle: 'فاتورة المياه',
      avatar: 'https://via.placeholder.com/40',
      verified: true,
      size: '60',
    },
    {
      id: 2,
      status: 'تم الرفع',
      statusText: 'تم الرفع',
      date: '20 Jan 2022',
      percentage: 72,
      title: 'المستندات الرسمية',
      subtitle: 'فاتورة المياه',
      avatar: 'https://via.placeholder.com/40',
      verified: true,
      size: '72',
    },
    {
      id: 3,
      status: 'حدث خطأ',
      statusText: 'حدث خطأ',
      date: '24 Jan 2022',
      percentage: 78,
      title: 'المستندات الرسمية',
      subtitle: 'وثيقة أخرى',
      avatar: 'https://via.placeholder.com/40',
      verified: false,
      size: '78',
    },
  ];

  const [selectedRows, setSelectedRows] = useState([1, 2, 3]);

  const toggleRowSelection = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    setSelectedRows(selectedRows.length === data.length ? [] : data.map((row) => row.id));
  };

  return (
    <Box sx={{ direction: 'rtl', pr: '250px' }}>
      <TableContainer
        component={Paper}
        sx={{ border: '1px solid #e5e7eb', borderRadius: 2, boxShadow: 1 }}
      >
        <Table>
          <TableHead sx={{ bgcolor: '#ffffff' }}>
            <TableRow>
              <TableCell
                align="right"
                sx={{
                  py: 2,
                  px: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  color: '#6b7280',
                  fontSize: 14,
                  fontWeight: 'medium',
                }}
              >
                ترتيب
                <Checkbox
                  checked={selectedRows.length === data.length}
                  onChange={toggleSelectAll}
                  color="primary"
                  sx={{ p: 0, mr: 1 }}
                />
              </TableCell>

              <TableCell
                align="right"
                sx={{ py: 2, px: 4, color: '#6b7280', fontSize: 14, fontWeight: 'medium' }}
              >
                حالة التقدم
              </TableCell>
              <TableCell
                align="right"
                sx={{ py: 2, px: 4, color: '#6b7280', fontSize: 14, fontWeight: 'medium' }}
              >
                تاريخ التحميل
              </TableCell>
              <TableCell
                align="right"
                sx={{ py: 2, px: 4, color: '#6b7280', fontSize: 14, fontWeight: 'medium' }}
              >
                حالة الملف
              </TableCell>
              {/* تم حذف خلية "تعديل" بدون التأثير على باقي التصميم */}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                {...row}
                isSelected={selectedRows.includes(row.id)}
                onToggleSelection={() => toggleRowSelection(row.id)}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Tables;

