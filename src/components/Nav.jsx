import React from "react";
import { Button } from "./primitives.jsx";
import { NAV_PRIMARY } from "../data.js";

/* ============ Navigation ============ */
export function Nav({ go, current, scrolled }) {
  const [open, setOpen] = React.useState(false);
  const dark = !scrolled && current === "home";
  const ink = dark ? "var(--bb-paper)" : "var(--bb-ink)";
  const links = NAV_PRIMARY;
  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 60,
      background: dark ? "transparent" : "var(--bb-paper)",
      borderBottom: dark ? "1px solid transparent" : "1px solid var(--border-hairline)",
      transition: "background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", height: 78, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button onClick={() => go("home")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", padding: 0 }} aria-label="The Bridal Box, home">
          <img src={dark ? "/assets/logos/full-logo-white.svg" : "/assets/logos/full-logo-black.svg"} alt="The Bridal Box" style={{ height: 50, width: "auto", display: "block", transition: "opacity var(--dur-base)" }} />
        </button>
        <nav style={{ display: "flex", gap: 22, alignItems: "center" }}>
          {links.map(([id, label, sub]) => sub ? (
            <div key={id} style={{ position: "relative" }} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
              <NavLink active={["gowns", "pronovias", "richard", "sale", "alterations"].includes(current)} ink={ink} onClick={() => go(id)} caret>{label}</NavLink>
              <div style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", paddingTop: 14, opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none", transition: "opacity var(--dur-base)" }}>
                <div style={{ background: "var(--bb-paper)", border: "1px solid var(--border-hairline)", boxShadow: "var(--shadow-card)", minWidth: 220, padding: "10px 0" }}>
                  {[["gowns", "All Gowns"], ...sub].map(([sid, slabel]) => (
                    <button key={sid} onClick={() => { setOpen(false); go(sid); }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bb-blush)")} onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                      style={{ display: "block", width: "100%", textAlign: "left", background: "transparent", border: "none", cursor: "pointer", padding: "11px 24px",
                        fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--bb-ink)", transition: "background var(--dur-fast)" }}>{slabel}</button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <NavLink key={id} active={current === id} ink={ink} onClick={() => go(id)}>{label}</NavLink>
          ))}
          <Button size="sm" variant={dark ? "blush" : "primary"} onClick={() => go("contact")} style={{ marginLeft: 6 }}>Visit</Button>
        </nav>
      </div>
    </header>
  );
}

function NavLink({ children, active, ink, onClick, caret }) {
  const [h, setH] = React.useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ background: "none", border: "none", cursor: "pointer", padding: "4px 0", position: "relative", display: "inline-flex", alignItems: "center", gap: 6,
        fontFamily: "var(--font-sans)", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", whiteSpace: "nowrap",
        color: ink, opacity: active || h ? 1 : 0.72, transition: "opacity var(--dur-base)" }}>
      {children}
      {caret && <span style={{ fontSize: 8, opacity: 0.7 }}>▾</span>}
      <span style={{ position: "absolute", left: 0, bottom: -3, height: 1, width: active || h ? "100%" : 0, background: "currentColor", transition: "width var(--dur-base) var(--ease-out)" }} />
    </button>
  );
}
