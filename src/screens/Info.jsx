import React from "react";
import { Reveal, Eyebrow, Button, Grain } from "../components/primitives.jsx";
import { Monogram } from "../components/Monogram.jsx";
import { PageHero } from "../components/PageHero.jsx";
import { HOUSE, TESTIMONIALS } from "../data.js";
import { pad, moodFilter } from "./helpers.js";

/* ================= TESTIMONIALS ================= */
export function Testimonials({ go, t }) {
  const P = pad(t);
  return (
    <div style={{ background: "var(--bb-paper)" }}>
      <PageHero eyebrow="In Their Own Words" title="Our Brides" photo="couple-portrait.jpg" bw={!(t && t.colourPhotos)} />

      <section style={{ maxWidth: 760, margin: "0 auto", padding: `${P}px 40px 40px`, textAlign: "center" }}>
        <Reveal><p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 16.2, lineHeight: 1.8, color: "var(--text-secondary)", margin: 0 }}>
          See what some of our lovely brides have to say about their experience at The Bridal Box, from the first fitting to the final stitch.
        </p></Reveal>
      </section>

      <section style={{ maxWidth: 1080, margin: "0 auto", padding: `40px 40px ${P}px` }}>
        {TESTIMONIALS.map((q, i) => (
          <Reveal key={q.name} delay={30}>
            <figure style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: "clamp(28px, 5vw, 72px)", alignItems: "start",
              padding: "56px 0", borderTop: i === 0 ? "none" : "1px solid var(--border-hairline)" }}>
              <div>
                <Monogram size={26} tone="var(--bb-blush-shadow)" style={{ marginBottom: 20 }} />
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)", lineHeight: 1.1, margin: 0, color: "var(--bb-ink)" }}>{q.heading}</h3>
              </div>
              <div>
                <blockquote style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(1.3rem, 2.1vw, 1.75rem)", lineHeight: 1.5, color: "var(--bb-ink-soft)", margin: 0 }}>
                  “{q.quote}”
                </blockquote>
                <figcaption style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--text-muted)", marginTop: 26 }}>{q.name}</figcaption>
              </div>
            </figure>
          </Reveal>
        ))}
      </section>

      <section style={{ background: "var(--bb-blush)", padding: `${P}px 40px`, textAlign: "center" }}>
        <Reveal><p style={{ fontFamily: "var(--font-script)", fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "var(--bb-ink)", margin: "0 0 8px", lineHeight: 1 }}>with love &amp; thanks</p></Reveal>
        <Reveal delay={70}><p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 14.4, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--bb-ink-soft)", margin: "0 0 34px" }}>From {HOUSE.owner} &amp; the team at The Bridal Box</p></Reveal>
        <Reveal delay={130}><Button size="lg" onClick={() => go("contact")}>Begin your own story</Button></Reveal>
      </section>
    </div>
  );
}

/* ================= ALTERATIONS & FITTINGS ================= */
export function Alterations({ go, t }) {
  const P = pad(t);
  const steps = [
    ["01", "The conversation", "Tell us about your day, your venue, and how you want to feel. We'll pull a rail just for you and talk through silhouette, fabric and length, no pressure, no crowd."],
    ["02", "The fitting", "Try as many as you like in our quiet studio. When you find the one, we take your measurements and order your gown in the right size."],
    ["03", "Made to measure", "Your dress is shaped to your body by hand across two or three calm appointments, taking in, lifting hems, adding straps, sewing on crystals, whatever it takes for a perfect fit."],
    ["04", "The final stitch", "A last press, a careful box, and a gown that has only ever been yours, ready to travel anywhere in the world."],
  ];
  return (
    <div style={{ background: "var(--bb-paper)" }}>
      <PageHero eyebrow="In-House Service" title="Alterations & Fittings" photo="veil-detail-bw.jpg" bw={!(t && t.colourPhotos)} />

      <section style={{ maxWidth: 760, margin: "0 auto", padding: `${P}px 40px 0`, textAlign: "center" }}>
        <Reveal><Eyebrow align="center" withRule style={{ justifyContent: "center", marginBottom: 26 }}>Quality & Fit</Eyebrow></Reveal>
        <Reveal delay={80}><p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem, 2.8vw, 2.3rem)", lineHeight: 1.3, color: "var(--bb-ink)", margin: 0 }}>
          The Bridal Box is widely renowned for the quality and fit of its dresses. Every gown is fitted by hand, in house, never rushed, always yours.
        </p></Reveal>
      </section>

      <section style={{ maxWidth: 1000, margin: "0 auto", padding: `${P - 20}px 40px ${P}px` }}>
        {steps.map(([n, h, b], i) => (
          <Reveal key={n} delay={30}>
            <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 40, padding: "44px 0", borderTop: i === 0 ? "none" : "1px solid var(--border-hairline)" }}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 46, color: "var(--bb-blush-shadow)" }}>{n}</div>
              <div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 30, margin: "0 0 12px", color: "var(--bb-ink)" }}>{h}</h3>
                <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 15.3, lineHeight: 1.75, color: "var(--text-secondary)", maxWidth: 560, margin: 0, textWrap: "pretty" }}>{b}</p>
              </div>
            </div>
          </Reveal>
        ))}
        <div style={{ textAlign: "center", marginTop: 60 }}><Reveal><Button size="lg" onClick={() => go("contact")}>Book your first appointment</Button></Reveal></div>
      </section>
    </div>
  );
}

