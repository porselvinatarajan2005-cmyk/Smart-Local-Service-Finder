import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

function Services() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const services = [
    {
      icon: "🔧",
      name: "Plumbing",
      description: "Pipes, taps, leakage and water-related repairs",
      providers: "42 Providers",
    },
    {
      icon: "⚡",
      name: "Electrical",
      description: "Wiring, switches, fans and electrical repairs",
      providers: "38 Providers",
    },
    {
      icon: "❄️",
      name: "AC Repair",
      description: "AC service, repair and maintenance",
      providers: "25 Providers",
    },
    {
      icon: "🧹",
      name: "Cleaning",
      description: "Home, office and deep cleaning services",
      providers: "31 Providers",
    },
    {
      icon: "🚗",
      name: "Car Service",
      description: "Car repair, maintenance and servicing",
      providers: "27 Providers",
    },
    {
      icon: "💻",
      name: "Computer Repair",
      description: "Laptop, desktop and software support",
      providers: "19 Providers",
    },
    {
      icon: "💇",
      name: "Beauty & Salon",
      description: "Beauty, salon and personal care services",
      providers: "22 Providers",
    },
    {
      icon: "🎨",
      name: "Painting",
      description: "Home, office and wall painting services",
      providers: "16 Providers",
    },
    {
      icon: "📦",
      name: "Moving",
      description: "House shifting and moving assistance",
      providers: "14 Providers",
    },
    {
      icon: "📷",
      name: "Photography",
      description: "Events, functions and professional photography",
      providers: "12 Providers",
    },
    {
      icon: "❄️",
      name: "Appliance Repair",
      description: "Fridge, washing machine and appliance repair",
      providers: "18 Providers",
    },
    {
      icon: "🚿",
      name: "Home Maintenance",
      description: "General repair and maintenance services",
      providers: "24 Providers",
    },
  ];

  const filteredServices = services.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleServiceClick = (serviceName) => {
    navigate(`/providers/${serviceName.toLowerCase().replace(/\s+/g, "-")}`);
  };

  return (
    <div className="services-page">

      {/* NAVBAR */}
      <header className="services-navbar">
        <div className="services-nav-container">

          <div
            className="services-brand"
            onClick={() => navigate("/")}
          >
            <div className="services-brand-mark">S</div>
            <span>SmartServe</span>
          </div>

          <nav>
            <button onClick={() => navigate("/")}>
              Home
            </button>

            <button className="active">
              Services
            </button>

            <button>
              Nearby
            </button>

            <button>
              About
            </button>
          </nav>

          <button
            className="services-login"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

        </div>
      </header>

      {/* HERO */}
      <section className="services-hero">

        <div className="services-hero-content">

          <span className="services-label">
            EXPLORE SERVICES
          </span>

          <h1>
            What service do you
            <span> need today?</span>
          </h1>

          <p>
            Find trusted professionals for your home,
            vehicle and everyday service needs.
          </p>

          <div className="services-search">

            <span>🔍</span>

            <input
              type="text"
              placeholder="Search for a service..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <main className="services-main">

        <div className="services-main-header">

          <div>
            <span className="services-section-label">
              ALL SERVICES
            </span>

            <h2>
              Choose a service
            </h2>

            <p>
              Select a category to find nearby professionals.
            </p>
          </div>

          <div className="service-count">
            {filteredServices.length} Services
          </div>

        </div>

        <div className="services-grid">

          {filteredServices.length > 0 ? (

            filteredServices.map((item) => (

              <div
                className="service-item-card"
                key={item.name}
                onClick={() => handleServiceClick(item.name)}
              >

                <div className="service-item-top">

                  <div className="service-item-icon">
                    {item.icon}
                  </div>

                  <span className="service-item-arrow">
                    →
                  </span>

                </div>

                <h3>
                  {item.name}
                </h3>

                <p>
                  {item.description}
                </p>

                <div className="service-item-bottom">
                  <span>
                    {item.providers}
                  </span>

                  <span>
                    View →
                  </span>
                </div>

              </div>

            ))

          ) : (

            <div className="no-services">
              <div>🔍</div>

              <h3>
                No services found
              </h3>

              <p>
                Try searching for another service.
              </p>
            </div>

          )}

        </div>

      </main>

      {/* FOOTER */}
      <footer className="services-footer">

        <div className="services-footer-content">

          <div>
            <div className="services-footer-brand">
              <div className="services-brand-mark">
                S
              </div>

              <span>
                SmartServe
              </span>
            </div>

            <p>
              Your simple way to discover and book
              trusted local services.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>

            <button onClick={() => navigate("/")}>
              Home
            </button>

            <button>
              Services
            </button>

            <button onClick={() => navigate("/login")}>
              Login
            </button>
          </div>

          <div>
            <h4>Popular Services</h4>

            <button onClick={() => handleServiceClick("Plumbing")}>
              Plumbing
            </button>

            <button onClick={() => handleServiceClick("Electrical")}>
              Electrical
            </button>

            <button onClick={() => handleServiceClick("Cleaning")}>
              Cleaning
            </button>
          </div>

        </div>

        <div className="services-footer-bottom">
          © 2026 SmartServe. All rights reserved.
        </div>

      </footer>

    </div>
  );
}

export default Services;