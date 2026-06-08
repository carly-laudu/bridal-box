import React from "react";
import { Eyebrow } from "./primitives.jsx";
import { Monogram } from "./Monogram.jsx";
import { HOUSE } from "../data.js";

/* ============ Footer ============ */
export function Footer({ go }) {
  const cols = [
    ["Bridal Gowns", [["pronovias", "Pronovias"], ["richard", "Richard Designs"], ["sale", "Sample Sale"], ["mob", "Mother of the Bride"], ["accessories", "Accessories"]]],
    ["The House", [["about", "Our Story"], ["alterations", "Alterations & Fittings"], ["testimonials", "Brides"], ["contact", "Visit & Contact"]]],
  ];
  return (
    <footer style={{ background: "var(--bb-ink)", color: "var(--bb-paper)", padding: "84px 40px 40px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr", gap: 48, paddingBottom: 60, borderBottom: "1px solid rgba(255,255,255,0.13)" }}>
          <div style={{ maxWidth: 280 }}>
            <Monogram size={48} tone="var(--bb-paper)" />
            <p style={{ fontFamily: "var(--font-serif)", fontSize: 27, lineHeight: 1.18, margin: "22px 0 0" }}>For beautiful <span style={{ fontFamily: "var(--font-script)", fontSize: "1.4em", lineHeight: 1 }}>bridalwear</span>.</p>
          </div>
          {cols.map(([h, items]) => (
            <div key={h}>
              <Eyebrow tone="var(--bb-stone)" style={{ marginBottom: 20 }}>{h}</Eyebrow>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 13 }}>
                {items.map(([id, it]) => (
                  <li key={id}><button onClick={() => go(id)} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--bb-paper)")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(250,247,243,0.78)")}
                    style={{ background: "none", border: "none", color: "rgba(250,247,243,0.78)", fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 12.6, cursor: "pointer", padding: 0, transition: "color var(--dur-base)" }}>{it}</button></li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <Eyebrow tone="var(--bb-stone)" style={{ marginBottom: 20 }}>Strictly by Appointment</Eyebrow>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 12.6, color: "rgba(250,247,243,0.82)" }}>
              <span>The heart of Oxford</span>
              <a href={"tel:" + HOUSE.phone.replace(/\s/g, "")} style={{ color: "inherit", textDecoration: "none" }}>T · {HOUSE.phone}</a>
              <a href={"tel:" + HOUSE.mobile.replace(/\s/g, "")} style={{ color: "inherit", textDecoration: "none" }}>M · {HOUSE.mobile}</a>
              <a href={"mailto:" + HOUSE.email} style={{ color: "inherit", textDecoration: "none" }}>{HOUSE.email}</a>
            </div>
            <div style={{ display: "flex", gap: 18, marginTop: 22 }}>
              {HOUSE.social.map(([n, u]) => (
                <a key={n} href={u} target="_blank" rel="noreferrer" style={{ fontFamily: "var(--font-sans)", fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--bb-stone)", textDecoration: "none" }}>{n}</a>
              ))}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, paddingTop: 28, fontFamily: "var(--font-sans)", fontSize: 10.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--bb-stone)" }}>
          <span>© {new Date().getFullYear()} The Bridal Box · Oxford · By appointment only</span>
          <a href={HOUSE.carHire[1]} target="_blank" rel="noreferrer" style={{ color: "var(--bb-stone)", textDecoration: "none" }}>{HOUSE.carHire[0]} ↗</a>
        </div>
      </div>
    </footer>
  );
}
