import React from "react";
import { Reveal, Eyebrow, Grain } from "./primitives.jsx";

/* ============ PageHero, reusable inner-page hero ============ */
export function PageHero({ eyebrow, title, photo = "couple-bw.jpg", height = 460, bw = true }) {
  return (
    <section style={{ position: "relative", height, overflow: "hidden", background: "var(--bb-ink)" }}>
      <img src={"/assets/photography/" + photo} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: bw ? "grayscale(1) contrast(1.05)" : "none", opacity: 0.7 }} />
      <Grain />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(20,17,14,0.5), rgba(20,17,14,0.55))" }} />
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", color: "var(--bb-paper)", paddingTop: 60 }}>
        <Reveal><Eyebrow align="center" tone="rgba(250,247,243,0.85)" style={{ marginBottom: 22 }}>{eyebrow}</Eyebrow></Reveal>
        <Reveal delay={90}><h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.6rem, 6vw, 5rem)", margin: 0, color: "var(--bb-paper)", textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 1 }}>{title}</h1></Reveal>
      </div>
    </section>
  );
}
