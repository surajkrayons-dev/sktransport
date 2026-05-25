import Header from "../components/common/Header";

const ServicesPage = ({ setPage }) => {
  const services = [
    {
      ico: "🚛",
      title: "Full Truck Load",
      sub: "FTL",
      color: "#fff4ed",
      desc: "Book an entire truck exclusively for your cargo. Ideal for large-volume shipments requiring complete truck utilization across India. Fastest transit time, zero sharing.",
      features: [
        "Dedicated truck",
        "Direct delivery",
        "Best for 10+ tons",
        "Priority handling",
      ],
    },
    {
      ico: "📦",
      title: "Part Truck Load",
      sub: "LTL",
      color: "#f0fdf4",
      desc: "Pay only for the space you use. Your cargo shares the truck with other consignments. Most economical solution for small and medium shipments.",
      features: [
        "Cost-effective",
        "Perfect for 1–9 tons",
        "Flexible scheduling",
        "Same safety standards",
      ],
    },
    {
      ico: "⚡",
      title: "Express Delivery",
      sub: "EXPRESS",
      color: "#fef3c7",
      desc: "Time-critical shipments handled with top priority. Guaranteed 24–48 hour delivery to most major cities. Dedicated express fleet always on standby.",
      features: [
        "24–48 hr delivery",
        "Priority loading",
        "Real-time updates",
        "Premium handling",
      ],
    },
    {
      ico: "❄️",
      title: "Cold Chain Logistics",
      sub: "REEFER",
      color: "#eff6ff",
      desc: "Temperature-controlled transport for perishables, pharmaceuticals, dairy, frozen food and chemicals. Maintains precise temperature throughout transit.",
      features: [
        "2°C to 25°C range",
        "FSSAI compliant",
        "Pharma-grade",
        "Zero break in chain",
      ],
    },
    {
      ico: "🏗️",
      title: "Heavy & ODC Cargo",
      sub: "ODC / OWC",
      color: "#f5f3ff",
      desc: "Specialists in over-dimensional and overweight cargo. Machinery, equipment, steel structures, windmill blades — we handle it all with proper permits.",
      features: [
        "All permits arranged",
        "Pilot vehicle escort",
        "Route survey done",
        "Factory to factory",
      ],
    },
    {
      ico: "🔒",
      title: "Secured Transport",
      sub: "HIGH-VALUE",
      color: "#fff1f2",
      desc: "For high-value, sensitive or confidential cargo. Sealed containers, GPS tracking, insurance cover, and verified drivers with security clearance.",
      features: [
        "Sealed containers",
        "Full insurance",
        "Verified drivers",
        "Tamper-proof sealing",
      ],
    },
  ];
  return (
    <div className="page">
      {/* Hero */}
      <div style={{ background: "var(--navy)", padding: "64px 5% 56px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <span className="sec-tag">What We Offer</span>
          <h1 className="sec-title-white">
            Our <span style={{ color: "var(--orange)" }}>Services</span>
          </h1>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 16,
              marginTop: 16,
              maxWidth: 520,
              lineHeight: 1.7,
            }}
          >
            Six categories of logistics solutions built for India's diverse
            transport needs — from single boxes to full factory moves.
          </p>
        </div>
      </div>
      {/* Cards */}
      <div style={{ padding: "72px 5%", background: "var(--cream)" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 28,
          }}
          className="three-col"
        >
          {services.map((s, i) => (
            <div
              key={i}
              className="card"
              style={{
                padding: "32px 26px",
                animation: `slideUp 0.55s ease ${i * 0.07}s both`,
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  background: s.color,
                  borderRadius: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 32,
                  marginBottom: 20,
                  animation: `float 3s ease-in-out ${i * 0.5}s infinite`,
                }}
              >
                {s.ico}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 12,
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Rajdhani',sans-serif",
                    fontWeight: 700,
                    fontSize: 22,
                    color: "var(--navy)",
                    textTransform: "uppercase",
                  }}
                >
                  {s.title}
                </h3>
                <span
                  style={{
                    background: "var(--orange-light)",
                    color: "#c2410c",
                    fontFamily: "'Rajdhani',sans-serif",
                    fontWeight: 700,
                    fontSize: 11,
                    letterSpacing: 1.5,
                    padding: "3px 10px",
                    borderRadius: 20,
                    whiteSpace: "nowrap",
                  }}
                >
                  {s.sub}
                </span>
              </div>
              <p
                style={{
                  color: "var(--gray)",
                  fontSize: 14,
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}
              >
                {s.desc}
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 8,
                }}
              >
                {s.features.map((f) => (
                  <div
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 13,
                      color: "#444",
                    }}
                  >
                    <span style={{ color: "var(--orange)", fontSize: 11 }}>
                      ◆
                    </span>{" "}
                    {f}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Process */}
      <div style={{ padding: "64px 5%", background: "#fff" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            textAlign: "center",
            marginBottom: 52,
          }}
        >
          <span className="sec-tag">How It Works</span>
          <h2 className="sec-title">4 Simple Steps</h2>
        </div>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 24,
          }}
          className="four-col"
        >
          {[
            [
              "📝",
              "Get Quote",
              "Tell us from, to, weight & type. Instant rate in 2 minutes.",
            ],
            [
              "✅",
              "Confirm Booking",
              "Approve the rate. Zero advance needed. Truck confirmed instantly.",
            ],
            [
              "🚛",
              "Pickup Scheduled",
              "Truck arrives at your location within the agreed time window.",
            ],
            [
              "📍",
              "Track & Deliver",
              "Live GPS tracking until your cargo reaches its destination safely.",
            ],
          ].map(([ico, title, desc], i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                padding: "28px 20px",
                background: "var(--cream)",
                borderRadius: 14,
                position: "relative",
                animation: `slideUp 0.5s ease ${i * 0.1}s both`,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  background: "var(--navy)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                  margin: "0 auto 16px",
                }}
              >
                {ico}
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 28,
                  right: -12,
                  width: 24,
                  height: 24,
                  background: "var(--orange)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontFamily: "'Rajdhani',sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                }}
              >
                {i + 1}
              </div>
              <h4
                style={{
                  fontFamily: "'Rajdhani',sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                  color: "var(--navy)",
                  textTransform: "uppercase",
                  marginBottom: 8,
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
      </div>
    </div>
  );
};

export default ServicesPage;
