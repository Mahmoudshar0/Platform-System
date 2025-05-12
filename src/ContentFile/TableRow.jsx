import React from 'react';
import { IconButton, Avatar as MuiAvatar, Checkbox, Chip } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import ProgressBarContent from './ProgressBar';

const TableRow = ({
  id,
  status,
  statusText,
  date,
  percentage,
  title,
  subtitle,
  avatar,
  size,
  isSelected, // أضفتها لدعم تحديد الصف
  onToggleSelection, // أضفتها لدعم تحديد الصف
  onEdit,
  onDelete,
}) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="py-4 px-4">
        <div className="flex items-center justify-start">
          {/* إضافة Checkbox لتحديد الصف */}
          <Checkbox
            checked={isSelected}
            onChange={() => onToggleSelection(id)}
            sx={{ mr: 1 }}
          />
          <MuiAvatar
            src={avatar}
            alt={title}
            sx={{
              width: 40,
              height: 40,
              border: '1px solid #e5e7eb',
              bgcolor: '#f3f4f6',
              mr: 2,
            }}
          />
          <div className="text-right">
            <div className="font-medium text-gray-900">{title}</div>
            <div className="text-sm text-gray-500">{subtitle}</div>
          </div>
        </div>
      </td>
      <td className="py-4 px-4">
        <ProgressBarContent percentage={percentage} />
      </td>
      <td className="py-4 px-4 text-right">
        <span className="text-sm text-gray-500">{date}</span>
        <span className="mr-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
          {size}
        </span>
      </td>
      <td className="py-4 px-4 text-right">
        <Chip
          label={
            <span className="flex items-center">
              {status === 'تم الرفع' && (
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full ml-1" />
              )}
              {status === 'حدث خطأ' && (
                <span className="inline-block w-2 h-2 bg-red-500 rounded-full ml-1" />
              )}
              {statusText}
            </span>
          }
          sx={{
            bgcolor: status === 'تم الرفع' ? '#dcfce7' : '#fee2e2',
            color: status === 'تم الرفع' ? '#15803d' : '#991b1b',
            fontSize: 12,
            fontWeight: 'medium',
            px: 1,
            borderRadius: '9999px',
          }}
        />
      </td>
      <td className="py-4 px-4">
        <div className="flex space-x-2 rtl:space-x-reverse">
          <IconButton
            onClick={() => onDelete(id)}
            sx={{ color: '#6b7280', '&:hover': { color: '#ef4444' } }}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
          <IconButton
            onClick={() => onEdit(id)}
            sx={{ color: '#6b7280', '&:hover': { color: '#3b82f6' } }}
          >
            <EditIcon fontSize="small" />
          </IconButton>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;