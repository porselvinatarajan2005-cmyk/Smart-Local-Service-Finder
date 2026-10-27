import { useNavigate, useParams } from "react-router-dom";
import "./ProviderDetails.css";

function ProviderDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="provider-details-page">

      {/* Navbar */}
      <nav className="provider-details-navbar">
        <div className="provider-details-navbar-inner">

          <div
            className="provider-details-logo"
            onClick={() => navigate("/")}
          >
            SmartServe
          </div>

          <div className="provider-details-nav">
            <button onClick={() => navigate("/")}>
              Home
            </button>

            <button onClick={() => navigate("/services")}>
              Services
            </button>

            <button>
              Nearby
            </button>

            <button>
              About
            </button>

            <button
              className="provider-login-btn"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>

        </div>
      </nav>

      {/* Main */}
      <main className="provider-details-container">

        {/* Breadcrumb */}
        <div className="provider-breadcrumb">
          <span onClick={() => navigate("/")}>Home</span>
          <span>›</span>
          <span onClick={() => navigate("/services")}>
            Services
          </span>
          <span>›</span>
          <span>Plumbing</span>
          <span>›</span>
          <strong>Provider Details</strong>
        </div>

        {/* Provider Main Card */}
        <section className="provider-main-card">

          <div className="provider-main-left">

            <div className="provider-avatar">
              A
            </div>

            <div className="provider-info">

              <span className="provider-category">
                PLUMBING
              </span>

              <h1>
                AquaFix Plumbing Services
              </h1>

              <div className="provider-verified">
                ✓ Verified Provider
              </div>

              <div className="provider-rating">
                <strong>★ 4.8</strong>
                <span>126 Reviews</span>
                <span>📍 2.5 km away</span>
              </div>

              <div className="provider-location">
                Professional plumbing services for homes,
                offices and commercial spaces.
              </div>

            </div>

          </div>

          <div className="provider-booking-box">

            <div className="provider-price-label">
              Starting price
            </div>

            <div className="provider-price">
              ₹300
            </div>

            <button
              className="provider-book-btn"
              onClick={() => navigate(`/book/${id || 1}`)}
            >
              Book Service →
            </button>

          </div>

        </section>

        {/* Stats */}
        <section className="provider-stats">

          <div className="provider-stat">
            <strong>8+</strong>
            <span>Years Experience</span>
          </div>

          <div className="provider-stat">
            <strong>126</strong>
            <span>Completed Jobs</span>
          </div>

          <div className="provider-stat">
            <strong>4.8</strong>
            <span>Average Rating</span>
          </div>

        </section>

        {/* Content */}
        <div className="provider-content-grid">

          {/* Left */}
          <div>

            {/* About */}
            <section className="provider-content-card">

              <h2>About Provider</h2>

              <p>
                AquaFix Plumbing Services provides reliable
                plumbing solutions for residential and
                commercial customers. Our services include
                pipe repairs, tap installation, bathroom
                plumbing, leakage fixing and emergency
                plumbing support.
              </p>

              <p>
                We focus on quality work, transparent pricing
                and convenient service appointments.
              </p>

            </section>

            {/* Services */}
            <section className="provider-content-card">

              <h2>Services Offered</h2>

              <div className="provider-services">

                <div className="provider-service-item">
                  🔧 Pipe Repair
                </div>

                <div className="provider-service-item">
                  🚰 Tap & Faucet Repair
                </div>

                <div className="provider-service-item">
                  🚿 Bathroom Plumbing
                </div>

                <div className="provider-service-item">
                  💧 Leakage Repair
                </div>

                <div className="provider-service-item">
                  🏠 Home Plumbing
                </div>

                <div className="provider-service-item">
                  🚨 Emergency Service
                </div>

              </div>

            </section>

            {/* Reviews */}
            <section className="provider-content-card">

              <h2>Customer Reviews</h2>

              <div className="provider-review">

                <div className="review-top">
                  <span className="review-name">
                    Rahul Kumar
                  </span>

                  <span className="review-stars">
                    ★★★★★
                  </span>
                </div>

                <p>
                  Very quick and professional service.
                  The plumbing issue was fixed properly.
                </p>

              </div>

              <div className="provider-review">

                <div className="review-top">
                  <span className="review-name">
                    Priya S
                  </span>

                  <span className="review-stars">
                    ★★★★★
                  </span>
                </div>

                <p>
                  Good service and reasonable pricing.
                  Highly recommended.
                </p>

              </div>

            </section>

          </div>

          {/* Right Sidebar */}
          <aside>

            <div className="provider-sidebar-card">

              <h3>Provider Information</h3>

              <div className="provider-detail-row">
                <span className="provider-detail-label">
                  Location
                </span>

                <span className="provider-detail-value">
                  Coimbatore
                </span>
              </div>

              <div className="provider-detail-row">
                <span className="provider-detail-label">
                  Working Hours
                </span>

                <span className="provider-detail-value">
                  9 AM - 7 PM
                </span>
              </div>

              <div className="provider-detail-row">
                <span className="provider-detail-label">
                  Availability
                </span>

                <span className="provider-detail-value">
                  Available Today
                </span>
              </div>

              <div className="provider-detail-row">
                <span className="provider-detail-label">
                  Experience
                </span>

                <span className="provider-detail-value">
                  8+ Years
                </span>
              </div>

              <div className="provider-map">
                📍 Service Location
              </div>

              <div className="provider-verified-box">

                <strong>
                  ✓ SmartServe Verified
                </strong>

                <span>
                  This provider has been verified by
                  SmartServe.
                </span>

              </div>

            </div>

          </aside>

        </div>

      </main>

      {/* Footer */}
      <footer className="provider-details-footer">
        <p>
          © 2026 SmartServe. Find trusted local services near you.
        </p>
      </footer>

    </div>
  );
}

export default ProviderDetails;