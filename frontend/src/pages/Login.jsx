import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    alert("Login successful!");
  };

  return (
    <div className="login-page">

      {/* LEFT SIDE */}
      <div className="login-left">

        <div className="login-brand">
          ✦ SmartServe
        </div>

        <div className="login-content">

          <span className="login-badge">
            🔐 Secure Access
          </span>

          <h1>
            Welcome Back to
            <span> SmartServe</span>
          </h1>

          <p>
            Find trusted local professionals, book services
            and manage your bookings easily from one place.
          </p>

          <div className="login-features">

            <div>
              <span>✓</span>
              Verified Service Providers
            </div>

            <div>
              <span>✓</span>
              Easy Online Booking
            </div>

            <div>
              <span>✓</span>
              Track Your Services
            </div>

          </div>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="login-right">

        <div className="login-card">

          <div className="login-card-header">

            <div className="login-icon">
              🔑
            </div>

            <h2>Login</h2>

            <p>
              Sign in to continue to your account
            </p>

          </div>

          {/* LOGIN FORM */}
          <form onSubmit={handleLogin}>

            <div className="form-group">

              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            </div>

            <div className="form-group">

              <div className="password-label">

                <label>Password</label>

                <button
                  type="button"
                  className="forgot-btn"
                  onClick={() =>
                    alert("Forgot password feature coming soon")
                  }
                >
                  Forgot Password?
                </button>

              </div>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

            </div>

            <button
              type="submit"
              className="login-submit"
            >
              Login →
            </button>

          </form>

          {/* DIVIDER */}
          <div className="login-divider">
            <span>OR</span>
          </div>

          {/* GUEST LOGIN */}
          <button
            className="guest-btn"
            onClick={() =>
              alert("Guest mode coming soon")
            }
          >
            Continue as Guest
          </button>

          {/* REGISTER */}
          <p className="register-text">

            Don't have an account?

            <button
              type="button"
              onClick={() => navigate("/register")}
            >
              Create Account
            </button>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;