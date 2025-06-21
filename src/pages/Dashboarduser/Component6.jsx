import { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Avatar,
  Box,
  Stack,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Component6 = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeArticle, setActiveArticle] = useState(null);

  const handleClick = (event, articleId) => {
    setAnchorEl(event.currentTarget);
    setActiveArticle(articleId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setActiveArticle(null);
  };

  const [articles] = useState([
    {
      id: 0,
      title: 'عنوان المقالة',
      description: 'وصف قصير للمقالة يظهر هنا بشكل مختصر مع نقاط استفهام إن لزم الأمر...',
      image: '/images/placeholder.jpg',
      likes: 120,
      readers: [
        'https://i.pravatar.cc/100?img=1',
        'https://i.pravatar.cc/100?img=2',
        'https://i.pravatar.cc/100?img=3',
        'https://i.pravatar.cc/100?img=4'
      ]
    },
    {
      id: 1,
      title: 'مقالة عن التصميم',
      description: 'أهم مبادئ التصميم الحديثة التي يجب على كل مصمم معرفتها...',
      image: '/images/placeholder.jpg',
      likes: 85,
      readers: [
        'https://i.pravatar.cc/100?img=5',
        'https://i.pravatar.cc/100?img=6',
        'https://i.pravatar.cc/100?img=7'
      ]
    },
    {
      id: 2,
      title: 'تطوير الويب',
      description: 'أحدث تقنيات تطوير الويب في عام 2023 وكيفية الاستفادة منها...',
      image: '/images/placeholder.jpg',
      likes: 150,
      readers: [
        'https://i.pravatar.cc/100?img=8',
        'https://i.pravatar.cc/100?img=9',
        'https://i.pravatar.cc/100?img=10',
        'https://i.pravatar.cc/100?img=11'
      ]
    },
  ]);

  const menuOptions = [
    'مشاركة',
    'حفظ',
    'إبلاغ',
    'نسخ الرابط',
    'إخفاء'
  ];

  return (
    <Box sx={{ 
      width: 'calc(100% - 240px)',
      padding: isSmallScreen ? 2 : 3,
      direction: 'rtl'
    }}>
      {/* Header */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        mb: 3 
      }}>
        <Typography variant="h6" fontWeight="bold">
          المقالات
        </Typography>
        <Button 
          variant="contained" 
          size={isSmallScreen ? 'small' : 'medium'}
          sx={{ 
            backgroundColor: '#3f51b5', 
            borderRadius: 2,
            '&:hover': { backgroundColor: '#303f9f' }
          }}
        >
          عرض الكل
        </Button>
      </Box>

      <Box sx={{ 
        width: '100%', 
        height: '1px', 
        backgroundColor: '#e5e7eb',
        mb: 3 
      }} />

      {/* Articles Grid */}
      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)'
        },
        gap: isSmallScreen ? 2 : 3,
        justifyContent: 'center'
      }}>
        {articles.map((article) => (
          <Card 
            key={article.id}
            sx={{ 
              borderRadius: 2,
              boxShadow: 2,
              border: '1px solid #f0f0f0',
              maxWidth: 350,
              mx: 'auto'
            }}
          >
            {/* Article Image with Menu */}
            <Box sx={{ position: 'relative' }}>
              <CardMedia
                component="img"
                height={isSmallScreen ? 140 : 160}
                image={article.image}
                alt={article.title}
              />
              <IconButton
                aria-label="more"
                onClick={(e) => handleClick(e, article.id)}
                sx={{
                  position: 'absolute',
                  top: 8,
                  left: 8,
                  backgroundColor: 'rgba(255,255,255,0.7)',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.9)'
                  }
                }}
              >
                <MoreVertIcon />
              </IconButton>

              {/* Menu for the current article */}
              <Menu
                anchorEl={anchorEl}
                open={activeArticle === article.id && Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: 200,
                    width: '20ch',
                  },
                }}
              >
                {menuOptions.map((option) => (
                  <MenuItem 
                    key={option} 
                    onClick={handleClose}
                    sx={{ direction: 'rtl' }}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Article Content */}
            <CardContent>
              <Typography 
                variant="h6" 
                fontWeight="bold" 
                sx={{ mb: 1 }}
              >
                {article.title}
              </Typography>
              <Typography 
                variant="body2" 
                color="text.secondary"
                sx={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  height: isSmallScreen ? '2.8em' : '3em'
                }}
              >
                {article.description}
              </Typography>
            </CardContent>

            {/* Readers and Button */}
            <CardActions sx={{ 
              justifyContent: 'space-between',
              px: 2,
              pb: 2,
              pt: 0
            }}>
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <Typography variant="body2">+ {article.likes}</Typography>
                {article.readers.slice(0, 4).map((reader, index) => (
                  <Avatar 
                    key={index}
                    sx={{ 
                      width: 24, 
                      height: 24,
                      border: '2px solid white'
                    }} 
                    src={reader} 
                  />
                ))}
              </Stack>
              <Button 
                variant="contained" 
                size="small"
                sx={{ 
                  backgroundColor: '#3f51b5',
                  borderRadius: 2,
                  '&:hover': { backgroundColor: '#303f9f' }
                }}
              >
                قراءة
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Component6;