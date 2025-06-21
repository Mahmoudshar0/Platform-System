import { Box, Typography } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CloseIcon from '@mui/icons-material/Close';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { ClickAwayListener } from '@mui/material';

const NotificationsButton = ({ showNotifications, setShowNotifications, messages, handleMaxLimitClick }) => {
  return (
    <ClickAwayListener onClickAway={() => setShowNotifications(false)}>
      <Box
        sx={{
          width: '35px',
          height: '35px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        border: '1px solid #CCCCCC',
        borderRadius: '50%',
        cursor: 'pointer',
        position: 'relative',
      }}
      onClick={() => setShowNotifications(!showNotifications)}
      onBlur={() => setShowNotifications(prev => !prev)}
    >
      <NotificationsNoneIcon sx={{ fontSize: '18px', color: '#555555' }} />

      {showNotifications && (
        <Box
          sx={{
            position: 'absolute',
            top: '101%',
            left: "0",
            width: {
              xs: 'calc(100vw - 20px)',
              sm: '320px',
              md: '350px',
              lg: '370px',
              xl: '400px',
            },
            maxHeight: '70vh',
            overflowY: 'auto',
            overflowX: 'hidden',
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
            padding: { xs: '10px', sm: '15px' },
            zIndex: (theme) => theme.zIndex.modal + 1,
            boxSizing: 'border-box',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '5px' }}>
              <CheckBoxOutlineBlankIcon
                sx={{
                  fontSize: '18px',
                  color: '#818181',
                  cursor: 'pointer',
                  borderRadius: '3px',
                  border: '1px solid #CCCCCC',
                  padding: '1px',
                  boxSizing: 'border-box',
                }}
              />
              <CloseIcon
                sx={{ cursor: 'pointer', color: '#818181', fontSize: '22px' }}
                onClick={() => setShowNotifications(false)}
              />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '5px' }}>
              <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 'bold', textAlign: 'right', fontFamily: 'Tajawal, sans-serif' }}>
                الإشعارات
              </Typography>
            </Box>

            <hr
              style={{
                width: '100%',
                border: '0.5px solid #ddd',
                marginTop: '5px',
                opacity: '0.5',
              }}
            />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#333',
                  fontFamily: 'Tajawal, sans-serif',
                  cursor: 'pointer',
                }}
                onClick={handleMaxLimitClick}
              >
                {/* محتوى اختياري هنا */}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: '2px', direction: 'rtl', justifyContent: 'space-between', marginRight: 'auto' }}>
              <Typography sx={{ fontSize: '14px', color: '#333', fontFamily: 'Tajawal, sans-serif' }}>
                الأحدث أولاً :
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  backgroundColor: '#E0E0E0',
                  borderRadius: '5px',
                  padding: '1px 3px',
                  cursor: 'pointer',
                }}
              >
                <FilterAltIcon sx={{ width: '18px', height: '18px', color: '#818181', marginRight: '2px' }} />
                <Typography sx={{ fontSize: '18px', color: '#333', fontFamily: 'Tajawal, sans-serif', fontWeight: 'normal' }}>
                  فلتر
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {messages.map((message) => (
              <Box key={message.id} sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '8px', color: '#2196f3', direction: 'ltr' }}>
                  <AccessTimeIcon sx={{ width: '16px', height: '16px' }} />
                  <Typography sx={{ fontSize: '12px', fontFamily: 'Tajawal, sans-serif' }}>
                    {message.time}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'flex-start', gap: '12px' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img
                      src={'/images/logo.jpg'}
                      alt={message.user?.name}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '1px solid #818181',
                      }}
                    />
                    <Typography sx={{ fontSize: '12px', color: '#666666', marginTop: '4px', fontFamily: 'Tajawal, sans-serif' }}>
                      {message.user?.name}
                    </Typography>
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ borderRadius: '8px', padding: '12px' }}>
                      <Typography sx={{ color: message.type === 'status' ? '#666666' : '#1f2a44', fontSize: '14px', fontFamily: 'Tajawal, sans-serif' }}>
                        {message.content}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}

            <Box sx={{ textAlign: 'center' }}>
              <Typography
                sx={{
                  fontSize: '12px',
                  fontFamily: 'Tajawal, sans-serif',
                  backgroundColor: '#000',
                  color: '#fff',
                  borderRadius: '10px',
                  padding: '5px 10px',
                  display: 'inline-block',
                }}
              >
                23 يناير 2025
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
      </ClickAwayListener>
  );
};

export default NotificationsButton;
