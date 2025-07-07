import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CourseCard from '../components/CourseCard';
import './Courses.css';

const courseList = [
  { id: 1, title: "React for Beginners", category: "Frontend", instructor: "John Doe", image: "https://img.freepik.com/free-photo/html-system-website-concept_23-2150376772.jpg" },
  { id: 2, title: "Tailwind Masterclass", category: "CSS", instructor: "Jane Smith", image: "https://img.freepik.com/free-vector/gradient-responsive-website-design_23-2149738853.jpg" },
  { id: 3, title: "Node.js Crash Course", category: "Backend", instructor: "Mike Wilson", image: "https://img.freepik.com/free-vector/gradient-software-engineering-illustration_23-2149373533.jpg" },
  { id: 4, title: "Advanced React", category: "Frontend", instructor: "Emily Watson", image: "https://img.freepik.com/free-photo/gradient-coding-background_23-2149910185.jpg" }
];

const Courses = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const categories = ["All", ...new Set(courseList.map(c => c.category))];

  const filteredCourses = courseList.filter(course => {
    const matchesCategory = filter === "All" || course.category === filter;
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h1 className="text-center fw-bold mb-4 display-5 gradient-text">Explore Top Courses</h1>

        {/* Filter Buttons */}
        <div className="d-flex justify-content-center gap-2 flex-wrap mb-4">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`btn px-4 ${filter === cat ? 'btn-dark' : 'btn-outline-dark'} rounded-pill`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="row mb-4">
          <div className="col-md-6 mx-auto">
            <input
              type="text"
              className="form-control form-control-lg shadow-sm"
              placeholder="Search courses by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Courses Grid */}
        <div className="row g-4">
          {filteredCourses.length > 0 ? (
            filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <p className="text-center">No courses found.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Courses;




