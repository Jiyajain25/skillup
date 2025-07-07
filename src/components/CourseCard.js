import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  return (
    <div className="col-md-6 col-lg-4">
      <div className="card h-100 shadow border-0">
        <img
          src={course.image}
          alt={course.title}
          className="card-img-top"
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold">{course.title}</h5>
          <p className="card-text mb-1 text-muted">{course.category} | {course.instructor}</p>
          <div className="mt-auto">
            <button
              className="btn btn-primary w-100"
              onClick={() => navigate(`/course/${course.id}`)}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;


