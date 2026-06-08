import React from "react";
import { Reveal, Eyebrow, Button, Grain } from "../components/primitives.jsx";
import { Monogram } from "../components/Monogram.jsx";
import { ProductCard } from "../components/ProductCard.jsx";
import { HOUSE, PRONOVIAS, TESTIMONIALS } from "../data.js";
import { pad, headlineTransform, moodFilter } from "./helpers.js";

/* ---- the slim by-appointment notice (real boutique message) ---- */
function AppointmentNote() {
  return (
    <div style={{ background: "var(--bb-blush-deep)", color: "var(--bb-ink)", textAlign: "center", padding: "13px 24px",
      fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase" }}>
      Strictly by appointment · to book, please call <a href={"tel:" + HOUSE.mobile.replace(/\s/g, "")} style={{ color: "inherit" }}>{HOUSE.mobile}</a>
    </div>
  );
}

/* ================= HERO (three treatments) ================= */
function Hero({ go, t }) {
  const style = (t && t.hero) || "bw";
  const eyebrow = "Oxford · By Appointment · Est. 1991";
  const title = "The dress\nof your dreams";
  const tagline = "For Beautiful Bridalwear";
  const tt = headlineTransform(t);

  const Actions = ({ light }) => (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: light ? "center" : "flex-start" }}>
      <Button variant="blush" size="lg" onClick={() => go("gowns")}>Explore the collection</Button>
      <Button variant={light ? "ghost" : "primary"} size="lg" onClick={() => go("contact")}
        style={light ? { color: "var(--bb-paper)", borderColor: "var(--bb-paper)" } : {}}>Book a fitting</Button>
    </div>
  );

  if (style === "blush") {
    return (
      <section style={{ background: "var(--bb-blush)", minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 40px 80px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: "clamp(40px, 6vw, 96px)", alignItems: "center" }}>
          <div>
            <Reveal><Eyebrow tone="var(--bb-ink-muted)" withRule style={{ marginBottom: 30 }}>{eyebrow}</Eyebrow></Reveal>
            <Reveal delay={80}><h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 6vw, 5.4rem)", lineHeight: 0.98, margin: 0, color: "var(--bb-ink)", textTransform: tt, whiteSpace: "pre-line", letterSpacing: "0.01em" }}>{title}</h1></Reveal>
            <Reveal delay={150}><p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 13.5, letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--bb-ink-soft)", margin: "32px 0 40px" }}>{tagline}</p></Reveal>
            <Reveal delay={210}><Actions /></Reveal>
          </div>
          <Reveal delay={120}>
            <div style={{ position: "relative", aspectRatio: "3 / 4", boxShadow: "var(--shadow-image)", borderRadius: "var(--radius-sm)", overflow: "hidden", background: "var(--bb-paper-warm)" }}>
              <img src="/assets/photography/bride-editorial.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: moodFilter(t) }} />
              <Grain />
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  if (style === "split") {
    return (
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "100vh" }}>
        <div style={{ background: "var(--bb-ink)", color: "var(--bb-paper)", display: "flex", flexDirection: "column", justifyContent: "center", padding: "120px clamp(40px, 6vw, 92px) 80px" }}>
          <Reveal><Eyebrow tone="var(--bb-stone)" withRule style={{ marginBottom: 30 }}>{eyebrow}</Eyebrow></Reveal>
          <Reveal delay={80}><h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.8rem, 4.6vw, 5rem)", lineHeight: 0.98, margin: 0, color: "var(--bb-paper)", textTransform: tt, whiteSpace: "pre-line", letterSpacing: "0.01em" }}>{title}</h1></Reveal>
          <Reveal delay={150}><p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 13.5, letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(250,247,243,0.78)", margin: "32px 0 40px" }}>{tagline}</p></Reveal>
          <Reveal delay={210}><Actions light={false} /></Reveal>
        </div>
        <div style={{ position: "relative", overflow: "hidden", background: "var(--bb-paper-warm)", minHeight: 480 }}>
          <img src="/assets/photography/couple-portrait.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: moodFilter(t) }} />
          <Grain />
        </div>
      </section>
    );
  }

  /* default: full-bleed black & white */
  return (
    <section style={{ position: "relative", height: "100vh", minHeight: 640, overflow: "hidden", background: "var(--bb-ink)" }}>
      <img src="/assets/photography/couple-bw.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: moodFilter(t), opacity: 0.82 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(20,17,14,0.55), rgba(20,17,14,0.42) 45%, rgba(20,17,14,0.62))" }} />
      <Grain />
      <div style={{ position: "relative", height: "100%", maxWidth: 1280, margin: "0 auto", padding: "0 40px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", color: "var(--bb-paper)" }}>
        <Reveal><Eyebrow tone="rgba(250,247,243,0.85)" align="center" style={{ marginBottom: 28 }}>{eyebrow}</Eyebrow></Reveal>
        <Reveal delay={80}><h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 7vw, 6.4rem)", lineHeight: 0.96, letterSpacing: "0.01em", margin: 0, color: "var(--bb-paper)", textTransform: tt, whiteSpace: "pre-line" }}>{title}</h1></Reveal>
        <Reveal delay={150}><p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 14.4, letterSpacing: "0.34em", textTransform: "uppercase", margin: "32px 0 40px" }}>{tagline}</p></Reveal>
        <Reveal delay={210}><Actions light /></Reveal>
      </div>
      <div style={{ position: "absolute", bottom: 30, left: "50%", transform: "translateX(-50%)" }}>
        <Monogram size={32} tone="var(--bb-paper)" style={{ opacity: 0.8 }} />
      </div>
    </section>
  );
}

