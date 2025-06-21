import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Dot } from 'recharts';

const studentData = [
  { name: 'أحمد', level: 420 },
  { name: 'محمد', level: 380 },
  { name: 'علي', level: 550 },
  { name: 'فاطمة', level: 610 },
  { name: 'خالد', level: 490 },
  { name: 'نور', level: 530 },
  { name: 'سارة', level: 450 },
];

const CustomizedDot = (props) => {
  const { cx, cy } = props;
  return (
    <Dot
      cx={cx}
      cy={cy}
      r={6}
      fill="#4A3AFF"
      stroke="#fff"
      strokeWidth={2}
    />
  );
};

export default function Component3() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Box sx={{ 
      width: 'calc(100% - 240px)',
      padding: isSmallScreen ? 2 : 3,
      backgroundColor: '#fff',
      borderRadius: 2,
      marginRight: '240px', 

      boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
      direction: 'rtl'
    }}>
      {/* Header */}
      <Box sx={{ 
        display: 'flex',
        flexDirection: isSmallScreen ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: isSmallScreen ? 'flex-start' : 'center',
        marginBottom: isSmallScreen ? 2 : 4,
        gap: isSmallScreen ? 1 : 0
      }}>
        <Typography variant={isSmallScreen ? 'subtitle1' : 'h6'} sx={{ fontWeight: 'bold' }}>
          الإحصائيات
        </Typography>
        <Typography variant={isSmallScreen ? 'h6' : 'h5'} sx={{ fontWeight: 'bold', color: '#4A3AFF' }}>
          مستويات الطلاب
        </Typography>
      </Box>
      
      {/* Chart */}
      <Box sx={{ height: isSmallScreen ? 200 : 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={studentData}
            margin={{ 
              top: 5, 
              right: isSmallScreen ? 10 : 30, 
              left: isSmallScreen ? 0 : 20, 
              bottom: 5 
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: isSmallScreen ? 10 : 12 }}
              interval={0}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              domain={[300, 700]}
              tickCount={5}
              tick={{ fill: '#6B7280', fontSize: isSmallScreen ? 10 : 12 }}
              tickFormatter={(value) => value}
              width={isSmallScreen ? 30 : 40}
            />
            <Line
              type="monotone"
              dataKey="level"
              stroke="#C6D2FD"
              strokeWidth={3}
              dot={<CustomizedDot />}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
      
      {/* Custom XAxis with circles */}
      <Box sx={{ 
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: isSmallScreen ? 1 : 2,
        paddingX: isSmallScreen ? 1 : 4,
        flexWrap: 'wrap',
        gap: isSmallScreen ? 1 : 0
      }}>
        {studentData.map((student, index) => (
          <Box key={index} sx={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: isSmallScreen ? 1 : 0
          }}>
            <Box sx={{
              width: isSmallScreen ? 30 : 40,
              height: isSmallScreen ? 30 : 40,
              borderRadius: '50%',
              backgroundColor: `hsl(${index * 50}, 70%, 80%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: isSmallScreen ? 0.5 : 1,
              fontWeight: 'bold',
              color: '#4A3AFF',
              fontSize: isSmallScreen ? '0.8rem' : '1rem'
            }}>
              {student.name.charAt(0)}
            </Box>
            <Typography variant="caption" sx={{ 
              color: '#6B7280',
              fontSize: isSmallScreen ? '0.7rem' : '0.8rem'
            }}>
              {student.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}