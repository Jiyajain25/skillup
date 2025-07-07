import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css'; // we'll create this next

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section with parallax background */}
      <div className="hero-section d-flex align-items-center">
        <div className="container text-white text-center">
          <h1 className="display-3 fw-bold">Empower Your Future with SkillUp</h1>
          <p className="lead">Learn in-demand skills with hands-on courses and expert instructors.</p>
          <button className="btn btn-outline-light btn-lg animate-btn">Start Learning</button>
        </div>
      </div>

      {/* Wave Transition */}
      <div className="wave"></div>

      {/* Features Section */}
      <section className="features-section py-5">
        <div className="container text-center">
          <h2 className="mb-5 fw-semibold">Why SkillUp?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-box shadow p-4 rounded bg-white h-100">
                <i className="bi bi-code-slash display-5 text-primary"></i>
                <h5 className="mt-3">Practical Coding</h5>
                <p>Hands-on projects to prepare you for real-world jobs.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box shadow p-4 rounded bg-white h-100">
                <i className="bi bi-lightbulb display-5 text-warning"></i>
                <h5 className="mt-3">Expert Mentors</h5>
                <p>Learn from experienced developers and educators.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box shadow p-4 rounded bg-white h-100">
                <i className="bi bi-clock display-5 text-success"></i>
                <h5 className="mt-3">Flexible Learning</h5>
                <p>Study at your pace with lifetime access to content.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section text-white text-center">
        <div className="container py-5">
          <h2 className="mb-4">What Our Learners Say</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="testimonial-box p-4 rounded">
                <p>"SkillUp gave me the confidence to apply for real jobs!"</p>
                <h6>- Aditi</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-box p-4 rounded">
                <p>"A beautiful UI and great instructors — I loved it!"</p>
                <h6>- Rohit</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-box p-4 rounded">
                <p>"Everything is explained step by step. Super beginner-friendly."</p>
                <h6>- Neha</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;



