import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import LoginImg from "../../LoginPage.jpg";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted', { email, password, keepSignedIn });
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="login-container">
      <button onClick={handleClose} className="close-button" aria-label="Close">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <header className="login-header">
        <img src="" alt="Genix Auctions" className="logo" />
      </header>
      <main className="login-main">
        <div className="login-form-container">
          <h1 className="login-title">Login</h1>
          <p className="login-subtitle">Welcome back. Enter your credentials to access your account.</p>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="hello@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <a href="#forgot-password" className="forgot-password">Forgot Password</a>
            </div>
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="keepSignedIn"
                checked={keepSignedIn}
                onChange={(e) => setKeepSignedIn(e.target.checked)}
              />
              <label htmlFor="keepSignedIn">Keep me signed in</label>
            </div>
            <button type="submit" className="login-button">Continue</button>
          </form>
          <div className="social-login">
            <p>or sign up with</p>
            <div className="social-buttons">
              <button className="social-button google">
                <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Google" />
                Google
              </button>
              <button className="social-button apple">
                <img src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png" alt="Apple" />
                Apple
              </button>
              <button className="social-button facebook">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="Facebook" />
                Facebook
              </button>
            </div>
          </div>
          <p className="signup-prompt">
            Don't have an Account? <a href="#sign-up">Sign up here</a>
          </p>
        </div>
        <div className="login-illustration">
          <img src={LoginImg} alt="Login Illustration" />
        </div>
      </main>
    </div>
  );
}