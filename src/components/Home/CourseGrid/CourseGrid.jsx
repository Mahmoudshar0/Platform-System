import CourseCard from '../CourseCard/CourseCard';
import './CourseGrid.css';

function CourseGrid({ courses }) {
  return (
    <div className="course-grid">
      {courses.map((course) => (
        <div className="grid-item" key={course.id}>
          <CourseCard course={course} />
        </div>
      ))}
    </div>
  );
}

export default CourseGrid;