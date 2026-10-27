import React from "react";
import { useNavigate } from "react-router-dom";
import "./BookingConfirmation.css";

function BookingConfirmation() {
  const navigate = useNavigate();

  // Get saved booking details
  const savedBooking = localStorage.getItem("smartServeBooking");

  const booking = savedBooking
    ? JSON.parse(savedBooking)
    : {
        bookingId: "#SLF1001",
        provider: "AquaFix Plumbing Services",
        service: "Pipe Repair",
        date: "",
        time: "",
        address: "",
        price: "₹300 onwards",
        status: "Confirmed",
      };

  // Format date
  const formattedDate = booking.date
    ? new Date(booking.date).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "Not selected";

  return (
    <div className="confirmation-page">

      {/* Navbar */}
      <nav className="confirmation-navbar">

        <div className="confirmation-logo">
          <span>⚡</span>
          <h2>SmartServe</h2>
        </div>

        <div className="confirmation-nav-links">

          <button onClick={() => navigate("/")}>
            Home
          </button>

          <button onClick={() => navigate("/services")}>
            Services
          </button>

          <button onClick={() => navigate("/my-bookings")}>
            My Bookings
          </button>

        </div>

      </nav>

      {/* Confirmation Content */}
      <main className="confirmation-container">

        <div className="success-icon">
          ✓
        </div>

        <h1>
          Booking Confirmed!
        </h1>

        <p className="confirmation-message">
          Your service booking has been successfully confirmed.
        </p>

        {/* Booking Card */}
        <div className="confirmation-card">

          {/* Card Header */}
          <div className="confirmation-card-header">

            <div>

              <span className="confirmation-label">
                BOOKING ID
              </span>

              <h2>
                {booking.bookingId}
              </h2>

            </div>

            <span className="confirmed-badge">
              ✓ Confirmed
            </span>

          </div>

          {/* Booking Details */}
          <div className="confirmation-details">

            {/* Provider */}
            <div className="confirmation-detail">

              <span>
                👨‍🔧
              </span>

              <div>

                <small>
                  Service Provider
                </small>

                <strong>
                  {booking.provider}
                </strong>

              </div>

            </div>

            {/* Service */}
            <div className="confirmation-detail">

              <span>
                🔧
              </span>

              <div>

                <small>
                  Service
                </small>

                <strong>
                  {booking.service}
                </strong>

              </div>

            </div>

            {/* Date */}
            <div className="confirmation-detail">

              <span>
                📅
              </span>

              <div>

                <small>
                  Date
                </small>

                <strong>
                  {formattedDate}
                </strong>

              </div>

            </div>

            {/* Time */}
            <div className="confirmation-detail">

              <span>
                ⏰
              </span>

              <div>

                <small>
                  Time
                </small>

                <strong>
                  {booking.time || "Not selected"}
                </strong>

              </div>

            </div>

            {/* Price */}
            <div className="confirmation-detail">

              <span>
                ₹
              </span>

              <div>

                <small>
                  Starting Price
                </small>

                <strong>
                  {booking.price}
                </strong>

              </div>

            </div>

            {/* Address */}
            <div className="confirmation-detail">

              <span>
                📍
              </span>

              <div>

                <small>
                  Service Address
                </small>

                <strong>
                  {booking.address || "Not provided"}
                </strong>

              </div>

            </div>

          </div>

        </div>

        {/* Action Buttons */}
        <div className="confirmation-actions">

          <button
            className="home-btn"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>

          <button
            className="service-btn"
            onClick={() => navigate("/services")}
          >
            Find Another Service
          </button>

          <button
            className="bookings-btn"
            onClick={() => navigate("/my-bookings")}
          >
            View My Bookings
          </button>

        </div>

      </main>

      {/* Footer */}
      <footer className="confirmation-footer">

        <div>

          <h3>
            ⚡ SmartServe
          </h3>

          <p>
            Find trusted local services near you.
          </p>

        </div>

        <p>
          © 2026 SmartServe. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default BookingConfirmation;