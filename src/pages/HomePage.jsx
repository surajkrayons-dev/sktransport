import { useState, useEffect, useRef } from "react";

const HomePage = ({ setPage }) => {
  const [statsVis, setStatsVis] = useState(false);
  const statsRef = useRef(null);
  const [truckAnim, setTruckAnim] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setTruckAnim(true), 200);
    setTimeout(() => setHeroVisible(true), 100);
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStatsVis(true); },
      { threshold: 0.2 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const go = (key) => { setPage(key); window.scrollTo(0, 0); };

  const services = [
    { ico: "🚛", title: "Full Load", sub: "FTL", desc: "Dedicated truck for your entire cargo. Best for large shipments." },
    { ico: "📦", title: "Part Load", sub: "LTL", desc: "Share space, pay only for what you use. Cost-effective." },
    { ico: "⚡", title: "Express", sub: "24-48 HRS", desc: "Priority shipments with fastest possible turnaround time." },
    { ico: "❄️", title: "Cold Chain", sub: "REEFER", desc: "Temperature-controlled for food, pharma & perishables." },
    { ico: "🏗️", title: "Heavy / ODC", sub: "OVERSIZED", desc: "Over-dimensional cargo with permits & pilot escorts." },
    { ico: "🔒", title: "Secured", sub: "INSURED", desc: "High-value cargo with sealed containers & full insurance." },
  ];

  const stats = [
    { n: "15,000+", l: "Trucks Network" },
    { n: "28", l: "States Covered" },
    { n: "500+", l: "Cities Connected" },
    { n: "99.2%", l: "On-Time Rate" },
  ];

  return (
    <div className="page">
      {/* ── HERO ── */}
      <section style={{
        background: "linear-gradient(125deg, #0d1b3e 0%, #162040 55%, #0d1b3e 100%)",
        minHeight: "92vh",
        padding: "72px 5% 60px",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Grid overlay */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        {/* Glow blob */}
        <div style={{
          position: "absolute", right: "-10%", top: "10%",
          width: 700, height: 700, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(249,115,22,0.09) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        {/* Secondary glow */}
        <div style={{
          position: "absolute", left: "-5%", bottom: "-10%",
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(30,58,110,0.5) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        <div style={{
          maxWidth: 1280, margin: "0 auto", width: "100%",
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 64, alignItems: "center",
        }} className="two-col">

          {/* ── LEFT: Text ── */}
          <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateX(0)" : "translateX(-60px)", transition: "all 0.8s ease" }}>
            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(249,115,22,0.12)", border: "1px solid rgba(249,115,22,0.35)",
              borderRadius: 30, padding: "7px 20px", marginBottom: 32,
              animation: "borderPulse 2.5s ease infinite",
            }}>
              <span style={{ width: 7, height: 7, background: "var(--orange)", borderRadius: "50%", display: "inline-block", animation: "pulse 1.5s ease infinite" }} />
              <span style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 12, color: "var(--orange)", letterSpacing: 2.5, textTransform: "uppercase" }}>
                India's Most Trusted Truck Network
              </span>
            </div>

            {/* Heading */}
            <h1 style={{
              fontFamily: "'Rajdhani',sans-serif", fontWeight: 700,
              fontSize: "clamp(52px,7vw,92px)", lineHeight: 0.9,
              color: "#fff", textTransform: "uppercase", marginBottom: 30,
            }}>
              Book a<br />
              <span style={{ color: "var(--orange)" }}>Truck</span><br />
              Anywhere<br />
              <span style={{ color: "var(--text-muted)", fontSize: "0.5em", lineHeight: 1.8 }}>in India</span>
            </h1>

            <p style={{ color: "#8a9ab5", fontSize: 17, lineHeight: 1.8, marginBottom: 40, maxWidth: 440 }}>
              Part load or full load — get instant truck booking across all 28 states.
              15,000+ verified trucks, real-time GPS, transparent pricing.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 44 }}>
              <button className="btn-orange" onClick={() => go("contact")}
                style={{ animation: "glow 2.5s ease-in-out infinite", fontSize: 16, padding: "14px 32px" }}>
                📦 Book a Truck
              </button>
              <button className="btn-outline" onClick={() => go("services")} style={{ padding: "14px 28px" }}>
                View Services →
              </button>
            </div>

            {/* Trust badges */}
            <div style={{ display: "flex", gap: 0, flexWrap: "wrap" }}>
              {[
                ["✓", "GST Billing"],
                ["✓", "GPS Tracking"],
                ["✓", "24/7 Support"],
                ["✓", "Verified Drivers"],
              ].map(([icon, label]) => (
                <div key={label} style={{
                  display: "flex", alignItems: "center", gap: 6,
                  color: "#8a9ab5", fontSize: 13,
                  fontFamily: "'Exo 2',sans-serif",
                  marginRight: 24, marginBottom: 8,
                }}>
                  <span style={{ color: "var(--orange)", fontWeight: 700 }}>{icon}</span> {label}
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Truck Illustration ── */}
          <div style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateX(0)" : "translateX(60px)",
            transition: "all 0.9s ease",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 0,
          }}>
            {/* Animated Highway + Truck SVG */}
            <div style={{ width: "100%", position: "relative" }}>

              {/* Floating stat chips */}
              <div style={{
                position: "absolute", top: -10, left: 0,
                background: "rgba(249,115,22,0.92)", borderRadius: 10,
                padding: "10px 16px", backdropFilter: "blur(8px)",
                animation: "float 3s ease-in-out 0s infinite",
                zIndex: 10,
              }}>
                <div style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 20, color: "#fff", lineHeight: 1 }}>15,000+</div>
                <div style={{ fontFamily: "'Exo 2',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.85)", letterSpacing: 1 }}>TRUCKS</div>
              </div>

              <div style={{
                position: "absolute", top: 40, right: -10,
                background: "rgba(13,27,62,0.95)", border: "1px solid rgba(249,115,22,0.3)", borderRadius: 10,
                padding: "10px 16px", backdropFilter: "blur(8px)",
                animation: "float 3s ease-in-out 1s infinite",
                zIndex: 10,
              }}>
                <div style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 20, color: "var(--orange)", lineHeight: 1 }}>500+</div>
                <div style={{ fontFamily: "'Exo 2',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.7)", letterSpacing: 1 }}>CITIES</div>
              </div>

              <div style={{
                position: "absolute", bottom: 80, right: 10,
                background: "rgba(13,27,62,0.95)", border: "1px solid rgba(249,115,22,0.3)", borderRadius: 10,
                padding: "10px 16px", backdropFilter: "blur(8px)",
                animation: "float 3s ease-in-out 1.8s infinite",
                zIndex: 10,
              }}>
                <div style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 20, color: "#4ade80", lineHeight: 1 }}>99.2%</div>
                <div style={{ fontFamily: "'Exo 2',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.7)", letterSpacing: 1 }}>ON-TIME</div>
              </div>

              {/* Main Illustration SVG */}
              <svg viewBox="0 0 560 420" fill="none" xmlns="http://www.w3.org/2000/svg"
                style={{ width: "100%", filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.5))" }}>

                {/* ── SKY / BG ── */}
                <rect width="560" height="420" rx="20"/>
                <rect width="560" height="420" rx="20"/>

                {/* Stars */}
                {[[40,30],[120,20],[200,45],[300,15],[400,35],[480,22],[520,50],[80,60],[350,55]].map(([x,y],i)=>(
                  <circle key={i} cx={x} cy={y} r={i%3===0?1.5:1} fill="white" opacity={0.4+Math.random()*0.4}/>
                ))}

                {/* Moon */}
                <circle cx="490" cy="40" r="22" fill="#1e3a6e" />
                <circle cx="500" cy="35" r="18" fill="#0d1b3e" />

                {/* Mountains far */}
                <polygon points="0,280 80,180 160,280" fill="#1a2a50" />
                <polygon points="60,280 160,160 260,280" fill="#162040" />
                <polygon points="200,280 310,150 420,280" fill="#1a2a50" />
                <polygon points="350,280 460,170 560,280" fill="#162040" />

                {/* Mountain snow caps */}
                <polygon points="80,180 90,195 70,195" fill="rgba(255,255,255,0.15)" />
                <polygon points="160,160 172,178 148,178" fill="rgba(255,255,255,0.15)" />
                <polygon points="310,150 324,170 296,170" fill="rgba(255,255,255,0.15)" />
                <polygon points="460,170 474,188 446,188" fill="rgba(255,255,255,0.15)" />

                {/* Road base */}
                <rect x="0" y="290" width="560" height="130" rx="0" fill="#111827" />

                {/* Road surface */}
                <rect x="0" y="300" width="560" height="110" fill="#1f2937" />

                {/* Road edge lines */}
                <rect x="0" y="300" width="560" height="4" fill="#f97316" opacity="0.7" />
                <rect x="0" y="403" width="560" height="4" fill="#f97316" opacity="0.4" />

                {/* Road centre dashes - animated via CSS */}
                <rect x="0" y="348" width="560" height="6" fill="none" />
                {[0,1,2,3,4,5,6,7,8].map(i=>(
                  <rect key={i} x={i*70} y="349" width="40" height="4" rx="2" fill="#f59e0b" opacity="0.5">
                    <animateTransform attributeName="transform" type="translate" from="0 0" to="-70 0" dur="1s" repeatCount="indefinite" begin={`${-i*0.11}s`} />
                  </rect>
                ))}

                {/* Lane markings bottom */}
                {[0,1,2,3,4,5,6,7,8].map(i=>(
                  <rect key={i} x={i*70} y="380" width="30" height="3" rx="1" fill="white" opacity="0.12">
                    <animateTransform attributeName="transform" type="translate" from="0 0" to="-70 0" dur="1.4s" repeatCount="indefinite" begin={`${-i*0.16}s`} />
                  </rect>
                ))}

                {/* ── TRUCK ── */}
                <g style={{ animation: "truckBounce 0.5s ease-in-out infinite alternate" }}>
                  {/* Trailer body */}
                  <rect x="30" y="230" width="280" height="90" rx="6" fill="#1e3a6e" />
                  {/* Trailer top stripe */}
                  <rect x="30" y="230" width="280" height="12" rx="3" fill="#f97316" />
                  {/* Trailer side panels */}
                  <rect x="40" y="248" width="120" height="60" rx="3" fill="#162040" opacity="0.5" />
                  <rect x="170" y="248" width="120" height="60" rx="3" fill="#162040" opacity="0.5" />
                  {/* SK logo on trailer */}
                  <rect x="50" y="260" width="220" height="36" rx="4" fill="#0d1b3e" opacity="0.8" />
                  <text x="160" y="284" fill="#f97316" fontSize="15" fontWeight="bold" fontFamily="monospace" textAnchor="middle" letterSpacing="1">SK TRANSPORT SERVICES</text>

                  {/* Cab body */}
                  <rect x="310" y="205" width="185" height="115" rx="8" fill="#1e3a6e" />
                  {/* Cab roof */}
                  <rect x="320" y="195" width="170" height="20" rx="4" fill="#162040" />
                  {/* Air horn/exhaust */}
                  <rect x="472" y="175" width="8" height="28" rx="3" fill="#2d4a7a" />
                  <rect x="484" y="175" width="8" height="28" rx="3" fill="#2d4a7a" />
                  {/* Exhaust smoke */}
                  <circle cx="476" cy="165" r="5" fill="#374151" opacity="0.5">
                    <animate attributeName="cy" values="165;145;130" dur="1.2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0.2;0" dur="1.2s" repeatCount="indefinite" />
                    <animate attributeName="r" values="5;8;12" dur="1.2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="488" cy="168" r="4" fill="#374151" opacity="0.4">
                    <animate attributeName="cy" values="168;148;133" dur="1s" repeatCount="indefinite" begin="0.3s"/>
                    <animate attributeName="opacity" values="0.4;0.15;0" dur="1s" repeatCount="indefinite" begin="0.3s"/>
                    <animate attributeName="r" values="4;7;11" dur="1s" repeatCount="indefinite" begin="0.3s"/>
                  </circle>

                  {/* Windshield */}
                  <rect x="330" y="213" width="90" height="65" rx="5" fill="#a8d4ff" opacity="0.3" />
                  {/* Windshield glare */}
                  <rect x="334" y="217" width="30" height="20" rx="3" fill="white" opacity="0.1" />
                  {/* Side window */}
                  <rect x="428" y="213" width="58" height="52" rx="5" fill="#a8d4ff" opacity="0.2" />
                  {/* Window divider */}
                  <rect x="422" y="210" width="3" height="70" fill="#162040" />

                  {/* Cab stripes */}
                  <rect x="310" y="205" width="185" height="10" rx="3" fill="#f97316" opacity="0.8" />
                  <rect x="310" y="295" width="185" height="8" rx="0" fill="#f97316" opacity="0.5" />

                  {/* Headlights */}
                  <rect x="489" y="230" width="18" height="10" rx="3" fill="#fcd34d" />
                  {/* Headlight glow */}
                  <rect x="507" y="228" width="30" height="14" rx="2" fill="url(#headlightGrad)" opacity="0.7" />
                  {/* Running lights */}
                  <circle cx="493" cy="220" r="4" fill="#f97316" />
                  <circle cx="503" cy="220" r="4" fill="#f97316" />

                  {/* Tail lights */}
                  <rect x="30" y="265" width="10" height="20" rx="2" fill="#ef4444" />
                  <rect x="30" y="288" width="10" height="10" rx="2" fill="#f97316" />

                  {/* Bumper */}
                  <rect x="492" y="295" width="14" height="8" rx="2" fill="#374151" />

                  {/* Connector/kingpin */}
                  <rect x="302" y="290" width="14" height="18" rx="2" fill="#374151" />

                  {/* WHEELS - Trailer */}
                  {[75, 185, 220].map((cx, i) => (
                    <g key={i}>
                      <circle cx={cx} cy="323" r="22" fill="#111827" />
                      <circle cx={cx} cy="323" r="16" fill="#1f2937" />
                      <circle cx={cx} cy="323" r="8" fill="#374151" />
                      <circle cx={cx} cy="323" r="3" fill="#6b7280" />
                      {/* Wheel spokes */}
                      {[0,60,120,180,240,300].map((deg,j)=>(
                        <line key={j} x1={cx} y1="323"
                          x2={cx + 12*Math.cos(deg*Math.PI/180)}
                          y2={323 + 12*Math.sin(deg*Math.PI/180)}
                          stroke="#4b5563" strokeWidth="2">
                          <animateTransform attributeName="transform" type="rotate" from={`0 ${cx} 323`} to={`360 ${cx} 323`} dur="0.7s" repeatCount="indefinite"/>
                        </line>
                      ))}
                    </g>
                  ))}

                  {/* WHEELS - Cab */}
                  {[370, 445].map((cx, i) => (
                    <g key={i}>
                      <circle cx={cx} cy="323" r="24" fill="#111827" />
                      <circle cx={cx} cy="323" r="17" fill="#1f2937" />
                      <circle cx={cx} cy="323" r="9" fill="#374151" />
                      <circle cx={cx} cy="323" r="3.5" fill="#6b7280" />
                      {[0,60,120,180,240,300].map((deg,j)=>(
                        <line key={j} x1={cx} y1="323"
                          x2={cx + 13*Math.cos(deg*Math.PI/180)}
                          y2={323 + 13*Math.sin(deg*Math.PI/180)}
                          stroke="#4b5563" strokeWidth="2.5">
                          <animateTransform attributeName="transform" type="rotate" from={`0 ${cx} 323`} to={`360 ${cx} 323`} dur="0.7s" repeatCount="indefinite"/>
                        </line>
                      ))}
                    </g>
                  ))}
                </g>

                {/* Road reflections under truck */}
                <ellipse cx="260" cy="340" rx="220" ry="12" fill="rgba(249,115,22,0.06)" />

                {/* Roadside elements */}
                {/* Trees */}
                {[[20,270],[530,260],[8,260]].map(([x,y],i)=>(
                  <g key={i}>
                    <rect x={x+6} y={y+20} width="5" height="18" fill="#374151" />
                    <circle cx={x+8} cy={y+14} r="14" fill="#1a3a1a" />
                    <circle cx={x+3} cy={y+20} r="10" fill="#1a3a1a" />
                    <circle cx={x+14} cy={y+18} r="11" fill="#1a3a1a" />
                  </g>
                ))}

                {/* Distance marker post */}
                <rect x="14" y="248" width="6" height="40" fill="#374151" />
                <rect x="10" y="248" width="14" height="14" rx="2" fill="#f97316" />
                <text x="17" y="259" fill="white" fontSize="6" textAnchor="middle" fontWeight="bold">KM</text>

                {/* GPS pin */}
                <g style={{ animation: "float 2s ease-in-out infinite" }}>
                  <circle cx="398" cy="180" r="14" fill="#f97316" />
                  <circle cx="398" cy="180" r="6" fill="white" />
                  <polygon points="398,194 392,186 404,186" fill="#f97316" />
                </g>

                {/* Gradient defs */}
                <defs>
                  <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0d1b3e" />
                    <stop offset="60%" stopColor="#162040" />
                    <stop offset="100%" stopColor="#111827" />
                  </linearGradient>
                  <linearGradient id="headlightGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#fcd34d" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#fcd34d" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Live tracking badge */}
              {/* <div style={{
                position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)",
                background: "rgba(13,27,62,0.92)", border: "1px solid rgba(74,222,128,0.4)",
                borderRadius: 30, padding: "8px 20px", display: "flex", alignItems: "center", gap: 8,
                backdropFilter: "blur(8px)", whiteSpace: "nowrap",
              }}>
                <span style={{ width: 8, height: 8, background: "#4ade80", borderRadius: "50%", display: "inline-block", animation: "pulse 1.2s ease infinite" }} />
                <span style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 13, color: "#4ade80", letterSpacing: 1.5 }}>LIVE GPS TRACKING</span>
              </div> */}
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 40, overflow: "hidden" }}>
          <svg viewBox="0 0 1440 40" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
            <path d="M0,20 C240,40 480,0 720,20 C960,40 1200,0 1440,20 L1440,40 L0,40 Z" fill="#f5f3ee" />
          </svg>
        </div>
      </section>

      {/* ── ANIMATED TRUCK ROAD ── */}
      <div style={{ background: "#f5f3ee", padding: "0 5%", overflow: "hidden" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", paddingTop: 32 }}>
          <div style={{
            opacity: truckAnim ? 1 : 0,
            transform: truckAnim ? "translateX(0)" : "translateX(-200px)",
            transition: "all 1.3s cubic-bezier(0.25,0.46,0.45,0.94)",
          }}>
            <svg viewBox="0 0 600 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 600 }}>
              <rect x="8" y="40" width="295" height="68" rx="7" fill="#162040" />
              <rect x="8" y="40" width="295" height="14" rx="0" fill="#f97316" opacity="0.9" />
              <rect x="303" y="20" width="192" height="88" rx="7" fill="#1a2744" />
              <rect x="308" y="28" width="82" height="52" rx="4" fill="#a8d4ff" opacity="0.75" />
              <rect x="400" y="28" width="82" height="52" rx="4" fill="#a8d4ff" opacity="0.5" />
              <circle cx="75" cy="112" r="18" fill="#111" /><circle cx="75" cy="112" r="11" fill="#2a2a2a" /><circle cx="75" cy="112" r="4" fill="#666" />
              <circle cx="220" cy="112" r="18" fill="#111" /><circle cx="220" cy="112" r="11" fill="#2a2a2a" /><circle cx="220" cy="112" r="4" fill="#666" />
              <circle cx="390" cy="112" r="18" fill="#111" /><circle cx="390" cy="112" r="11" fill="#2a2a2a" /><circle cx="390" cy="112" r="4" fill="#666" />
              <circle cx="465" cy="112" r="18" fill="#111" /><circle cx="465" cy="112" r="11" fill="#2a2a2a" /><circle cx="465" cy="112" r="4" fill="#666" />
              <rect x="488" y="70" width="14" height="7" rx="2" fill="#fcd34d" />
              <rect x="8" y="74" width="16" height="7" rx="2" fill="#f87171" />
              <text x="155" y="86" fill="#f97316" fontSize="18" fontWeight="700" fontFamily="monospace" textAnchor="middle" letterSpacing="2">SK TRANSPORT SERVICES</text>
            </svg>
          </div>
          <div style={{ height: 5, background: "#1a2744", borderRadius: 5, position: "relative", overflow: "hidden" }}>
            <div style={{
              position: "absolute", inset: 0,
              background: "repeating-linear-gradient(90deg,#f97316 0,#f97316 1px,transparent 30px,transparent 40px)",
              animation: "roadScroll 0.4s linear infinite",
            }} />
          </div>
        </div>
      </div>

      {/* ── STATS ── */}
      <div ref={statsRef} style={{ background: "#162040", padding: "52px 5%" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, textAlign: "center" }} className="four-col">
          {stats.map((s, i) => (
            <div key={i} style={{ padding: "24px 16px", animation: statsVis ? `countUp 0.6s ease ${i * 0.14}s both` : "none" }}>
              <div style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 48, color: "var(--orange)", lineHeight: 1 }}>{s.n}</div>
              <div style={{ color: "var(--text-muted)", fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginTop: 6, fontFamily: "'Rajdhani',sans-serif", fontWeight: 600 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES PREVIEW ── */}
      <section style={{ padding: "80px 5%", background: "var(--cream)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="sec-tag">What We Offer</span>
            <h2 className="sec-title">Our Services</h2>
            <p style={{ color: "var(--gray)", fontSize: 16, maxWidth: 500, margin: "16px auto 0", lineHeight: 1.7 }}>
              Comprehensive logistics for businesses of every size — across every corner of India.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }} className="three-col">
            {services.map((s, i) => (
              <div key={i} className="card" style={{ padding: "28px 24px", animation: `slideUp 0.6s ease ${i * 0.08}s both` }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 18 }}>
                  <span style={{ fontSize: 38, animation: `float 3s ease-in-out ${i * 0.4}s infinite` }}>{s.ico}</span>
                  <span style={{ background: "var(--orange-light)", color: "#c2410c", fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: 1.5, padding: "4px 10px", borderRadius: 20 }}>{s.sub}</span>
                </div>
                <h3 style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 22, color: "var(--navy)", textTransform: "uppercase", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: "var(--gray)", fontSize: 14, lineHeight: 1.65, marginBottom: 16 }}>{s.desc}</p>
                <button onClick={() => go("services")} style={{ background: "none", border: "none", color: "var(--orange)", fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: 1, cursor: "pointer", padding: 0 }}>
                  Learn More →
                </button>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <button className="btn-orange" onClick={() => go("services")}>View All Services →</button>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section style={{ padding: "72px 5%", background: "var(--navy)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="two-col">
          <div>
            <span className="sec-tag">Why SK Transport</span>
            <h2 className="sec-title-white" style={{ marginBottom: 32 }}>
              India's Most<br /><span style={{ color: "var(--orange)" }}>Reliable</span> Truck Partner
            </h2>
            {[
              ["⚡", "Instant Booking", "Book in 2 minutes. Trucks confirmed within the hour across all major cities."],
              ["📍", "GPS Tracking", "Live location tracking on every single shipment. Full transparency."],
              ["💰", "Transparent Pricing", "Best market rates. Zero hidden charges. GST invoice guaranteed."],
              ["🤝", "Verified Fleet", "All drivers and trucks background-verified & insured."],
            ].map(([ico, title, desc], i) => (
              <div key={i} style={{ display: "flex", gap: 16, marginBottom: 24, animation: `slideLeft 0.6s ease ${i * 0.1}s both` }}>
                <div style={{ width: 46, height: 46, background: "rgba(249,115,22,0.12)", border: "1px solid rgba(249,115,22,0.25)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{ico}</div>
                <div>
                  <div style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 18, color: "#fff", textTransform: "uppercase" }}>{title}</div>
                  <div style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.65, marginTop: 3 }}>{desc}</div>
                </div>
              </div>
            ))}
            <button className="btn-orange" onClick={() => go("about")} style={{ marginTop: 8 }}>About Us →</button>
          </div>
          <div>
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "32px 28px" }}>
              <h3 style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 18, color: "var(--orange)", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 22 }}>Truck Types We Operate</h3>
              {[
                ["🚛", "Mini Truck / Tata Ace", "Upto 1 ton"],
                ["🚚", "Single Axle Truck", "2–9 tons"],
                ["🚛", "Multi Axle Trailer", "10–25 tons"],
                ["🏗️", "Flatbed / Open Body", "Machinery & ODC"],
                ["❄️", "Reefer / Cold Box", "Pharma & Food"],
                ["🔒", "Container Truck", "High-value Cargo"],
              ].map(([ico, type, cap], i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", borderBottom: i < 5 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 18 }}>{ico}</span>
                    <span style={{ fontSize: 15, color: "rgba(255,255,255,0.82)", fontFamily: "'Exo 2',sans-serif" }}>{type}</span>
                  </span>
                  <span style={{ fontSize: 13, color: "var(--orange)", fontFamily: "'Rajdhani',sans-serif", fontWeight: 700 }}>{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── POPULAR ROUTES ── */}
      <section style={{ padding: "64px 5%", background: "var(--cream)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", textAlign: "center" }}>
          <span className="sec-tag">Coverage</span>
          <h2 className="sec-title" style={{ marginBottom: 36 }}>Popular Routes</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {["Delhi → Mumbai","Mumbai → Bangalore","Chennai → Hyderabad","Kolkata → Delhi","Pune → Ahmedabad","Jaipur → Lucknow","Chandigarh → Surat","Nagpur → Bhopal","Kochi → Coimbatore","Indore → Raipur","Patna → Varanasi","Coimbatore → Chennai"].map((r, i) => (
              <div key={i} style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "#fff", border: "1px solid var(--light-gray)", borderRadius: 30, padding: "9px 20px", fontSize: 14, fontFamily: "'Exo 2',sans-serif", fontWeight: 500, cursor: "pointer", transition: "all 0.22s", animation: `fadeIn 0.5s ease ${i * 0.06}s both` }}
                onMouseOver={e => { e.currentTarget.style.background = "var(--navy)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "var(--navy)"; }}
                onMouseOut={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = ""; e.currentTarget.style.borderColor = "var(--light-gray)"; }}>
                <span style={{ color: "var(--orange)" }}>🚛</span> {r}
              </div>
            ))}
          </div>
          <p style={{ color: "var(--gray)", marginTop: 28, fontSize: 15 }}>And 1000+ routes connecting every part of India.</p>
          <button className="btn-outline" onClick={() => go("routes")} style={{ marginTop: 24 }}>View All Routes →</button>
        </div>
      </section>

      {/* Truck bounce keyframe */}
      <style>{`
        @keyframes truckBounce {
          from { transform: translateY(0px); }
          to   { transform: translateY(-3px); }
        }
      `}</style>
    </div>
  );
};

export default HomePage;