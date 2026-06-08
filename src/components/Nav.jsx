import React from "react";
import { Button } from "./primitives.jsx";
import { Monogram } from "./Monogram.jsx";
import { NAV_PRIMARY, HOUSE } from "../data.js";

/* ============ Navigation ============ */
export function Nav({ go, current, scrolled }) {
  const [open, setOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const dark = !scrolled && current === "home" && !mobileOpen;
  const ink = dark ? "var(--bb-paper)" : "var(--bb-ink)";
  const links = NAV_PRIMARY;

  const goAndClose = (id, data) => { setMobileOpen(false); go(id, data); };

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 60,
      background: dark ? "transparent" : "var(--bb-paper)",
      borderBottom: dark ? "1px solid transparent" : "1px solid var(--border-hairline)",
      transition: "background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", height: 78, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button onClick={() => goAndClose("home")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", padding: 0 }} aria-label="The Bridal Box, home">
          <img src={dark ? "/assets/logos/full-logo-white.svg" : "/assets/logos/full-logo-black.svg"} alt="The Bridal Box" style={{ height: 50, width: "auto", display: "block", transition: "opacity var(--dur-base)" }} />
        </button>

        <nav className="bb-nav-links">
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

        <button className="bb-nav-burger" onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 8, alignItems: "center", justifyContent: "center", zIndex: 70 }}>
          <BurgerIcon open={mobileOpen} tone={ink} />
        </button>
      </div>

      <MobileMenu open={mobileOpen} go={goAndClose} current={current} links={links} />
    </header>
  );
}

function BurgerIcon({ open, tone }) {
  const bar = { display: "block", width: 24, height: 1.5, background: tone, transition: "all var(--dur-base) var(--ease-out)" };
  return (
    <span style={{ display: "flex", flexDirection: "column", gap: 6, width: 24 }}>
      <span style={{ ...bar, transform: open ? "translateY(7.5px) rotate(45deg)" : "none" }} />
      <span style={{ ...bar, opacity: open ? 0 : 1 }} />
      <span style={{ ...bar, transform: open ? "translateY(-7.5px) rotate(-45deg)" : "none" }} />
    </span>
  );
}

/* ============ Mobile menu, full-screen overlay ============ */
function MobileMenu({ open, go, current, links }) {
  return (
    <div aria-hidden={!open} style={{
      position: "fixed", inset: "78px 0 0 0", zIndex: 65, background: "var(--bb-paper)",
      overflowY: "auto", display: "flex", flexDirection: "column",
      transform: open ? "translateY(0)" : "translateY(-12px)",
      opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none",
      transition: "opacity var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)",
    }}>
      <nav style={{ padding: "20px 40px 32px", display: "flex", flexDirection: "column" }}>
        {links.map(([id, label, sub]) => (
          <div key={id} style={{ borderBottom: "1px solid var(--border-hairline)" }}>
            <button onClick={() => go(id)}
              style={{ width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer", padding: "20px 0",
                fontFamily: "var(--font-serif)", fontSize: 24, color: current === id ? "var(--bb-ink)" : "var(--bb-ink-soft)" }}>{label}</button>
            {sub && (
              <div style={{ display: "flex", flexDirection: "column", paddingBottom: 16, gap: 4 }}>
                {[["gowns", "All Gowns"], ...sub].filter(([sid]) => sid !== id).map(([sid, slabel]) => (
                  <button key={sid} onClick={() => go(sid)}
                    style={{ textAlign: "left", background: "none", border: "none", cursor: "pointer", padding: "9px 0 9px 4px",
                      fontFamily: "var(--font-sans)", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-secondary)" }}>{slabel}</button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      <div style={{ marginTop: "auto", padding: "28px 40px 48px", display: "flex", flexDirection: "column", gap: 18 }}>
        <Button size="lg" onClick={() => go("contact")} style={{ justifyContent: "center" }}>Visit</Button>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 13, color: "var(--text-muted)" }}>
          <a href={"tel:" + HOUSE.mobile.replace(/\s/g, "")} style={{ color: "inherit", textDecoration: "none" }}>{HOUSE.mobile}</a>
          <a href={"mailto:" + HOUSE.email} style={{ color: "inherit", textDecoration: "none" }}>{HOUSE.email}</a>
        </div>
      </div>
    </div>
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
