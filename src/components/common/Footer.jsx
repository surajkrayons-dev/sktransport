const Footer = ({ setPage }) => {
  const go = (key) => {
    setPage(key);
    window.scrollTo(0, 0);
  };
  return (
    <footer
      style={{
        background: "var(--navy)",
        color: "var(--text-muted)",
        marginTop: 0,
      }}
    >
      {/* CTA Band */}
      <div style={{ background: "var(--orange)", padding: "48px 5%" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Rajdhani',sans-serif",
                fontWeight: 700,
                fontSize: "clamp(24px,3.5vw,38px)",
                color: "#fff",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              Ready to Ship Across India?
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: 15,
                marginTop: 8,
              }}
            >
              Call us now — trucks available within 2 hours in most cities.
            </div>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="tel:+919876543210" className="btn-white">
              📞 Call Now
            </a>
            <button
              className="btn-outline"
              onClick={() => go("contact")}
              style={{ borderColor: "#fff", color: "#fff" }}
            >
              Book Online →
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div style={{ padding: "64px 5% 0", maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2.2fr 1fr 1fr 1.4fr",
            gap: 48,
            paddingBottom: 48,
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
          className="four-col"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  background: "var(--orange)",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                }}
              >
                🚛
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Rajdhani',sans-serif",
                    fontWeight: 700,
                    fontSize: 24,
                    color: "#fff",
                    letterSpacing: 1,
                  }}
                >
                  SK <span style={{ color: "var(--orange)" }}>TRANSPORT</span>
                </div>
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: 3,
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                  }}
                >
                  Services — Pan India
                </div>
              </div>
            </div>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.8,
                maxWidth: 300,
                marginBottom: 24,
              }}
            >
              Your trusted logistics partner for part load and full load
              transport across all 28 states of India. 15,000+ verified trucks.
              500+ cities connected.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {["fb", "tw", "ig", "in"].map((s) => (
                <div
                  key={s}
                  style={{
                    width: 36,
                    height: 36,
                    background: "rgba(255,255,255,0.07)",
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    cursor: "pointer",
                    transition: "all 0.2s",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {s === "fb"
                    ? "f"
                    : s === "tw"
                      ? "𝕏"
                      : s === "ig"
                        ? "📷"
                        : "in"}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4
              style={{
                fontFamily: "'Rajdhani',sans-serif",
                fontWeight: 700,
                fontSize: 16,
                color: "#fff",
                textTransform: "uppercase",
                letterSpacing: 1.5,
                marginBottom: 20,
              }}
            >
              Quick Links
            </h4>
            {[
              ["Home", "home"],
              ["Services", "services"],
              ["Routes", "routes"],
              ["About Us", "about"],
              ["Contact", "contact"],
            ].map(([label, key]) => (
              <div key={key} style={{ marginBottom: 10 }}>
                <button
                  onClick={() => go(key)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--text-muted)",
                    fontSize: 14,
                    cursor: "pointer",
                    fontFamily: "'Exo 2',sans-serif",
                    transition: "color 0.2s",
                    padding: 0,
                    textAlign: "left",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "var(--orange)")}
                  onMouseOut={(e) =>
                    (e.target.style.color = "var(--text-muted)")
                  }
                >
                  → {label}
                </button>
              </div>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontFamily: "'Rajdhani',sans-serif",
                fontWeight: 700,
                fontSize: 16,
                color: "#fff",
                textTransform: "uppercase",
                letterSpacing: 1.5,
                marginBottom: 20,
              }}
            >
              Services
            </h4>
            {[
              "Full Load (FTL)",
              "Part Load (LTL)",
              "Express Delivery",
              "Cold Chain",
              "ODC / Heavy Cargo",
              "Secured Transport",
              "Container Truck",
            ].map((s) => (
              <div
                key={s}
                style={{
                  marginBottom: 9,
                  fontSize: 14,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span style={{ color: "var(--orange)", fontSize: 10 }}>◆</span>{" "}
                {s}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "'Rajdhani',sans-serif",
                fontWeight: 700,
                fontSize: 16,
                color: "#fff",
                textTransform: "uppercase",
                letterSpacing: 1.5,
                marginBottom: 20,
              }}
            >
              Contact Us
            </h4>
            {[
              ["📞", "Phone", "+91 98765 43210"],
              ["📱", "WhatsApp", "+91 98765 43210"],
              ["📧", "Email", "info@sktransport.in"],
              ["🕐", "Hours", "24/7 Available"],
              ["📍", "Base", "Delhi, India"],
            ].map(([ico, label, val]) => (
              <div
                key={label}
                style={{ display: "flex", gap: 10, marginBottom: 14 }}
              >
                <span style={{ fontSize: 16 }}>{ico}</span>
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      color: "rgba(255,255,255,0.35)",
                      marginBottom: 2,
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{ fontSize: 14, color: "rgba(255,255,255,0.75)" }}
                  >
                    {val}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            padding: "22px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 13 }}>
            © 2025 SK Transport Services. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Service", "GST: 07XXXXX1234X1Z5"].map(
              (t) => (
                <span key={t} style={{ fontSize: 12, cursor: "pointer" }}>
                  {t}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;