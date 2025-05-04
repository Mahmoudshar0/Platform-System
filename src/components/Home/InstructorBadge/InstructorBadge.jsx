import './InstructorBadge.css';

function InstructorBadge({ instructor }) {
  return (
    <div className="instructor-badge">
      <div className="instructor-avatar">
        <img 
          src={instructor.avatar} 
          alt={instructor.name}
          className="avatar-img"
        />
      </div>
      <span className="instructor-name">{instructor.name}</span>
    </div>
  );
}

export default InstructorBadge;