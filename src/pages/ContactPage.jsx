import { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    from: "",
    to: "",
    type: "Full Load (FTL)",
    weight: "",
    date: "",
    notes: "",
  });
  const [done, setDone] = useState(false);
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const submit = (e) => {
    e.preventDefault();
    setDone(true);
    setTimeout(() => setDone(false), 5000);
  };

  return (
    <div className="page">
      <div style={{ background: "var(--navy)", padding: "64px 5% 56px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <span className="sec-tag">Get In Touch</span>
          <h1 className="sec-title-white">
            Book a Truck /{" "}
            <span style={{ color: "var(--orange)" }}>Contact Us</span>
          </h1>
          <p
            style={{ color: "var(--text-muted)", fontSize: 16, marginTop: 16 }}
          >
            Fill the form or call us — we'll confirm your truck within the hour.
          </p>
        </div>
      </div>
      <div style={{ padding: "72px 5%", background: "var(--cream)" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: 56,
          }}
          className="two-col"
        >
          {/* Form */}
          <div>
            {done ? (
              <div
                style={{
                  background: "#ecfdf5",
                  border: "2px solid #059669",
                  borderRadius: 16,
                  padding: "56px 32px",
                  textAlign: "center",
                  animation: "scaleIn 0.4s ease",
                }}
              >
                <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
                <h3
                  style={{
                    fontFamily: "'Rajdhani',sans-serif",
                    fontWeight: 700,
                    fontSize: 30,
                    color: "#065f46",
                    textTransform: "uppercase",
                  }}
                >
                  Booking Received!
                </h3>
                <p style={{ color: "#047857", marginTop: 12, fontSize: 16 }}>
                  Our team will call you within 30 minutes. Thank you for
                  choosing SK Transport Services!
                </p>
              </div>
            ) : (
              <form
                onSubmit={submit}
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  border: "1px solid var(--light-gray)",
                  padding: "40px 36px",
                  animation: "slideLeft 0.6s ease",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Rajdhani',sans-serif",
                    fontWeight: 700,
                    fontSize: 22,
                    color: "var(--navy)",
                    textTransform: "uppercase",
                    marginBottom: 28,
                    letterSpacing: 1,
                  }}
                >
                  📦 Book a Truck
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 18,
                    marginBottom: 18,
                  }}
                  className="form-2col"
                >
                  {[
                    ["name", "Your Name", "text", "Full Name"],
                    ["phone", "Phone Number", "tel", "+91 XXXXX XXXXX"],
                    ["email", "Email (optional)", "email", "you@example.com"],
                  ].map(([k, l, t, p]) => (
                    <div
                      key={k}
                      style={k === "email" ? { gridColumn: "1 / -1" } : {}}
                    >
                      <label className="flabel">{l}</label>
                      <input
                        required={k !== "email"}
                        type={t}
                        placeholder={p}
                        className="finput"
                        value={form[k]}
                        onChange={(e) => set(k, e.target.value)}
                      />
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 18,
                    marginBottom: 18,
                  }}
                  className="form-2col"
                >
                  {[
                    ["from", "From City", "Delhi"],
                    ["to", "To City", "Mumbai"],
                  ].map(([k, l, p]) => (
                    <div key={k}>
                      <label className="flabel">{l} *</label>
                      <input
                        required
                        type="text"
                        placeholder={p}
                        className="finput"
                        value={form[k]}
                        onChange={(e) => set(k, e.target.value)}
                      />
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: 18,
                    marginBottom: 18,
                  }}
                  className="form-2col"
                >
                  <div>
                    <label className="flabel">Load Type *</label>
                    <select
                      required
                      className="finput"
                      value={form.type}
                      onChange={(e) => set("type", e.target.value)}
                    >
                      <option>Full Load (FTL)</option>
                      <option>Part Load (LTL)</option>
                      <option>Express Delivery</option>
                      <option>Cold Chain</option>
                      <option>ODC / Heavy Cargo</option>
                    </select>
                  </div>
                  <div>
                    <label className="flabel">Weight (Tons)</label>
                    <input
                      type="number"
                      placeholder="e.g. 5"
                      className="finput"
                      value={form.weight}
                      onChange={(e) => set("weight", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="flabel">Pickup Date</label>
                    <input
                      type="date"
                      className="finput"
                      value={form.date}
                      onChange={(e) => set("date", e.target.value)}
                    />
                  </div>
                </div>
                <div style={{ marginBottom: 28 }}>
                  <label className="flabel">Special Instructions</label>
                  <textarea
                    className="finput"
                    rows={3}
                    placeholder="Any special cargo requirements, fragile items, etc."
                    value={form.notes}
                    onChange={(e) => set("notes", e.target.value)}
                    style={{ resize: "none" }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-orange"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    fontSize: 17,
                    letterSpacing: 2.5,
                    padding: "16px",
                  }}
                >
                  🚛 Confirm Booking
                </button>
                <p
                  style={{
                    textAlign: "center",
                    color: "var(--gray)",
                    fontSize: 13,
                    marginTop: 12,
                  }}
                >
                  We'll call you within 30 minutes to confirm.
                </p>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div style={{ animation: "slideRight 0.7s ease" }}>
            <div
              style={{
                background: "var(--navy)",
                borderRadius: 16,
                padding: "36px 28px",
                marginBottom: 24,
              }}
            >
              <h3
                style={{
                  fontFamily: "'Rajdhani',sans-serif",
                  fontWeight: 700,
                  fontSize: 20,
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 24,
                }}
              >
                📞 Contact Details
              </h3>
              {[
                [
                  "📞",
                  "Phone / WhatsApp",
                  "+91 93192 20315",
                  "Call or WhatsApp 24/7",
                ],
                [
                  "📧",
                  "Email",
                  "sktransportservices75@gmail.com",
                  "We reply within 2 hours",
                ],
                ["📍", "Head Office", "101, DSi", "Pan-India operations"],
                [
                  "🕐",
                  "Business Hours",
                  "24/7 Available",
                  "Trucks move round the clock",
                ],
              ].map(([ico, label, val, sub]) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    gap: 14,
                    padding: "14px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span style={{ fontSize: 22, marginTop: 2 }}>{ico}</span>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        textTransform: "uppercase",
                        letterSpacing: 1.5,
                        color: "var(--text-muted)",
                        marginBottom: 3,
                      }}
                    >
                      {label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Rajdhani',sans-serif",
                        fontWeight: 700,
                        fontSize: 18,
                        color: "#fff",
                      }}
                    >
                      {val}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: "var(--text-muted)",
                        marginTop: 2,
                      }}
                    >
                      {sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                background: "#fff",
                borderRadius: 16,
                padding: "28px 24px",
                border: "1px solid var(--light-gray)",
              }}
            >
              <h4
                style={{
                  fontFamily: "'Rajdhani',sans-serif",
                  fontWeight: 700,
                  fontSize: 17,
                  color: "var(--navy)",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                Why Book With Us?
              </h4>
              {[
                "Free instant quote in 2 minutes",
                "No advance payment required",
                "Trucks confirmed within 1 hour",
                "GPS tracking on every shipment",
                "GST invoice guaranteed",
                "Verified & insured drivers",
              ].map((p) => (
                <div
                  key={p}
                  style={{
                    display: "flex",
                    gap: 8,
                    alignItems: "center",
                    padding: "8px 0",
                    borderBottom: "1px solid #f0ede6",
                    fontSize: 14,
                    color: "#444",
                  }}
                >
                  <span style={{ color: "var(--orange)", fontWeight: 700 }}>
                    ✓
                  </span>{" "}
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
