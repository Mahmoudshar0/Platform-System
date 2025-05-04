import {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Avatar,
  Box,
  Stack
} from '@mui/material';

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];

const ITEM_HEIGHT = 48;

const ArticleCard = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [articles] = useState([
    {
      id: 0,
      title: 'عنوان المقالة',
      description: 'وصف قصير للمقالة...',
      image: '/public/images/logo.jpg',
    },
    {
      id: 1,
      title: 'عنوان المقالة',
      description: 'وصف قصير للمقالة...',
      image: '/public/images/logo.jpg',
    },
    {
      id: 2,
      title: 'عنوان المقالة',
      description: 'وصف قصير للمقالة...',
      image: '/public/images/logo.jpg',
    },
  ]);

  return (<Box>
      <Box sx={{ direction: "rtl", display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb:2}}>
        <Typography variant="h6" fontWeight="bold" color="#000">
          المقالات
        </Typography>
        <Button variant="contained" sx={{ bgcolor: '#3f51b5', borderRadius: 2 }}>
          عرض الكل
        </Button>
      </Box>
      <Box sx={{ width: '100%', height: '1px', backgroundColor: '#e5e7eb'}} />
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 350px))', justifyContent: 'center', gap: 3, mt: 3 }}>
      {articles.map((article) => (
        <Card sx={{ direction: 'rtl', borderRadius: 2, boxShadow: 2, border: '5px solid #fff' }} key={article.id}>
        <Box>
          <CardMedia
          component="img"
          height="140"
          image={article.image}
          alt={article.title}
          
          />
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            paper: {
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
              },
            },
          }}
        >
          {options.map((option) => (
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Box>
        <CardContent sx={{ pb: 0 }}>
          <Typography variant="h6" color="#000" fontWeight="bold">
            {article.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {article.description}
          </Typography>
        </CardContent>

        <CardActions sx={{ justifyContent: 'space-between', px: 2 }}>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Typography variant="body2">+ 120</Typography>
            <Avatar sx={{ width: 24, height: 24 }} src="https://i.pravatar.cc/100?img=1" />
            <Avatar sx={{ width: 24, height: 24 }} src="https://i.pravatar.cc/100?img=2" />
            <Avatar sx={{ width: 24, height: 24 }} src="https://i.pravatar.cc/100?img=3" />
            <Avatar sx={{ width: 24, height: 24 }} src="https://i.pravatar.cc/100?img=4" />
          </Stack>
        </CardActions>

        <Box sx={{ px: 2, pb: 2, pt: 1 }}>
          <Button variant="contained" fullWidth sx={{ bgcolor: '#3f51b5', borderRadius: 2 }}>
            قراءة المقالة
          </Button>
        </Box>
    </Card>
      ))}
  </Box>
</Box>);
};

export default ArticleCard;
