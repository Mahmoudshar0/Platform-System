import { useState } from 'react';
import CourseGrid from './CourseGrid/CourseGrid';
import FilterBar from './Header/FilterBar';
import { data } from './data/data';
import { Box} from "@mui/material";

function Videos() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [courseItems, setCourseItems] = useState(data.courses);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    
    if (filter === 'all') {
      setCourseItems(data.courses);
    } else {
      const filtered = data.courses.filter(course => {
        if (filter === 'completed') return course.status === 'completed';
        if (filter === 'error') return course.status === 'error';
        return true;
      });
      setCourseItems(filtered);
    }
  };

  return (
    <Box sx={{
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
    }}>
      <Box sx={{
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
}}>
        <FilterBar 
          activeFilter={activeFilter} 
          onFilterChange={handleFilterChange} 
          filters={data.filters}
          title="الفيديوهات المرفوعة"
        />
        <CourseGrid courses={courseItems} />
      </Box>
    </Box>
  );
}

export default Videos;