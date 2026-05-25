import { useState } from "react";
import { useEffect } from "react";

import Ticker from "./Ticker";
const Header = ({ page, setPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = [
    { label: "Home", key: "home" },
    { label: "Services", key: "services" },
    { label: "Routes", key: "routes" },
    { label: "About Us", key: "about" },
    { label: "Contact", key: "contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (key) => {
    setPage(key);
    setMobileOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Ticker />
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 999,
          background: scrolled ? "rgba(13,27,62,0.98)" : "var(--navy)",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: "1px solid rgba(249,115,22,0.18)",
          transition: "all 0.3s",
          animation: "slideDown 0.5s ease",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            background: "rgba(0,0,0,0.25)",
            padding: "5px 5%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: 24 }}>
            {["📞 +91 93192 20315", "📧 sktransportservices75@gmail.com"].map((t) => (
              <span
                key={t}
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.65)",
                  fontFamily: "'Exo 2',sans-serif",
                  letterSpacing: 0.5,
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            {["24/7 Support"].map((t) => (
              <span
                key={t}
                style={{
                  fontSize: 12,
                  color: "var(--orange)",
                  fontFamily: "'Rajdhani',sans-serif",
                  fontWeight: 600,
                  letterSpacing: 1,
                }}
              >
                ✓ {t}
              </span>
            ))}
          </div>
        </div>
        {/* Main nav */}
        <div
          style={{
            padding: "0 5%",
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 68,
          }}
        >
          {/* Logo */}
          <button
            onClick={() => go("home")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                background: "var(--orange)",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
              }}
            >
              🚛
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Rajdhani',sans-serif",
                  fontWeight: 700,
                  fontSize: 22,
                  color: "#fff",
                  letterSpacing: 1,
                  lineHeight: 1,
                }}
              >
                SK <span style={{ color: "var(--orange)" }}>TRANSPORT</span>
              </div>
              <div
                style={{
                  fontFamily: "'Exo 2',sans-serif",
                  fontSize: 10,
                  color: "var(--text-muted)",
                  letterSpacing: 2.5,
                  textTransform: "uppercase",
                }}
              >
                Services — Pan India
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav
            style={{ display: "flex", gap: 4, alignItems: "center" }}
            className="hide-mobile"
            id="desknav"
          >
            {navLinks.map((l) => (
              <button
                key={l.key}
                className={`nav-item ${page === l.key ? "active" : ""}`}
                onClick={() => go(l.key)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {l.label}
              </button>
            ))}
            <button
              className="btn-orange"
              onClick={() => go("contact")}
              style={{ marginLeft: 12 }}
            >
              Book Now
            </button>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="show-mobile"
            style={{
              display: "none",
              background: "none",
              border: "1.5px solid rgba(255,255,255,0.2)",
              borderRadius: 8,
              color: "#fff",
              fontSize: 22,
              cursor: "pointer",
              width: 42,
              height: 42,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            style={{
              background: "var(--navy2)",
              borderTop: "1px solid rgba(249,115,22,0.15)",
              padding: "16px 5% 24px",
              animation: "slideDown 0.2s ease",
            }}
          >
            {navLinks.map((l) => (
              <button
                key={l.key}
                onClick={() => go(l.key)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  fontFamily: "'Rajdhani',sans-serif",
                  fontWeight: 600,
                  fontSize: 17,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  color:
                    page === l.key ? "var(--orange)" : "rgba(255,255,255,0.8)",
                  padding: "13px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  cursor: "pointer",
                }}
              >
                {l.label}
              </button>
            ))}
            <button
              className="btn-orange"
              onClick={() => go("contact")}
              style={{ marginTop: 20, width: "100%", justifyContent: "center" }}
            >
              Book a Truck Now
            </button>
          </div>
        )}
      </header>
      <style>{`#desknav { display:flex; } @media(max-width:900px){#desknav{display:none!important}}`}</style>
    </>
  );
};

export default Header;
