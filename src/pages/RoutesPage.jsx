import Header from "../components/common/Header";

const RoutesPage = () => {
  const zones = [
    {
      name: "North India",
      color: "#fff4ed",
      ico: "🏔️",
      routes: [
        "Delhi → Chandigarh",
        "Delhi → Jaipur",
        "Delhi → Lucknow",
        "Delhi → Agra",
        "Chandigarh → Amritsar",
        "Ludhiana → Delhi",
        "Jaipur → Jodhpur",
        "Dehradun → Delhi",
      ],
    },
    {
      name: "South India",
      color: "#f0fdf4",
      ico: "🌴",
      routes: [
        "Bangalore → Chennai",
        "Chennai → Hyderabad",
        "Kochi → Bangalore",
        "Coimbatore → Chennai",
        "Hyderabad → Vijaywada",
        "Bangalore → Kochi",
        "Chennai → Madurai",
        "Mysuru → Bangalore",
      ],
    },
    {
      name: "West India",
      color: "#eff6ff",
      ico: "🏖️",
      routes: [
        "Mumbai → Pune",
        "Mumbai → Ahmedabad",
        "Surat → Mumbai",
        "Ahmedabad → Rajkot",
        "Pune → Nashik",
        "Nagpur → Mumbai",
        "Indore → Mumbai",
        "Vadodara → Surat",
      ],
    },
    {
      name: "East India",
      color: "#f5f3ff",
      ico: "🌿",
      routes: [
        "Kolkata → Patna",
        "Kolkata → Bhubaneswar",
        "Patna → Varanasi",
        "Guwahati → Kolkata",
        "Ranchi → Kolkata",
        "Bhubaneswar → Visakhapatnam",
        "Siliguri → Kolkata",
        "Dhanbad → Kolkata",
      ],
    },
    {
      name: "Central India",
      color: "#fef3c7",
      ico: "🌾",
      routes: [
        "Bhopal → Indore",
        "Raipur → Nagpur",
        "Jabalpur → Bhopal",
        "Gwalior → Bhopal",
        "Bilaspur → Raipur",
        "Indore → Raipur",
        "Bhopal → Jabalpur",
        "Nagpur → Raipur",
      ],
    },
    {
      name: "Cross-Country",
      color: "#fff1f2",
      ico: "🗺️",
      routes: [
        "Delhi → Mumbai",
        "Mumbai → Bangalore",
        "Chennai → Delhi",
        "Kolkata → Mumbai",
        "Delhi → Bangalore",
        "Ahmedabad → Kolkata",
        "Mumbai → Hyderabad",
        "Delhi → Kolkata",
      ],
    },
  ];
  return (
    <div className="page">
      <div style={{ background: "var(--navy)", padding: "64px 5% 56px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <span className="sec-tag">Coverage Map</span>
          <h1 className="sec-title-white">
            All <span style={{ color: "var(--orange)" }}>Routes</span>
          </h1>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 16,
              marginTop: 16,
              maxWidth: 520,
            }}
          >
            500+ cities. 28 states. Every route covered — North, South, East,
            West & Central India.
          </p>
        </div>
      </div>
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
          {zones.map((z, i) => (
            <div
              key={i}
              className="card"
              style={{
                padding: "28px 24px",
                animation: `scaleIn 0.5s ease ${i * 0.07}s both`,
              }}
            >
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
                    background: z.color,
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                  }}
                >
                  {z.ico}
                </div>
                <h3
                  style={{
                    fontFamily: "'Rajdhani',sans-serif",
                    fontWeight: 700,
                    fontSize: 20,
                    color: "var(--navy)",
                    textTransform: "uppercase",
                  }}
                >
                  {z.name}
                </h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {z.routes.map((r) => (
                  <div
                    key={r}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "7px 0",
                      borderBottom: "1px solid var(--light-gray)",
                      fontSize: 14,
                      fontFamily: "'Exo 2',sans-serif",
                    }}
                  >
                    <span style={{ color: "var(--orange)", fontSize: 10 }}>
                      ◆
                    </span>{" "}
                    {r}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoutesPage;
