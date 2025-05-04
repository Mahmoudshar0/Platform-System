import { useState } from 'react';
import './FilterBar.css';
import { Typography, Box } from '@mui/material';
function FilterBar({ activeFilter, onFilterChange, filters, title }) {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{direction: 'rtl', display: "flex", justifyContent: "space-between", alignItems: "center",paddingBottom: '1rem',
      borderBottom: '1px solid #e5e7eb',
      marginBottom: '1.5rem'}}>
      <Typography variant='h1' sx={{
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '#111827',
      margin: 0
      }}>
        {title}
      </Typography>
    <div className="filter-bar">
      <div className="filter-container">
        <button 
          className={`filter-button mobile-menu-button ${expanded ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          فلترة حسب
          <span className={`arrow ${expanded ? 'up' : 'down'}`}></span>
        </button>
        
        <div className={`filter-options ${expanded ? 'expanded' : ''}`}>
          {filters.map(filter => (
            <button 
              key={filter.id}
              className={`filter-option ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => onFilterChange(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </div>
    </Box>
  );
}

export default FilterBar;