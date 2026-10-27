import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Booking.css";

function Booking() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    service: "Pipe Repair",
    date: "",
    time: "",
    address: "",
    phone: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.date ||
      !formData.time ||
      !formData.address ||
      !formData.phone
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const bookingData = {
      bookingId: `#SLF${Date.now().toString().slice(-6)}`,
      provider: "AquaFix Plumbing Services",
      service: formData.service,
      date: formData.date,
      time: formData.time,
      address: formData.address,
      phone: formData.phone,
      notes: formData.notes,
      price: "₹300 onwards",
      rating: "4.8",
      distance: "2.5 km",
      experience: "8+ years",
      status: "Confirmed",
    };

    // Get existing bookings
    const existingBookings =
      JSON.parse(localStorage.getItem("smartServeBookings")) || [];

    // Add new booking
    existingBookings.push(bookingData);

    // Save all bookings
    localStorage.setItem(
      "smartServeBookings",
      JSON.stringify(existingBookings)
    );

    // Also save latest booking for confirmation page
    localStorage.setItem(
      "smartServeBooking",
      JSON.stringify(bookingData)
    );

    alert("Service booked successfully!");

    navigate("/booking-confirmation");
  };

  return (
    <div className="booking-page">

      {/* Navbar */}
      <nav className="booking-navbar">
        <div className="booking-nav-inner">

          <div
            className="booking-logo"
            onClick={() => navigate("/")}
          >
            SmartServe
          </div>

          <div className="booking-nav-links">

            <button onClick={() => navigate("/")}>
              Home
            </button>

            <button onClick={() => navigate("/services")}>
              Services
            </button>

            <button onClick={() => navigate(-1)}>
              Back
            </button>

          </div>

        </div>
      </nav>

      {/* Main */}
      <main className="booking-container">

        <div className="booking-header">

          <p className="booking-label">
            BOOK SERVICE
          </p>

          <h1>
            Book Your Service
          </h1>

          <p>
            Schedule a trusted local service provider at your
            convenient date and time.
          </p>

        </div>

        <div className="booking-layout">

          {/* Booking Form */}
          <form
            className="booking-form-card"
            onSubmit={handleSubmit}
          >

            <h2>
              Service Details
            </h2>

            {/* Service */}
            <div className="form-group">

              <label>
                Service
              </label>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option>Pipe Repair</option>
                <option>Tap & Faucet Repair</option>
                <option>Bathroom Plumbing</option>
                <option>Leakage Repair</option>
                <option>Home Plumbing</option>
                <option>Emergency Service</option>
              </select>

            </div>

            {/* Date + Time */}
            <div className="form-row">

              <div className="form-group">

                <label>
                  Date <span>*</span>
                </label>

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />

              </div>

              <div className="form-group">

                <label>
                  Time <span>*</span>
                </label>

                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                >

                  <option value="">
                    Select time
                  </option>

                  <option>09:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>12:00 PM</option>
                  <option>02:00 PM</option>
                  <option>03:00 PM</option>
                  <option>04:00 PM</option>
                  <option>05:00 PM</option>
                  <option>06:00 PM</option>

                </select>

              </div>

            </div>

            {/* Address */}
            <div className="form-group">

              <label>
                Address <span>*</span>
              </label>

              <textarea
                name="address"
                placeholder="Enter your complete service address"
                value={formData.address}
                onChange={handleChange}
                rows="4"
              ></textarea>

            </div>

            {/* Phone */}
            <div className="form-group">

              <label>
                Phone Number <span>*</span>
              </label>

              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />

            </div>

            {/* Notes */}
            <div className="form-group">

              <label>
                Additional Notes
              </label>

              <textarea
                name="notes"
                placeholder="Describe your service requirement..."
                value={formData.notes}
                onChange={handleChange}
                rows="4"
              ></textarea>

            </div>

            {/* Confirm */}
            <button
              type="submit"
              className="confirm-booking-btn"
            >
              Confirm Booking
            </button>

          </form>

          {/* Provider Summary */}
          <aside className="booking-summary">

            <div className="summary-card">

              <div className="summary-avatar">
                A
              </div>

              <h2>
                AquaFix Plumbing Services
              </h2>

              <p className="summary-category">
                Plumbing Service
              </p>

              <div className="summary-rating">
                ★ 4.8
                <span>
                  (126 reviews)
                </span>
              </div>

              <div className="summary-line"></div>

              <div className="summary-item">
                <span>Starting Price</span>
                <strong>₹300</strong>
              </div>

              <div className="summary-item">
                <span>Distance</span>
                <strong>2.5 km</strong>
              </div>

              <div className="summary-item">
                <span>Experience</span>
                <strong>8+ years</strong>
              </div>

              <div className="verified-summary">
                ✓ Verified Provider
              </div>

            </div>

          </aside>

        </div>

      </main>

      {/* Footer */}
      <footer className="booking-footer">

        <p>
          © 2026 SmartServe. Find trusted local services near you.
        </p>

      </footer>

    </div>
  );
}

export default Booking;