import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Account created successfully!");

    navigate("/login");
  };

  return (
    <div className="register-page">

      {/* LEFT SIDE */}

      <div className="register-left">

        <div className="register-brand">
          <div className="register-brand-mark">S</div>
          <span>SmartServe</span>
        </div>

        <div className="register-content">

          <span className="register-badge">
            ✦ Join SmartServe
          </span>

          <h1>
            Find the right
            <span> service </span>
            for your needs.
          </h1>

          <p>
            Create your SmartServe account and discover
            trusted local professionals near you.
          </p>

          <div className="register-features">

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
              Track Your Bookings
            </div>

            <div>
              <span>✓</span>
              Ratings & Reviews
            </div>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="register-right">

        <div className="register-card">

          <div className="register-header">

            <div className="register-icon">
              ✦
            </div>

            <h2>
              Create Account
            </h2>

            <p>
              Sign up to get started with SmartServe
            </p>

          </div>

          <form onSubmit={handleRegister}>

            {/* NAME */}

            <div className="register-form-group">

              <label>
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
              />

            </div>

            {/* EMAIL */}

            <div className="register-form-group">

              <label>
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

            </div>

            {/* PHONE */}

            <div className="register-form-group">

              <label>
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
              />

            </div>

            {/* PASSWORD */}

            <div className="register-form-group">

              <label>
                Password
              </label>

              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

            </div>

            {/* CONFIRM PASSWORD */}

            <div className="register-form-group">

              <label>
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
              />

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="register-submit"
            >
              Create Account →
            </button>

          </form>

          <div className="register-divider">
            <span>OR</span>
          </div>

          <p className="login-existing">

            Already have an account?

            <button
              type="button"
              onClick={() => navigate("/login")}
            >
              Login
            </button>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;