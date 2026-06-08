import React from "react";
import { Reveal, Eyebrow, Button, Grain } from "../components/primitives.jsx";
import { Monogram } from "../components/Monogram.jsx";
import { PageHero } from "../components/PageHero.jsx";
import { ABOUT } from "../data.js";
import { pad, moodFilter } from "./helpers.js";

/* ================= THE HOUSE (About) ================= */
export function About({ go, t }) {
  const P = pad(t);
  const photos = ["bride-editorial.jpg", "veil-detail-bw.jpg", "couple-portrait.jpg"];
  return (
    <div style={{ background: "var(--bb-paper)" }}>
      <PageHero eyebrow="The House · Since 1991" title="Our Story" photo="couple-bw.jpg" bw={!(t && t.colourPhotos)} />

      <section style={{ maxWidth: 760, margin: "0 auto", padding: `${P}px 40px 60px`, textAlign: "center" }}>
        <Reveal><Eyebrow align="center" withRule style={{ justifyContent: "center", marginBottom: 28 }}>Over thirty years in Oxford</Eyebrow></Reveal>
        <Reveal delay={90}><p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.7rem, 3vw, 2.4rem)", lineHeight: 1.26, color: "var(--bb-ink)", margin: 0 }}>
          For the ultimate and most quintessential experience, we cordially invite you to come and find the dress of your dreams at The Bridal Box.
        </p></Reveal>
      </section>

      <section style={{ maxWidth: 1180, margin: "0 auto", padding: `0 40px ${P}px` }}>
        {ABOUT.map((m, i) => (
          <Reveal key={m.heading} delay={40}>
            <div style={{ display: "grid", gridTemplateColumns: i % 2 === 0 ? "1fr 1fr" : "1fr 1fr", gap: "clamp(40px, 6vw, 88px)", alignItems: "center", padding: "44px 0", borderTop: i === 0 ? "none" : "1px solid var(--border-hairline)" }}>
              <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: 34, color: "var(--bb-blush-shadow)", marginBottom: 14 }}>{String(i + 1).padStart(2, "0")}</div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", lineHeight: 1.08, margin: "0 0 20px", color: "var(--bb-ink)" }}>{m.heading}</h3>
                <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 15.3, lineHeight: 1.8, color: "var(--text-secondary)", margin: 0, maxWidth: 480, textWrap: "pretty" }}>{m.body}</p>
              </div>
              <div style={{ order: i % 2 === 0 ? 2 : 1, position: "relative", aspectRatio: "4 / 5", overflow: "hidden", borderRadius: "var(--radius-sm)", background: "var(--bb-paper-warm)" }}>
                <img src={"/assets/photography/" + photos[i]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: moodFilter(t) }} />
                <Grain />
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <section style={{ background: "var(--bb-blush)", padding: `${P}px 40px`, textAlign: "center" }}>
        <Reveal><Monogram size={52} tone="var(--bb-ink)" style={{ margin: "0 auto 26px" }} /></Reveal>
        <Reveal delay={80}><h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3.2rem)", margin: "0 0 30px", color: "var(--bb-ink)" }}>We'd love to meet you</h2></Reveal>
        <Reveal delay={140}><div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Button size="lg" onClick={() => go("contact")}>Book an appointment</Button>
          <Button variant="ghost" size="lg" onClick={() => go("testimonials")}>Read testimonials</Button>
        </div></Reveal>
      </section>
    </div>
  );
}