/* ================= HOME ================= */
export function Home({ go, t }) {
  const P = pad(t);
  return (
    <div>
      <Hero go={go} t={t} />
      <AppointmentNote />

      {/* Welcome, the boutique's words */}
      <section style={{ background: "var(--bb-paper)", padding: `${P}px 40px`, textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <Reveal><Eyebrow align="center" withRule style={{ justifyContent: "center", marginBottom: 30 }}>Welcome to The Bridal Box</Eyebrow></Reveal>
          <Reveal delay={90}>
            <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.7rem, 3vw, 2.5rem)", lineHeight: 1.24, color: "var(--bb-ink)", margin: 0 }}>
              Established in {HOUSE.est}, an exclusive bridal boutique in the heart of {HOUSE.city}, a beautiful collection of gowns and accessories, and all the time in the world to find <em style={{ fontFamily: "var(--font-script)", fontStyle: "normal", fontSize: "1.2em", lineHeight: 1 }}>the one</em>.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 15.3, lineHeight: 1.8, color: "var(--text-secondary)", maxWidth: 620, margin: "34px auto 0" }}>
              Our stunning range offers a blend of elegance and individuality in a variety of styles to suit any bride. We are delighted to welcome you to our studio for exclusive, professional advice in a warm and unhurried environment.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured gowns */}
      <section style={{ background: "var(--bb-blush)", padding: `${P}px 40px` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 50, flexWrap: "wrap", gap: 20 }}>
            <Reveal>
              <Eyebrow withRule tone="var(--bb-ink-muted)" style={{ marginBottom: 18 }}>New In · Pronovias</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3.2rem)", margin: 0, color: "var(--bb-ink)" }}>This season's gowns</h2>
            </Reveal>
            <Reveal delay={80}><Button variant="text" onClick={() => go("gowns")}>View all gowns</Button></Reveal>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {PRONOVIAS.slice(0, 3).map((d, i) => <Reveal key={d.slug} delay={i * 90}><ProductCard item={d} go={go} /></Reveal>)}
          </div>
        </div>
      </section>

      {/* Atelier split */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 580 }}>
        <div style={{ background: "var(--bb-ink)", color: "var(--bb-paper)", display: "flex", flexDirection: "column", justifyContent: "center", padding: "90px clamp(40px, 6vw, 96px)" }}>
          <Reveal><Eyebrow tone="var(--bb-stone)" style={{ marginBottom: 24 }}>Alterations & Fittings</Eyebrow></Reveal>
          <Reveal delay={80}><h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 3.6vw, 3.4rem)", lineHeight: 1.05, margin: "0 0 24px", color: "var(--bb-paper)" }}>Fitted by hand,<br />made to feel like yours</h2></Reveal>
          <Reveal delay={150}><p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 15.3, lineHeight: 1.75, color: "rgba(250,247,243,0.78)", maxWidth: 430, margin: "0 0 34px" }}>
            The Bridal Box is renowned for the quality and fit of its dresses. From first fitting to final stitch, your gown is shaped to you across calm, unhurried appointments.
          </p></Reveal>
          <Reveal delay={210}><div><Button variant="blush" onClick={() => go("alterations")}>Our fittings</Button></div></Reveal>
        </div>
        <div style={{ position: "relative", overflow: "hidden", background: "var(--bb-paper-warm)" }}>
          <img src="/assets/photography/veil-detail-bw.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: moodFilter(t) }} />
          <Grain />
        </div>
      </section>

      {/* One testimonial */}
      <section style={{ background: "var(--bb-paper)", padding: `${P}px 40px`, textAlign: "center" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <Reveal><Monogram size={40} tone="var(--bb-blush-shadow)" style={{ margin: "0 auto 30px" }} /></Reveal>
          <Reveal delay={80}><blockquote style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3.2vw, 2.7rem)", lineHeight: 1.28, color: "var(--bb-ink)", margin: 0, fontStyle: "italic" }}>
            “{TESTIMONIALS[1].quote}”
          </blockquote></Reveal>
          <Reveal delay={150}><div style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--text-muted)", marginTop: 30 }}>{TESTIMONIALS[1].name}</div></Reveal>
          <Reveal delay={200}><div style={{ marginTop: 36 }}><Button variant="ghost" onClick={() => go("testimonials")}>Read our brides' words</Button></div></Reveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--bb-blush)", padding: `${P}px 40px`, textAlign: "center" }}>
        <Reveal><h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", margin: "0 0 16px", color: "var(--bb-ink)" }}>Come and try a few on</h2></Reveal>
        <Reveal delay={80}><p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 15.3, color: "var(--bb-ink-soft)", margin: "0 0 36px" }}>Appointments are complimentary and unhurried. To book, call {HOUSE.mobile}.</p></Reveal>
        <Reveal delay={140}><Button size="lg" onClick={() => go("contact")}>Request an appointment</Button></Reveal>
      </section>
    </div>
  );
}
