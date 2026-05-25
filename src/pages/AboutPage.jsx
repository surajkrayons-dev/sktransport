const AboutPage = ({ setPage }) => {
  const whyUs = [
    ["🚛", "Truck Booking", "Quick booking for part-load and full-load transport across India — confirmed within the hour."],
    ["📦", "Safe Loading", "Goods handled carefully during loading, transit & unloading for complete cargo safety."],
    ["📍", "Doorstep Delivery", "From pickup to final destination — we deliver exactly where our clients need it."],
    ["🛣️", "All India Routes", "Transport network across 500+ cities and all 28 states with reliable coverage."],
    ["⏱️", "On-Time Service", "We value your deadlines and work hard to transport goods without unnecessary delays."],
    ["🤝", "Trusted Partnership", "Long-term relationships built on transparency, commitment, and trust."],
    ["📞", "Customer Support", "Our team stays connected throughout the process for smooth coordination & updates."],
    ["🏆", "Since 1990", "Decades of experience in transport — we understand logistics challenges better than most."],
  ];

  const stats = [
    ["15,000+", "Trucks in Network"],
    ["35 Yrs", "Industry Experience"],
    ["10,000+", "Happy Clients"],
    ["99.2%", "On-Time Delivery"],
  ];

  const values = [
    ["🎯", "Reliability", "We show up on time, every time. No excuses, no delays."],
    ["💡", "Transparency", "You know exactly what you pay for and why. Zero hidden charges."],
    ["🤝", "Trust", "Verified trucks, insured cargo, background-checked drivers."],
    ["🚀", "Innovation", "Technology-first approach — GPS tracking, digital billing, instant booking."],
  ];

  const team = [
    ["👨‍💼", "Suresh Kumar", "Founder & CEO", "35+ years in Indian logistics. Built SK from 1 truck to 15,000+."],
    ["👨‍💻", "Raj Sharma", "Head of Operations", "Manages daily dispatch, routing, and fleet coordination."],
    ["👩‍💼", "Priya Singh", "Customer Relations", "Ensures every client gets the support they deserve, 24/7."],
  ];

  return (
    <div className="page">

      {/* ── HERO BANNER ── */}
      <div style={{
        background: "linear-gradient(125deg, #0d1b3e 0%, #162040 60%, #0d1b3e 100%)",
        padding: "80px 5% 72px", position: "relative", overflow: "hidden",
      }}>
        {/* Grid bg */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        {/* Orange glow */}
        <div style={{ position: "absolute", right: "-5%", top: "0%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(249,115,22,0.08) 0%,transparent 65%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
          <span style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 12, color: "var(--orange)", letterSpacing: 3, textTransform: "uppercase", display: "block", marginBottom: 14 }}>Our Story</span>
          <h1 style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: "clamp(40px,6vw,72px)", color: "#fff", textTransform: "uppercase", lineHeight: 1, marginBottom: 20 }}>
            About <span style={{ color: "var(--orange)" }}>SK Transport</span>
          </h1>
          <p style={{ color: "#8a9ab5", fontSize: 17, lineHeight: 1.75, maxWidth: 580 }}>
            Since 1990, SK Transport Services has been India's most trusted truck network — connecting businesses, factories, and traders across every corner of the country.
          </p>

          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 28 }}>
            <button onClick={() => { window.scrollTo(0,0); }} style={{ background:"none", border:"none", color:"var(--text-muted)", fontSize:13, cursor:"pointer", fontFamily:"'Exo 2',sans-serif", padding:0 }}>Home</button>
            <span style={{ color:"var(--text-muted)", fontSize:12 }}>›</span>
            <span style={{ color:"var(--orange)", fontSize:13, fontFamily:"'Exo 2',sans-serif" }}>About Us</span>
          </div>
        </div>
      </div>

      {/* ── STORY SECTION ── */}
      <section style={{ padding: "80px 5%", background: "var(--cream)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }} className="two-col">
          {/* Left text */}
          <div style={{ animation: "slideLeft 0.7s ease" }}>
            <span style={{ fontFamily:"'Rajdhani',sans-serif", fontWeight:700, fontSize:12, color:"var(--orange)", letterSpacing:3, textTransform:"uppercase", display:"block", marginBottom:12 }}>Who We Are</span>
            <h2 style={{ fontFamily:"'Rajdhani',sans-serif", fontWeight:700, fontSize:"clamp(30px,4vw,48px)", color:"var(--navy)", textTransform:"uppercase", lineHeight:1.05, marginBottom:28 }}>
              Built for India's<br /><span style={{ color:"var(--orange)" }}>Logistics Challenge</span>
            </h2>
            <p style={{ color:"var(--gray)", fontSize:16, lineHeight:1.85, marginBottom:18 }}>
              SK Transport Services was founded in <strong style={{ color:"var(--navy)" }}>1990</strong> with a single mission — make truck booking simple and reliable for every business in India, from a small trader in Jaipur to a large manufacturer in Pune.
            </p>
            <p style={{ color:"var(--gray)", fontSize:16, lineHeight:1.85, marginBottom:18 }}>
              With <strong style={{ color:"var(--navy)" }}>15,000+ verified trucks</strong> across our network and operations in 500+ cities, we handle everything from tiny part loads to massive over-dimensional cargo every single day.
            </p>
            <p style={{ color:"var(--gray)", fontSize:16, lineHeight:1.85 }}>
              Every driver is background-verified. Every truck is GPS-tracked. Every shipment is insured. <strong style={{ color:"var(--orange)" }}>That's the SK Promise.</strong>
            </p>
            <button className="btn-orange" onClick={() => { setPage("contact"); window.scrollTo(0,0); }} style={{ marginTop: 36 }}>
              Partner With Us →
            </button>
          </div>

          {/* Right — Stats grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, animation: "slideRight 0.7s ease" }}>
            {stats.map(([n, l], i) => (
              <div key={i} style={{
                background: i % 2 === 0 ? "var(--navy)" : "#fff",
                border: i % 2 === 0 ? "none" : "1px solid var(--light-gray)",
                borderRadius: 16, padding: "32px 24px", textAlign: "center",
                animation: `scaleIn 0.5s ease ${i * 0.1}s both`,
                boxShadow: i % 2 !== 0 ? "0 4px 20px rgba(0,0,0,0.05)" : "none",
              }}>
                <div style={{ fontFamily:"'Rajdhani',sans-serif", fontWeight:700, fontSize:44, color:"var(--orange)", lineHeight:1 }}>{n}</div>
                <div style={{ fontFamily:"'Rajdhani',sans-serif", fontWeight:600, fontSize:13, color: i % 2 === 0 ? "var(--text-muted)" : "var(--gray)", textTransform:"uppercase", letterSpacing:1.5, marginTop:8 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section style={{ padding: "80px 5%", background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ fontFamily:"'Rajdhani',sans-serif", fontWeight:700, fontSize:12, color:"var(--orange)", letterSpacing:3, textTransform:"uppercase", display:"block", marginBottom:12 }}>Why Choose Us</span>
            <h2 style={{ fontFamily:"'Rajdhani',sans-serif", fontWeight:700, fontSize:"clamp(30px,4vw,50px)", color:"var(--navy)", textTransform:"uppercase", lineHeight:1.05 }}>
              Transport Solutions<br /><span style={{ color:"var(--orange)" }}>You Can Trust</span>
            </h2>
            <p style={{ color:"var(--gray)", fontSize:16, maxWidth:520, margin:"16px auto 0", lineHeight:1.7 }}>
              Eight reasons why 10,000+ businesses across India choose SK Transport for their logistics needs.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }} className="four-col">
            {whyUs.map(([ico, title, desc], i) => (
              <div key={i} style={{
                background: "var(--cream)",
                border: "1px solid var(--light-gray)",
                borderRadius: 16, padding: "28px 22px",
                transition: "all 0.3s",
                animation: `slideUp 0.5s ease ${i * 0.07}s both`,
                cursor: "default",
              }}
                onMouseOver={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.1)"; e.currentTarget.style.borderColor = "var(--orange)"; e.currentTarget.style.background = "#fff"; }}
                onMouseOut={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; e.currentTarget.style.borderColor = "var(--light-gray)"; e.currentTarget.style.background = "var(--cream)"; }}
              >
                {/* Icon bubble */}
                <div style={{ width:56, height:56, background:"#fff", border:"1px solid var(--light-gray)", borderRadius:14, display:"flex", alignItems:"center", justifyContent:"center", fontSize:26, marginBottom:18, boxShadow:"0 4px 12px rgba(0,0,0,0.06)" }}>
                  {ico}
                </div>
                <h4 style={{ fontFamily:"'Rajdhani',sans-serif", fontWeight:700, fontSize:19, color:"var(--navy)", textTransform:"uppercase", marginBottom:10 }}>{title}</h4>
                <p style={{ color:"var(--gray)", fontSize:14, lineHeight:1.75 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ padding: "80px 5%", background: "var(--navy)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ fontFamily:"'Rajdhani',sans-serif", fontWeight:700, fontSize:12, color:"var(--orange)", letterSpacing:3, textTransform:"uppercase", display:"block", marginBottom:12 }}>Our Values</span>
            <h2 style={{ fontFamily:"'Rajdhani',sans-serif", fontWeight:700, fontSize:"clamp(30px,4vw,50px)", color:"#fff", textTransform:"uppercase", lineHeight:1.05 }}>
              What <span style={{ color:"var(--orange)" }}>Drives Us</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }} className="four-col">
            {values.map(([ico, title, desc], i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16, padding: "36px 24px", textAlign: "center",
                transition: "all 0.3s",
                animation: `slideUp 0.5s ease ${i * 0.1}s both`,
              }}
                onMouseOver={e => { e.currentTarget.style.background = "rgba(249,115,22,0.1)"; e.currentTarget.style.borderColor = "rgba(249,115,22,0.35)"; e.currentTarget.style.transform = "translateY(-6px)"; }}
                onMouseOut={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = ""; }}
              >
                <div style={{ width:64, height:64, background:"rgba(249,115,22,0.12)", border:"1px solid rgba(249,115,22,0.25)", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:28, margin:"0 auto 20px" }}>{ico}</div>
                <h4 style={{ fontFamily:"'Rajdhani',sans-serif", fontWeight:700, fontSize:20, color:"#fff", textTransform:"uppercase", marginBottom:12, letterSpacing:1 }}>{title}</h4>
                <p style={{ color:"var(--text-muted)", fontSize:14, lineHeight:1.75 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;