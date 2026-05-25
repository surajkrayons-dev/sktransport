import Header from "../components/common/Header";

const AboutPage = ({ setPage }) => (
  <div className="page">
    <div style={{ background: "var(--navy)", padding: "64px 5% 56px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <span className="sec-tag">Our Story</span>
        <h1 className="sec-title-white">
          About <span style={{ color: "var(--orange)" }}>SK Transport</span>
        </h1>
      </div>
    </div>
    <div style={{ padding: "72px 5%", background: "var(--cream)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            marginBottom: 72,
          }}
          className="two-col"
        >
          <div style={{ animation: "slideLeft 0.7s ease" }}>
            <span className="sec-tag">Who We Are</span>
            <h2 className="sec-title" style={{ marginBottom: 24 }}>
              Built for India's
              <br />
              <span style={{ color: "var(--orange)" }}>
                Logistics Challenge
              </span>
            </h2>
            <p
              style={{
                color: "var(--gray)",
                fontSize: 16,
                lineHeight: 1.8,
                marginBottom: 20,
              }}
            >
              SK Transport Services was founded with a single mission: make
              truck booking as simple as booking a cab — for every business in
              India, from a small trader in Jaipur to a large manufacturer in
              Pune.
            </p>
            <p
              style={{
                color: "var(--gray)",
                fontSize: 16,
                lineHeight: 1.8,
                marginBottom: 20,
              }}
            >
              With 15,000+ verified trucks across our network and operations in
              500+ cities, we handle everything from tiny part loads to massive
              over-dimensional cargo.
            </p>
            <p style={{ color: "var(--gray)", fontSize: 16, lineHeight: 1.8 }}>
              Every driver is background-verified. Every truck is GPS-tracked.
              Every shipment is insured. That's the SK Promise.
            </p>
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
          >
            {[
              ["15,000+", "Trucks in Network"],
              ["10 Yrs", "Industry Experience"],
              ["10,000+", "Happy Clients"],
              ["99.2%", "On-Time Delivery"],
            ].map(([n, l], i) => (
              <div
                key={i}
                style={{
                  background: i % 2 === 0 ? "var(--navy)" : "#fff",
                  border: "1px solid var(--light-gray)",
                  borderRadius: 14,
                  padding: "28px 20px",
                  textAlign: "center",
                  animation: `scaleIn 0.5s ease ${i * 0.1}s both`,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Rajdhani',sans-serif",
                    fontWeight: 700,
                    fontSize: 40,
                    color: "var(--orange)",
                    lineHeight: 1,
                  }}
                >
                  {n}
                </div>
                <div
                  style={{
                    fontFamily: "'Rajdhani',sans-serif",
                    fontWeight: 600,
                    fontSize: 14,
                    color: i % 2 === 0 ? "var(--text-muted)" : "var(--gray)",
                    textTransform: "uppercase",
                    letterSpacing: 1.5,
                    marginTop: 8,
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Values */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="sec-tag">Our Values</span>
          <h2 className="sec-title">What Drives Us</h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 24,
          }}
          className="four-col"
        >
          {[
            [
              "🎯",
              "Reliability",
              "We show up on time, every time. No excuses.",
            ],
            ["💡", "Transparency", "You know exactly what you pay and why."],
            ["🤝", "Trust", "Verified trucks, insured cargo, vetted drivers."],
            ["🚀", "Innovation", "Technology-first approach to logistics."],
          ].map(([ico, title, desc], i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                border: "1px solid var(--light-gray)",
                borderRadius: 14,
                padding: "28px 22px",
                textAlign: "center",
                animation: `slideUp 0.5s ease ${i * 0.08}s both`,
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 16 }}>{ico}</div>
              <h4
                style={{
                  fontFamily: "'Rajdhani',sans-serif",
                  fontWeight: 700,
                  fontSize: 20,
                  color: "var(--navy)",
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                {title}
              </h4>
              <p
                style={{ color: "var(--gray)", fontSize: 14, lineHeight: 1.65 }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 52 }}>
          <button
            className="btn-orange"
            onClick={() => {
              setPage("contact");
              window.scrollTo(0, 0);
            }}
          >
            Partner with Us →
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
