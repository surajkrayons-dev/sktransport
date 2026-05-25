const Ticker = () => {
  const items = ["🚛 Pan-India Transport", "⚡ Express Delivery", "📦 Part Load & Full Load", "❄️ Cold Chain Available", "🔒 GPS Tracked 24x7", "🏗️ ODC Specialists", "✅ GST Billing"];
  return (
    <div style={{ background: "var(--orange)", overflow: "hidden", height: 34, display: "flex", alignItems: "center" }}>
      <div style={{ display: "flex", animation: "marqueeScroll 22s linear infinite", width: "max-content" }}>
        {[0, 1].map(k => (
          <div key={k} style={{ display: "flex" }}>
            {items.map((t, i) => (
              <span key={i} style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 13, color: "#fff", padding: "0 36px", letterSpacing: 2, textTransform: "uppercase", borderRight: "1px solid rgba(255,255,255,0.25)", whiteSpace: "nowrap" }}>{t}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;