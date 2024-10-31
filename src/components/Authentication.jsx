import React from 'react';
import "../components/Authentication.scss";

const Authentication = () => {
  return (
    <div className="registration-container">
      <h1>Join Pillsync</h1>
      <p>Manage your medications effectively</p>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Register</button>
      </form>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default Authentication;