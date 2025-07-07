import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const dummyCourses = [
  {
    id: 1,
    title: "React for Beginners",
    category: "Frontend",
    instructor: "John Doe",
    description: "A beginner's guide to React.js, covering all the fundamentals and building real-world projects.",
    image: "https://img.freepik.com/free-photo/html-system-website-concept_23-2150376772.jpg"
  },
  {
    id: 2,
    title: "Tailwind Masterclass",
    category: "CSS",
    instructor: "Jane Smith",
    description: "Learn how to build responsive UIs with the utility-first Tailwind CSS framework.",
    image: "https://img.freepik.com/free-vector/gradient-responsive-website-design_23-2149738853.jpg"
  },
  {
    id: 3,
    title: "Node.js Crash Course",
    category: "Backend",
    instructor: "Mike Wilson",
    description: "Master the basics of Node.js and create backend services using Express.",
    image: "https://img.freepik.com/free-vector/gradient-software-engineering-illustration_23-2149373533.jpg"
  },
  {
    id: 4,
    title: "Advanced React",
    category: "Frontend",
    instructor: "Emily Watson",
    description: "Take your React skills to the next level with hooks, context API, and performance optimization.",
    image: "https://img.freepik.com/free-photo/gradient-coding-background_23-2149910185.jpg"
  }
];

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = dummyCourses.find(course => course.id === parseInt(id));

  if (!course) return <p className="text-center mt-5">Course not found.</p>;

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-6">
            <img src={course.image} alt={course.title} className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6">
            <h2>{course.title}</h2>
            <p><strong>Category:</strong> {course.category}</p>
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p className="mt-3">{course.description}</p>
            <button className="btn btn-success mt-3" onClick={() => alert("Course Enrolled!")}>
              Enroll Now
            </button>
            <button className="btn btn-outline-secondary mt-3 ms-3" onClick={() => navigate(-1)}>
              Go Back
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseDetail;
