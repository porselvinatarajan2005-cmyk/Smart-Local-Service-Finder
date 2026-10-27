import React from "react";
import { useNavigate } from "react-router-dom";
import "./MyBookings.css";

function MyBookings() {
  const navigate = useNavigate();
  const handleCancelBooking = (bookingId) => {
  const confirmCancel = window.confirm(
    "Are you sure you want to cancel this booking?"
  );

  if (!confirmCancel) {
    return;
  }

  const savedBookings =
    JSON.parse(localStorage.getItem("smartServeBookings")) || [];

  const updatedBookings = savedBookings.filter(
    (booking) => booking.bookingId !== bookingId
  );

  localStorage.setItem(
    "smartServeBookings",
    JSON.stringify(updatedBookings)
  );

  alert("Booking cancelled successfully!");

  window.location.reload();
};

  // Get all bookings from localStorage
  const savedBookings = localStorage.getItem("smartServeBookings");

  const bookings = savedBookings
    ? JSON.parse(savedBookings)
    : [];

  return (
    <div className="my-bookings-page">

      {/* Navbar */}
      <nav className="bookings-navbar">
        <div className="bookings-logo">
          <span>⚡</span>
          <h2>SmartServe</h2>
        </div>

        <div className="bookings-nav-links">
          <button onClick={() => navigate("/")}>
            Home
          </button>

          <button onClick={() => navigate("/services")}>
            Services
          </button>

          <button onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </nav>

      {/* Header */}
      <section className="bookings-header">
        <div>
          <p className="bookings-label">
            MY ACCOUNT
          </p>

          <h1>
            My Bookings
          </h1>

          <p>
            View and manage your booked local services.
          </p>
        </div>

        <button
          className="find-service-btn"
          onClick={() => navigate("/services")}
        >
          + Find a Service
        </button>
      </section>

      {/* Bookings */}
      <main className="bookings-container">

        {bookings.length === 0 ? (
          <div className="empty-bookings">

            <div className="empty-icon">
              📅
            </div>

            <h2>
              No Bookings Yet
            </h2>

            <p>
              You haven't booked any services yet.
            </p>

            <button
              onClick={() => navigate("/services")}
            >
              Find a Service
            </button>

          </div>
        ) : (

          bookings.map((booking) => {

            const formattedDate = booking.date
              ? new Date(booking.date).toLocaleDateString(
                  "en-IN",
                  {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  }
                )
              : "Not selected";

            return (
              <div
                className="booking-card"
                key={booking.bookingId}
              >

                {/* Top */}
                <div className="booking-top">

                  <div>

                    <span className="booking-id">
                      Booking {booking.bookingId}
                    </span>

                    <h2>
                      {booking.service}
                    </h2>

                    <p className="provider-name">
                      {booking.provider}
                    </p>

                  </div>

                  <span className="status-badge">
                    ✓ {booking.status}
                  </span>

                </div>

                {/* Details */}
                <div className="booking-details">

                  {/* Date */}
                  <div className="booking-detail">

                    <span className="detail-icon">
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
                  <div className="booking-detail">

                    <span className="detail-icon">
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
                  <div className="booking-detail">

                    <span className="detail-icon">
                      ₹
                    </span>

                    <div>
                      <small>
                        Price
                      </small>

                      <strong>
                        {booking.price || "₹300 onwards"}
                      </strong>
                    </div>

                  </div>

                  {/* Rating */}
                  <div className="booking-detail">

                    <span className="detail-icon">
                      ⭐
                    </span>

                    <div>
                      <small>
                        Rating
                      </small>

                      <strong>
                        {booking.rating || "4.8"}
                      </strong>
                    </div>

                  </div>

                </div>

                {/* Address */}
                {booking.address && (
                  <div
                    style={{
                      marginTop: "18px",
                      padding: "14px",
                      background: "#f8fafc",
                      borderRadius: "10px",
                      fontSize: "14px",
                      color: "#475569",
                    }}
                  >
                    <strong>
                      📍 Service Address
                    </strong>

                    <p
                      style={{
                        margin: "6px 0 0",
                      }}
                    >
                      {booking.address}
                    </p>
                  </div>
                )}

                {/* Phone */}
                {booking.phone && (
                  <div
                    style={{
                      marginTop: "10px",
                      fontSize: "14px",
                      color: "#475569",
                    }}
                  >
                    📞 <strong>Phone:</strong>{" "}
                    {booking.phone}
                  </div>
                )}

                {/* Actions */}
                <div className="booking-actions">

                  <button
                    className="view-provider-btn"
                    onClick={() =>
                      navigate("/provider/1")
                    }
                  >
                    View Provider
                  </button>

                  <button
                    className="book-again-btn"
                    onClick={() =>
                      navigate("/book/1")
                    }
                  >
                    Book Again
                  </button>

                </div>
                <button
                className="cancel-booking-btn"
                onClick={() =>
                handleCancelBooking(booking.bookingId)
                }
                >
               Cancel Booking
               </button>

              </div>
            );
          })

        )}

      </main>

      {/* Footer */}
      <footer className="bookings-footer">

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

export default MyBookings;