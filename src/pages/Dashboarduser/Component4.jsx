import { useState } from 'react';
import { Box, Typography, Button, Paper, Chip, IconButton } from "@mui/material";
import { ArrowLeft, PlayCircle } from "@mui/icons-material";

const videosData = [
  {
    id: 1,
    title: "مقدمة في الرياضيات",
    description: "شرح أساسيات الرياضيات للمبتدئين",
    lecturer: "د. أحمد محمد",
    subject: "الرياضيات",
    watched: true,
    downloaded: true,
    duration: "15:30"
  },
  {
    id: 2,
    title: "أساسيات البرمجة",
    description: "تعلم أساسيات البرمجة بلغة Python",
    lecturer: "د. علي حسن",
    subject: "علوم الحاسب",
    watched: false,
    downloaded: true,
    duration: "22:45"
  },
  {
    id: 3,
    title: "التاريخ الإسلامي",
    description: "تاريخ الخلافة الراشدة",
    lecturer: "د. محمد عبدالله",
    subject: "التاريخ",
    watched: false,
    downloaded: false,
    duration: "18:20"
  },
  {
    id: 4,
    title: "الفيزياء الحديثة",
    description: "مقدمة في ميكانيكا الكم",
    lecturer: "د. سارة أحمد",
    subject: "الفيزياء",
    watched: true,
    downloaded: false,
    duration: "30:15"
  },
];

function Component4() {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filteredVideos = filter === 'downloaded' 
    ? videosData.filter(video => video.downloaded) 
    : videosData;

  const displayedVideos = showAll ? filteredVideos : filteredVideos.slice(0, 2);

  return (
    <Box sx={{ 
      
       width: 'calc(100% - 240px)',
        marginRight:"240px",
      padding: { xs: 2, md: 4 },
      direction: 'rtl'
    }}>
      {/* Header */}
      <Box sx={{ 
        display: 'flex',
        width: 'calc(100% - 240px)',
        marginRight:"240px",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4
      }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'black' }}>
          الفيديوهات
        </Typography>
        
        <Button 
          variant="text" 
          onClick={() => setShowAll(!showAll)}
          sx={{ 
            color: '#061CDE',
            textDecoration: 'none',
            '&:hover': { textDecoration: 'underline' }
          }}
        >
          عرض الكل
        </Button>
      </Box>

      {/* Filter Links */}
      <Box sx={{ 
        display: 'flex',
        gap: 3,
        marginBottom: 3,
        borderBottom: '1px solid #eee',
        paddingBottom: 2
      }}>
        <Box 
          onClick={() => setFilter('all')}
          sx={{ 
            cursor: 'pointer',
            color: filter === 'all' ? '#061CDE' : 'inherit',
            position: 'relative',
            paddingBottom: '5px',
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: filter === 'all' ? '100%' : 0,
              height: '2px',
              backgroundColor: '#061CDE',
              transition: 'width 0.3s ease'
            }
          }}
        >
          <Typography>الفيديوهات</Typography>
        </Box>
        
        <Box 
          onClick={() => setFilter('downloaded')}
          sx={{ 
            cursor: 'pointer',
            color: filter === 'downloaded' ? '#061CDE' : 'inherit',
            position: 'relative',
            paddingBottom: '5px',
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: filter === 'downloaded' ? '100%' : 0,
              height: '2px',
              backgroundColor: '#061CDE',
              transition: 'width 0.3s ease'
            }
          }}
        >
          <Typography>تم تحميلها</Typography>
        </Box>
      </Box>

      {/* Videos Grid */}
      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
        gap: 3
      }}>
        {displayedVideos.map((video) => (
          <Paper key={video.id} elevation={3} sx={{ 
            borderRadius: 2,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Video Placeholder */}
            <Box sx={{
              height: 160,
              backgroundColor: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <PlayCircle sx={{ fontSize: 60, color: '#fff', opacity: 0.8 }} />
              <Chip 
                label={video.duration}
                size="small"
                sx={{ 
                  position: 'absolute',
                  bottom: 8,
                  left: 8,
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  color: '#fff'
                }}
              />
            </Box>
            
            {/* Video Info */}
            <Box sx={{ padding: 2 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                {video.title}
              </Typography>
              
              <Typography variant="body2" sx={{ color: '#666', marginY: 1 }}>
                {video.description}
              </Typography>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginY: 1 }}>
                <Typography variant="caption" sx={{ color: '#888' }}>
                  {video.subject}
                </Typography>
                <Typography variant="caption" sx={{ color: '#888' }}>
                  {video.lecturer}
                </Typography>
              </Box>
              
              <Chip 
                label={video.watched ? "تمت المشاهدة" : "غير مشاهد"} 
                size="small"
                sx={{ 
                  backgroundColor: video.watched ? 'rgba(0, 200, 83, 0.1)' : 'rgba(255, 0, 0, 0.1)',
                  color: video.watched ? '#00C853' : '#FF0000',
                  marginTop: 1
                }}
              />
            </Box>
            
            {/* Watch Button */}
            <Box sx={{ 
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 2,
              borderTop: '1px solid #eee'
            }}>
              <Button 
                variant="text" 
                startIcon={<PlayCircle />}
                sx={{ color: '#061CDE' }}
              >
                مشاهدة
              </Button>
              
              <IconButton sx={{ color: '#061CDE' }}>
                <ArrowLeft />
              </IconButton>
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}

export default Component4;