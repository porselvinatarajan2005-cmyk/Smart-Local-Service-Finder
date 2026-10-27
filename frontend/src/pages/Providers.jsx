import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./Providers.css";

function Providers() {
  const navigate = useNavigate();
  const routerLocation = useLocation();
  const { service } = useParams();

  const searchLocation = routerLocation.state?.location || "";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(
    service
      ? service
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase())
      : "All"
  );
  const [rating, setRating] = useState("All");

  // =========================================
  // PROVIDERS DATA
  // =========================================

  const providers = [
    {
      id: 1,
      name: "AquaFix Plumbing Services",
      service: "Plumbing",
      location: "Velankanni",
      icon: "🔧",
      rating: "4.8",
      reviews: "126",
      distance: "2.5 km",
      price: "₹300 onwards",
      experience: "8 years",
      verified: true,
      available: true,
    },

    {
      id: 2,
      name: "Bright Electrical Works",
      service: "Electrical",
      location: "Velankanni",
      icon: "⚡",
      rating: "4.7",
      reviews: "98",
      distance: "3.1 km",
      price: "₹400 onwards",
      experience: "6 years",
      verified: true,
      available: true,
    },

    {
      id: 3,
      name: "CoolCare AC Services",
      service: "AC Repair",
      location: "Velankanni",
      icon: "❄️",
      rating: "4.9",
      reviews: "154",
      distance: "4.2 km",
      price: "₹500 onwards",
      experience: "10 years",
      verified: true,
      available: true,
    },

    {
      id: 4,
      name: "FreshHome Cleaning",
      service: "Cleaning",
      location: "Kumbakonam",
      icon: "🧹",
      rating: "4.6",
      reviews: "87",
      distance: "2.8 km",
      price: "₹600 onwards",
      experience: "5 years",
      verified: true,
      available: true,
    },

    {
      id: 5,
      name: "AutoCare Experts",
      service: "Car Service",
      location: "Kumbakonam",
      icon: "🚗",
      rating: "4.8",
      reviews: "112",
      distance: "5.4 km",
      price: "₹700 onwards",
      experience: "9 years",
      verified: true,
      available: false,
    },

    {
      id: 6,
      name: "TechFix Computer Care",
      service: "Computer Repair",
      location: "Kumbakonam",
      icon: "💻",
      rating: "4.5",
      reviews: "73",
      distance: "3.7 km",
      price: "₹350 onwards",
      experience: "4 years",
      verified: true,
      available: true,
    },

    {
      id: 7,
      name: "StylePoint Beauty Studio",
      service: "Beauty & Salon",
      location: "Chennai",
      icon: "💇",
      rating: "4.7",
      reviews: "91",
      distance: "4.5 km",
      price: "₹400 onwards",
      experience: "7 years",
      verified: true,
      available: true,
    },

    {
      id: 8,
      name: "PerfectWall Painters",
      service: "Painting",
      location: "Chennai",
      icon: "🎨",
      rating: "4.6",
      reviews: "65",
      distance: "6.1 km",
      price: "₹800 onwards",
      experience: "6 years",
      verified: false,
      available: true,
    },

    // Extra Velankanni providers
    {
      id: 9,
      name: "Velankanni Home Plumbing",
      service: "Plumbing",
      location: "Velankanni",
      icon: "🔧",
      rating: "4.6",
      reviews: "84",
      distance: "3.2 km",
      price: "₹250 onwards",
      experience: "6 years",
      verified: true,
      available: true,
    },

    {
      id: 10,
      name: "Velankanni Power Solutions",
      service: "Electrical",
      location: "Velankanni",
      icon: "⚡",
      rating: "4.5",
      reviews: "72",
      distance: "4.1 km",
      price: "₹350 onwards",
      experience: "5 years",
      verified: true,
      available: true,
    },

    // Extra Kumbakonam providers
    {
      id: 11,
      name: "Kumbakonam Plumbing Care",
      service: "Plumbing",
      location: "Kumbakonam",
      icon: "🔧",
      rating: "4.7",
      reviews: "96",
      distance: "2.1 km",
      price: "₹280 onwards",
      experience: "7 years",
      verified: true,
      available: true,
    },

    {
      id: 12,
      name: "Kumbakonam Electrical Experts",
      service: "Electrical",
      location: "Kumbakonam",
      icon: "⚡",
      rating: "4.8",
      reviews: "118",
      distance: "3.4 km",
      price: "₹380 onwards",
      experience: "8 years",
      verified: true,
      available: true,
    },
  ];

  const categories = [
    "All",
    "Plumbing",
    "Electrical",
    "AC Repair",
    "Cleaning",
    "Car Service",
    "Computer Repair",
    "Beauty & Salon",
    "Painting",
  ];

  // =========================================
  // NORMALIZE LOCATION
  // =========================================

  const normalizeLocation = (value) => {
    return value
      .toLowerCase()
      .trim()
      .replace(/^lat:\s*[-\d.]+,\s*lng:\s*[-\d.]+$/i, "");
  };

  const currentLocation = normalizeLocation(searchLocation);

  // =========================================
  // FILTER PROVIDERS
  // =========================================

  const filteredProviders = providers.filter((provider) => {
    const matchesSearch =
      provider.name.toLowerCase().includes(search.toLowerCase()) ||
      provider.service.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      provider.service.toLowerCase() === category.toLowerCase();

    const matchesRating =
      rating === "All" ||
      Number(provider.rating) >= Number(rating);

    const matchesLocation =
      !currentLocation ||
      provider.location.toLowerCase().includes(currentLocation);

    return (
      matchesSearch &&
      matchesCategory &&
      matchesRating &&
      matchesLocation
    );
  });

  // =========================================
  // PAGE TITLE
  // =========================================

  const displayService =
    category !== "All"
      ? category
      : service
      ? service
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase())
      : "Local Services";

  const displayLocation =
    searchLocation || "Your Area";

  // =========================================
  // VIEW PROFILE
  // =========================================

  const handleViewProfile = (provider) => {
    navigate(`/provider/${provider.id}`, {
      state: {
        providerLocation: provider.location,
        providerService: provider.service,
      },
    });
  };

  // =========================================
  // CLEAR FILTERS
  // =========================================

  const handleClearFilters = () => {
    setSearch("");
    setCategory("All");
    setRating("All");
  };

  return (
    <div className="providers-page">

      {/* ================= NAVBAR ================= */}

      <header className="providers-navbar">

        <div className="providers-nav-container">

          <div
            className="providers-brand"
            onClick={() => navigate("/")}
          >
            <div className="providers-brand-mark">
              S
            </div>

            <span>
              SmartServe
            </span>
          </div>

          <nav className="providers-nav-menu">

            <button
              onClick={() => navigate("/")}
            >
              Home
            </button>

            <button
              onClick={() => navigate("/services")}
            >
              Services
            </button>

            <button className="active">
              Nearby
            </button>

            <button
              onClick={() => navigate("/")}
            >
              About
            </button>

          </nav>

          <button
            className="providers-login"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

        </div>

      </header>

      {/* ================= PAGE HEADER ================= */}

      <section className="providers-hero">

        <div className="providers-hero-content">

          <span className="providers-label">
            FIND PROFESSIONALS
          </span>

          <h1>
            {displayService}
            <span> services near you.</span>
          </h1>

          <p>
            Find trusted professionals near{" "}
            <strong>
              📍 {displayLocation}
            </strong>
          </p>

          {/* SEARCH */}

          <div className="providers-search">

            <span>
              🔍
            </span>

            <input
              type="text"
              placeholder="Search providers or services..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

        </div>

      </section>

      {/* ================= LOCATION INFO ================= */}

      {searchLocation && (
        <div className="providers-location-info">

          <span>
            📍
          </span>

          <div>
            <strong>
              Searching near {searchLocation}
            </strong>

            <p>
              Showing service providers available in
              your selected area.
            </p>
          </div>

        </div>
      )}

      {/* ================= MAIN ================= */}

      <main className="providers-main">

        {/* FILTERS */}

        <div className="providers-toolbar">

          <div className="category-filter">

            <label>
              Service
            </label>

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
            >

              {categories.map((item) => (

                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>

              ))}

            </select>

          </div>

          <div className="category-filter">

            <label>
              Rating
            </label>

            <select
              value={rating}
              onChange={(e) =>
                setRating(e.target.value)
              }
            >

              <option value="All">
                All Ratings
              </option>

              <option value="4.5">
                4.5+ ⭐
              </option>

              <option value="4.7">
                4.7+ ⭐
              </option>

              <option value="4.8">
                4.8+ ⭐
              </option>

            </select>

          </div>

          <div className="results-count">

            <strong>
              {filteredProviders.length}
            </strong>

            professionals found

          </div>

        </div>

        {/* ================= PROVIDER GRID ================= */}

        <div className="providers-grid">

          {filteredProviders.length > 0 ? (

            filteredProviders.map((provider) => (

              <div
                className="professional-card"
                key={provider.id}
              >

                {/* TOP */}

                <div className="professional-top">

                  <div className="professional-avatar">
                    {provider.icon}
                  </div>

                  {provider.verified && (
                    <span className="verified-tag">
                      ✓ Verified
                    </span>
                  )}

                </div>

                {/* CONTENT */}

                <div className="professional-content">

                  <span className="professional-service">
                    {provider.service}
                  </span>

                  <h3>
                    {provider.name}
                  </h3>

                  <div className="professional-rating">

                    <span>
                      ⭐ {provider.rating}
                    </span>

                    <span>
                      ({provider.reviews} reviews)
                    </span>

                  </div>

                  {/* LOCATION */}

                  <div className="professional-location">

                    📍
                    <strong>
                      {provider.location}
                    </strong>

                  </div>

                  <div className="professional-details">

                    <div>
                      📏 {provider.distance}
                    </div>

                    <div>
                      💼 {provider.experience}
                    </div>

                    <div>
                      💰 {provider.price}
                    </div>

                  </div>

                </div>

                {/* BOTTOM */}

                <div className="professional-bottom">

                  <span
                    className={
                      provider.available
                        ? "available"
                        : "not-available"
                    }
                  >

                    <span></span>

                    {provider.available
                      ? "Available today"
                      : "Currently unavailable"}

                  </span>

                  <button
                    onClick={() =>
                      handleViewProfile(provider)
                    }
                  >
                    View Profile →
                  </button>

                </div>

              </div>

            ))

          ) : (

            <div className="no-providers">

              <div>
                📍
              </div>

              <h3>
                No professionals found
              </h3>

              <p>
                No service providers are currently
                available in <strong>{searchLocation}</strong>.
              </p>

              <button
                onClick={handleClearFilters}
              >
                Clear Filters
              </button>

              <button
                onClick={() => navigate("/services")}
              >
                Browse All Services
              </button>

            </div>

          )}

        </div>

      </main>

      {/* ================= FOOTER ================= */}

      <footer className="providers-footer">

        <div className="providers-footer-content">

          <div>

            <div className="providers-footer-brand">

              <div className="providers-brand-mark">
                S
              </div>

              <span>
                SmartServe
              </span>

            </div>

            <p>
              Discover trusted local professionals
              and book services easily.
            </p>

          </div>

          <div>

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

            <button>
              Nearby
            </button>

          </div>

          <div>

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

          </div>

        </div>

        <div className="providers-footer-bottom">
          © 2026 SmartServe. All rights reserved.
        </div>

      </footer>

    </div>
  );
}

export default Providers;