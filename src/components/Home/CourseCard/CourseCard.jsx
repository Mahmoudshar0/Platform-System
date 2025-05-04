import { useState } from 'react';
import StatusIndicator from '../StatusIndicator/StatusIndicator';
import InstructorBadge from '../InstructorBadge/InstructorBadge';
import './CourseCard.css';

function CourseCard({ course }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="course-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-media">
        <img 
          src={course.thumbnail} 
          alt={course.title} 
          className="thumbnail"
        />
        <div className="duration">{course.duration}</div>
        <div className={`card-options ${isHovered ? 'visible' : ''}`}>
          <button className="option-button">•••</button>
        </div>
      </div>
      
      <div className="card-content">
        <div className="course-info">
          <h3 className="course-title">{course.title}</h3>
          <div className="lecture-info">
            <span className="lecture-number">{course.lectureNumber}</span>
            <InstructorBadge instructor={course.instructor} />
          </div>
        </div>
        
        <StatusIndicator status={course.status} />
      </div>
    </div>
  );
}

export default CourseCard;