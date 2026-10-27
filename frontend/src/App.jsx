import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  const [service, setService] = useState("");
  const [location, setLocation] = useState("");
  const [locationLoading, setLocationLoading] = useState(false);

  const services = [
    { icon: "🔧", name: "Plumbing", text: "Pipes, taps & repairs" },
    { icon: "⚡", name: "Electrical", text: "Wiring & electrical work" },
    { icon: "❄️", name: "AC Repair", text: "AC service & maintenance" },
    { icon: "🧹", name: "Cleaning", text: "Home & office cleaning" },
    { icon: "🚗", name: "Car Service", text: "Repair & maintenance" },
    { icon: "💻", name: "Computer Repair", text: "Laptop & PC service" },
  ];

  const providers = [
    {
      name: "AquaFix Plumbing Services",
      service: "Plumbing",
      rating: "4.8",
      distance: "2.5 km",
      icon: "🔧",
    },
    {
      name: "Bright Electrical Works",
      service: "Electrical",
      rating: "4.7",
      distance: "3.1 km",
      icon: "⚡",
    },
    {
      name: "CoolCare AC Services",
      service: "AC Repair",
      rating: "4.9",
      distance: "4.2 km",
      icon: "❄️",
    },
  ];

  // =========================================
  // USE CURRENT LOCATION
  // =========================================
  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Location is not supported by your browser.");
      return;
    }

    setLocationLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);

        setLocation(
          `Lat: ${latitude.toFixed(4)}, Lng: ${longitude.toFixed(4)}`
        );

        setLocationLoading(false);

        alert("Your current location has been detected!");
      },
      (error) => {
        setLocationLoading(false);

        if (error.code === 1) {
          alert(
            "Location permission denied. Please allow location access in your browser."
          );
        } else if (error.code === 2) {
          alert("Your location could not be detected.");
        } else {
          alert("Unable to detect your location.");
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  // =========================================
  // SEARCH SERVICES
  // =========================================
  const handleSearch = () => {
    if (!service.trim()) {
      alert("Please enter the service you need.");
      return;
    }

    const serviceName = service.trim().toLowerCase();

    const serviceRoutes = {
      plumbing: "plumbing",
      plumber: "plumbing",

      electrical: "electrical",
      electrician: "electrical",

      "ac repair": "ac-repair",
      ac: "ac-repair",

      cleaning: "cleaning",
      cleaner: "cleaning",

      "car service": "car-service",
      mechanic: "car-service",

      "computer repair": "computer-repair",
      computer: "computer-repair",
    };

    const matchedService = serviceRoutes[serviceName];

    if (matchedService) {
      navigate(`/providers/${matchedService}`, {
        state: {
          location: location.trim(),
        },
      });
    } else {
      alert(
        `We are currently showing providers for "${service}". Please choose a supported service.`
      );
    }
  };

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <div className="container navbar-container">

          <div
            className="brand"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            <div className="brand-mark">S</div>
            <span>SmartServe</span>
          </div>

          <nav className="nav-menu">

            <button
              className="nav-link-button"
              onClick={() => navigate("/")}
            >
              Home
            </button>

            <button
              className="nav-link-button"
              onClick={() => navigate("/services")}
            >
              Services
            </button>

            <button
              className="nav-link-button"
              onClick={() =>
                document
                  .getElementById("providers")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Nearby
            </button>

            <button
              className="nav-link-button"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              About
            </button>

          </nav>

          <button
            className="nav-login"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

        </div>
      </header>

      {/* ================= HERO ================= */}

      <main>

        <section className="hero" id="home">

          <div className="container hero-container">

            <div className="hero-content">

              <div className="hero-tag">
                ✦ Local services made simple
              </div>

              <h1>
                Find trusted <span>local services</span> near you.
              </h1>

              <p className="hero-text">
                Discover verified professionals for repairs,
                maintenance and everyday services — all in one
                simple platform.
              </p>

              {/* ================= SEARCH PANEL ================= */}

              <div className="search-panel">

                {/* SERVICE */}

                <div className="search-field">

                  <span className="search-icon">
                    🔍
                  </span>

                  <div>

                    <label>
                      What service do you need?
                    </label>

                    <input
                      type="text"
                      placeholder="e.g. Plumber, Electrician"
                      value={service}
                      onChange={(e) =>
                        setService(e.target.value)
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleSearch();
                        }
                      }}
                    />

                  </div>

                </div>

                {/* LOCATION */}

                <div className="search-field">

                  <span className="search-icon">
                    📍
                  </span>

                  <div>

                    <label>
                      Where?
                    </label>

                    <input
                      type="text"
                      placeholder="Enter city or area"
                      value={location}
                      onChange={(e) =>
                        setLocation(e.target.value)
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleSearch();
                        }
                      }}
                    />

                  </div>

                </div>

                {/* SEARCH BUTTON */}

                <button
                  className="search-button"
                  onClick={handleSearch}
                >
                  Find Services <span>→</span>
                </button>

              </div>

              {/* CURRENT LOCATION */}

              <button
                className="current-location"
                onClick={handleCurrentLocation}
                disabled={locationLoading}
              >
                {locationLoading
                  ? "📍 Detecting your location..."
                  : "📍 Use my current location"}
              </button>

              {/* HERO STATS */}

              <div className="hero-stats">

                <div className="stat">
                  <strong>500+</strong>
                  <span>Providers</span>
                </div>

                <div className="stat">
                  <strong>20+</strong>
                  <span>Categories</span>
                </div>

                <div className="stat">
                  <strong>4.8</strong>
                  <span>Average Rating</span>
                </div>

              </div>

            </div>

            {/* ================= HERO VISUAL ================= */}

            <div className="hero-visual">

              <div className="hero-main-card">

                <div className="visual-header">

                  <div>
                    <span>Nearby services</span>

                    <h3>
                      Professionals around you
                    </h3>
                  </div>

                  <div className="live-dot">
                    <span></span>
                    Live
                  </div>

                </div>

                <div className="map-preview">

                  <div className="map-grid"></div>

                  <div className="map-marker marker-one">
                    🔧
                  </div>

                  <div className="map-marker marker-two">
                    ⚡
                  </div>

                  <div className="map-marker marker-three">
                    ❄️
                  </div>

                  <div className="map-center">
                    <span>📍</span>
                  </div>

                </div>

                <div className="preview-provider">

                  <div className="provider-icon">
                    🔧
                  </div>

                  <div className="provider-details">

                    <strong>
                      AquaFix Plumbing Services
                    </strong>

                    <span>
                      ⭐ 4.8 &nbsp; • &nbsp; 2.5 km away
                    </span>

                  </div>

                  <button
                    onClick={() =>
                      navigate("/provider/1")
                    }
                  >
                    View
                  </button>

                </div>

              </div>

              <div className="floating-badge badge-top">
                ✓ Verified providers
              </div>

              <div className="floating-badge badge-bottom">
                ⭐ 4.8 average rating
              </div>

            </div>

          </div>

        </section>

        {/* ================= SERVICES ================= */}

        <section
          className="services-section"
          id="services"
        >

          <div className="container">

            <div className="section-heading">

              <div>

                <span className="section-label">
                  SERVICES
                </span>

                <h2>
                  What service do you need?
                </h2>

                <p>
                  Choose a category and find professionals near
                  your location.
                </p>

              </div>

              <button
                className="outline-button"
                onClick={() =>
                  navigate("/services")
                }
              >
                View all services →
              </button>

            </div>

            <div className="service-grid">

              {services.map((item) => (

                <div
                  className="service-card"
                  key={item.name}
                  onClick={() => {
                    setService(item.name);
                    navigate("/services");
                  }}
                >

                  <div className="service-icon">
                    {item.icon}
                  </div>

                  <h3>
                    {item.name}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                  <span className="service-arrow">
                    →
                  </span>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* ================= HOW IT WORKS ================= */}

        <section className="how-section">

          <div className="container">

            <div className="center-heading">

              <span className="section-label">
                HOW IT WORKS
              </span>

              <h2>
                Get your service in 3 simple steps
              </h2>

              <p>
                Finding the right professional has never been easier.
              </p>

            </div>

            <div className="steps-grid">

              <div className="step-card">

                <div className="step-number">
                  01
                </div>

                <div className="step-icon">
                  🔍
                </div>

                <h3>
                  Search
                </h3>

                <p>
                  Search for the service you need and choose
                  your location.
                </p>

              </div>

              <div className="step-card">

                <div className="step-number">
                  02
                </div>

                <div className="step-icon">
                  👥
                </div>

                <h3>
                  Compare
                </h3>

                <p>
                  Compare nearby providers by ratings,
                  distance and price.
                </p>

              </div>

              <div className="step-card">

                <div className="step-number">
                  03
                </div>

                <div className="step-icon">
                  📅
                </div>

                <h3>
                  Book
                </h3>

                <p>
                  Select a provider and book your service
                  at your preferred time.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ================= PROVIDERS ================= */}

        <section
          className="providers-section"
          id="providers"
        >

          <div className="container">

            <div className="section-heading">

              <div>

                <span className="section-label">
                  NEARBY
                </span>

                <h2>
                  Trusted professionals
                </h2>

                <p>
                  Explore highly rated service providers near you.
                </p>

              </div>

              <button
                className="outline-button"
                onClick={() =>
                  navigate("/services")
                }
              >
                Explore nearby →
              </button>

            </div>

            <div className="provider-grid">

              {providers.map((provider) => (

                <div
                  className="provider-card"
                  key={provider.name}
                >

                  <div className="provider-top">

                    <div className="provider-avatar">
                      {provider.icon}
                    </div>

                    <span className="verified-badge">
                      ✓ Verified
                    </span>

                  </div>

                  <div className="provider-content">

                    <span className="provider-service">
                      {provider.service}
                    </span>

                    <h3>
                      {provider.name}
                    </h3>

                    <div className="provider-meta">

                      <span>
                        ⭐ {provider.rating}
                      </span>

                      <span>
                        📍 {provider.distance}
                      </span>

                    </div>

                  </div>

                  <button
                    className="view-provider"
                    onClick={() =>
                      navigate("/provider/1")
                    }
                  >
                    View Profile →
                  </button>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* ================= FEATURES ================= */}

        <section
          className="features-section"
          id="about"
        >

          <div className="container features-container">

            <div className="features-content">

              <span className="section-label">
                WHY SMARTSERVE
              </span>

              <h2>
                Everything you need to find the right professional.
              </h2>

              <p>
                SmartServe brings local service providers,
                ratings, availability and booking together
                in one convenient platform.
              </p>

              <div className="feature-list">

                <div className="feature-item">

                  <span>✓</span>

                  <div>

                    <strong>
                      Verified professionals
                    </strong>

                    <p>
                      Discover trusted local service providers.
                    </p>

                  </div>

                </div>

                <div className="feature-item">

                  <span>✓</span>

                  <div>

                    <strong>
                      Ratings & reviews
                    </strong>

                    <p>
                      Compare providers using customer feedback.
                    </p>

                  </div>

                </div>

                <div className="feature-item">

                  <span>✓</span>

                  <div>

                    <strong>
                      Easy booking
                    </strong>

                    <p>
                      Book your required service with simple steps.
                    </p>

                  </div>

                </div>

                <div className="feature-item">

                  <span>✓</span>

                  <div>

                    <strong>
                      Nearby services
                    </strong>

                    <p>
                      Find professionals based on your location.
                    </p>

                  </div>

                </div>

              </div>

            </div>

            <div className="feature-visual">

              <div className="feature-box">

                <div className="feature-box-icon">
                  ✦
                </div>

                <h3>
                  Smart Service Assistant
                </h3>

                <p>
                  Tell us what you need and discover suitable
                  local services quickly.
                </p>

                <button className="assistant-button">
                  Try Assistant →
                </button>

              </div>

            </div>

          </div>

        </section>

      </main>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="container footer-container">

          <div className="footer-brand">

            <div className="brand">

              <div className="brand-mark">
                S
              </div>

              <span>
                SmartServe
              </span>

            </div>

            <p>
              Your simple way to discover and book trusted
              local services.
            </p>

          </div>

          <div className="footer-column">

            <h4>
              Platform
            </h4>

            <button
              onClick={() => navigate("/")}
            >
              Home
            </button>

            <button
              onClick={() =>
                navigate("/services")
              }
            >
              Services
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("providers")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              Nearby
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              About
            </button>

          </div>

          <div className="footer-column">

            <h4>
              Services
            </h4>

            <button
              onClick={() =>
                navigate("/services")
              }
            >
              Plumbing
            </button>

            <button
              onClick={() =>
                navigate("/services")
              }
            >
              Electrical
            </button>

            <button
              onClick={() =>
                navigate("/services")
              }
            >
              Cleaning
            </button>

            <button
              onClick={() =>
                navigate("/services")
              }
            >
              AC Repair
            </button>

          </div>

          <div className="footer-column">

            <h4>
              Support
            </h4>

            <button>
              Help Center
            </button>

            <button>
              Contact
            </button>

            <button>
              Privacy
            </button>

            <button>
              Terms
            </button>

          </div>

        </div>

        <div className="container footer-bottom">
          © 2026 SmartServe. All rights reserved.
        </div>

      </footer>

    </div>
  );
}

export default App;