/* ================= CONTACT, request an appointment ================= */
function ContactField({ label, type = "text", placeholder, options, required }) {
  const [f, setF] = React.useState(false);
  const common = {
    onFocus: () => setF(true), onBlur: () => setF(false),
    style: { fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 14.4, color: "var(--bb-ink)", background: "transparent", border: "none",
      borderBottom: "1px solid " + (f ? "var(--bb-ink)" : "var(--border-on-blush)"), outline: "none", padding: "10px 0", width: "100%", transition: "border-color var(--dur-base)" },
  };
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--text-muted)" }}>{label}{required && <span style={{ color: "var(--bb-stone)" }}> *</span>}</span>
      {options
        ? <select {...common} style={{ ...common.style, appearance: "none", cursor: "pointer" }}>{options.map((o) => <option key={o}>{o}</option>)}</select>
        : <input type={type} placeholder={placeholder} {...common} />}
    </label>
  );
}

export function Contact({ go, t }) {
  const [sent, setSent] = React.useState(false);
  return (
    <div style={{ background: "var(--bb-blush)", minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      {/* Left, image + the real details */}
      <div style={{ position: "relative", overflow: "hidden", background: "var(--bb-ink)", minHeight: 560 }}>
        <img src="/assets/photography/couple-portrait.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: moodFilter(t), opacity: 0.9 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(20,17,14,0.25), rgba(20,17,14,0.78))" }} />
        <Grain />
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "clamp(36px, 5vw, 60px)", color: "var(--bb-paper)" }}>
          <Monogram size={42} tone="var(--bb-paper)" style={{ marginBottom: 26 }} />
          <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", opacity: 0.7, marginBottom: 16 }}>Strictly by appointment</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 14.4 }}>
            <a href={"tel:" + HOUSE.mobile.replace(/\s/g, "")} style={{ color: "inherit", textDecoration: "none" }}>To book · {HOUSE.mobile}</a>
            <a href={"tel:" + HOUSE.phone.replace(/\s/g, "")} style={{ color: "inherit", textDecoration: "none" }}>Studio · {HOUSE.phone}</a>
            <a href={"mailto:" + HOUSE.email} style={{ color: "inherit", textDecoration: "none" }}>{HOUSE.email}</a>
            <span style={{ opacity: 0.7 }}>In the heart of {HOUSE.city}</span>
          </div>
          <div style={{ display: "flex", gap: 20, marginTop: 26 }}>
            {HOUSE.social.map(([n, u]) => (
              <a key={n} href={u} target="_blank" rel="noreferrer" style={{ fontFamily: "var(--font-sans)", fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(250,247,243,0.78)", textDecoration: "none" }}>{n}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Right, request form */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(96px, 12vh, 140px) clamp(32px, 5vw, 64px)" }}>
        <div style={{ width: "100%", maxWidth: 460 }}>
          {sent ? (
            <div style={{ textAlign: "center" }}>
              <Monogram size={56} tone="var(--bb-ink)" style={{ margin: "0 auto 26px" }} />
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 40, margin: "0 0 14px", color: "var(--bb-ink)" }}>It's a date</h2>
              <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 14.4, lineHeight: 1.7, color: "var(--bb-ink-soft)", margin: "0 0 14px" }}>
                Thank you, we'll be in touch to confirm your appointment. As our online booking is currently resting, you're always welcome to call us directly on <a href={"tel:" + HOUSE.mobile.replace(/\s/g, "")} style={{ color: "var(--bb-ink)" }}>{HOUSE.mobile}</a>.
              </p>
              <div style={{ marginTop: 28 }}><Button variant="ghost" onClick={() => go("home")}>Back to home</Button></div>
            </div>
          ) : (
            <React.Fragment>
              <Reveal><Eyebrow style={{ marginBottom: 18 }}>By Appointment Only</Eyebrow></Reveal>
              <Reveal delay={60}><h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 4vw, 3rem)", margin: "0 0 10px", color: "var(--bb-ink)" }}>Request an appointment</h2></Reveal>
              <Reveal delay={110}><p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 13.5, lineHeight: 1.7, color: "var(--bb-ink-soft)", margin: "0 0 36px" }}>
                Our appointment booking system is currently unavailable, please call <a href={"tel:" + HOUSE.mobile.replace(/\s/g, "")} style={{ color: "var(--bb-ink)" }}>{HOUSE.mobile}</a> to book, or leave your details below and we'll call you back.
              </p></Reveal>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <ContactField label="Name" placeholder="Jane Bride" required />
                <ContactField label="Email" type="email" placeholder="you@email.com" required />
                <ContactField label="Telephone" type="tel" placeholder="07000 000000" required />
                <ContactField label="Wedding date" placeholder="June 2027" />
                <ContactField label="Best days & times for you" options={["Weekday morning", "Weekday afternoon", "Saturday", "I'll call to arrange"]} />
                <label style={{ display: "inline-flex", alignItems: "center", gap: 12, cursor: "pointer", fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 12.6, color: "var(--text-secondary)" }}>
                  <input type="checkbox" defaultChecked style={{ accentColor: "var(--bb-ink)", width: 16, height: 16 }} />
                  Keep me posted on new arrivals
                </label>
                <Button size="lg" onClick={() => setSent(true)} style={{ width: "100%", justifyContent: "center" }}>Request appointment</Button>
                <a href={HOUSE.carHire[1]} target="_blank" rel="noreferrer" style={{ textAlign: "center", fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-muted)", textDecoration: "none" }}>
                  Something borrowed? {HOUSE.carHire[0]} ↗
                </a>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
}
