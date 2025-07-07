import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: '40px', maxWidth: '400px', margin: 'auto' }}>
        <h2>Login</h2>
        <form>
          <div className="mb-3">
            <label>Email:</label>
            <input type="email" className="form-control" placeholder="Enter email" required />
          </div>
          <div className="mb-3">
            <label>Password:</label>
            <input type="password" className="form-control" placeholder="Enter password" required />
          </div>
          <button className="btn btn-primary" type="submit">Login</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
