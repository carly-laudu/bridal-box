import React from "react";
import { Tag, Reveal } from "./primitives.jsx";

/* ============ SlotImg, fallback for product photography not yet supplied ============ */
function SlotImg({ placeholder = "Drop photography", style = {} }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%",
      background: "var(--bb-paper-warm)", color: "var(--text-muted)", fontFamily: "var(--font-sans)", fontSize: 11,
      letterSpacing: "0.18em", textTransform: "uppercase", textAlign: "center", padding: 16, ...style }}>
      {placeholder}
    </div>
  );
}

/* ============ ProductCard, real photography (hover-reveal back view) or slot ============ */
export function ProductCard({ item, go, ratio = "3 / 4", showPrice = false }) {
  const [h, setH] = React.useState(false);
  const real = !!item.front;
  const viewLabel = /accessor/i.test(item.collection) ? "View" : "View the dress";
  const nav = go ? () => go("detail", item) : undefined;
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ transform: h ? "translateY(-4px)" : "none", transition: "transform var(--dur-base) var(--ease-out)" }}>
      <div onClick={real ? nav : undefined}
        style={{ position: "relative", aspectRatio: ratio, overflow: "hidden", background: "var(--bb-paper-warm)",
          borderRadius: "var(--radius-sm)", boxShadow: h ? "var(--shadow-card)" : "none", transition: "box-shadow var(--dur-base)", cursor: real && go ? "pointer" : "default" }}>
        {real ? (
          <React.Fragment>
            <img src={item.front} alt={item.name} loading="lazy"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
            {item.back && item.back !== item.front && (
              <img src={item.back} alt="" aria-hidden="true" loading="lazy"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center",
                  opacity: h ? 1 : 0, transition: "opacity var(--dur-slow) var(--ease-out)" }} />
            )}
            <span style={{ position: "absolute", left: 0, right: 0, bottom: 0, textAlign: "center", fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--bb-paper)", padding: 16, background: "linear-gradient(to top, rgba(20,17,14,0.55), transparent)", opacity: h ? 1 : 0, transform: h ? "translateY(0)" : "translateY(6px)", transition: "all var(--dur-base) var(--ease-out)", zIndex: 2 }}>{viewLabel}</span>
          </React.Fragment>
        ) : (
          <SlotImg placeholder={item.name} />
        )}
        {(item.sample || item.price) && <span style={{ position: "absolute", top: 12, left: 12, zIndex: 3 }}><Tag variant="solid">Sample Sale</Tag></span>}
      </div>
      <div style={{ paddingTop: 16 }}>
        <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 8 }}>{item.collection}</div>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: 26, lineHeight: 1.05, color: "var(--bb-ink)" }}>{item.name}</div>
          {showPrice && item.price && <div style={{ fontFamily: "var(--font-serif)", fontSize: 20, color: "var(--bb-ink)" }}>{item.price}</div>}
        </div>
        <div style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 12.6, color: "var(--text-muted)", marginTop: 4 }}>{item.detail}</div>
        {go && (
          <button onClick={nav} onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.55)} onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
            style={{ marginTop: 14, background: "none", border: "none", padding: "2px 0", cursor: "pointer", borderBottom: "1px solid var(--bb-ink)",
              fontFamily: "var(--font-sans)", fontSize: 10.5, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--bb-ink)", transition: "opacity var(--dur-base)" }}>{viewLabel}</button>
        )}
      </div>
    </div>
  );
}

export { SlotImg };
