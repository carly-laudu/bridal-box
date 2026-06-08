import React from "react";

/* ============ Eyebrow ============ */
export function Eyebrow({ children, tone = "var(--text-muted)", withRule = false, align = "left", style = {} }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.9em", justifyContent: align === "center" ? "center" : "flex-start",
      fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: tone, ...style }}>
      {withRule && <span style={{ width: 30, height: 1, background: "currentColor", opacity: 0.5 }} />}
      <span>{children}</span>
    </div>
  );
}

/* ============ Button ============ */
export function Button({ children, variant = "primary", size = "md", onClick, style = {} }) {
  const [h, setH] = React.useState(false);
  const sizes = { sm: ["9px 18px", 11, "0.2em"], md: ["14px 30px", 12, "0.24em"], lg: ["18px 42px", 13, "0.26em"] }[size];
  const variants = {
    primary: { background: h ? "var(--action-fill-hover)" : "var(--bb-ink)", color: "var(--bb-paper)", border: "1px solid var(--bb-ink)" },
    ghost: { background: h ? "var(--bb-blush-deep)" : "transparent", color: "var(--bb-ink)", border: "1px solid var(--bb-ink)" },
    blush: { background: h ? "var(--bb-blush-shadow)" : "var(--bb-blush-deep)", color: "var(--bb-ink)", border: "1px solid var(--bb-blush-deep)" },
    text: { background: "transparent", color: "var(--bb-ink)", borderBottom: "1px solid var(--bb-ink)", opacity: h ? 0.6 : 1 },
  };
  return (
    <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ fontFamily: "var(--font-sans)", fontWeight: 400, textTransform: "uppercase", letterSpacing: sizes[2], fontSize: sizes[1],
        padding: variant === "text" ? "4px 0" : sizes[0], borderRadius: variant === "text" ? 0 : "var(--radius-md)", cursor: "pointer",
        transform: h && variant !== "text" ? "translateY(-1px)" : "none", transition: "all var(--dur-base) var(--ease-out)",
        display: "inline-flex", alignItems: "center", gap: "0.6em", whiteSpace: "nowrap", ...variants[variant], ...style }}>
      {children}
    </button>
  );
}

/* ============ Tag ============ */
export function Tag({ children, variant = "outline", style = {} }) {
  const v = {
    outline: { border: "1px solid var(--border-on-blush)", color: "var(--text-secondary)", background: "transparent" },
    solid: { border: "1px solid var(--bb-ink)", color: "var(--bb-paper)", background: "var(--bb-ink)" },
    blush: { border: "1px solid var(--bb-blush-deep)", color: "var(--bb-ink)", background: "var(--bb-blush-deep)" },
  }[variant];
  return (
    <span style={{ fontFamily: "var(--font-sans)", fontSize: 9.5, letterSpacing: "0.22em", textTransform: "uppercase",
      padding: "5px 11px", borderRadius: "var(--radius-pill)", display: "inline-block", ...v, ...style }}>{children}</span>
  );
}

/* ============ Reveal, slow editorial fade-up on scroll ============ */
const REDUCED = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
export function Reveal({ children, delay = 0, y = 28, as = "div", style = {} }) {
  const ref = React.useRef(null);
  // Visible by default (safe for print/export); we only HIDE + animate things below the fold.
  const [seen, setSeen] = React.useState(true);
  const [armed, setArmed] = React.useState(false);
  React.useLayoutEffect(() => {
    if (REDUCED || !ref.current) return;
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || 800;
    if (r.top > vh * 0.9) { setSeen(false); setArmed(true); }
  }, []);
  React.useEffect(() => {
    if (!armed || !ref.current) return;
    const el = ref.current;
    let done = false;
    const reveal = () => { if (!done) { done = true; setSeen(true); cleanup(); } };
    const check = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      if (r.top < vh * 0.94 && r.bottom > 0) reveal();
    };
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) reveal(); }),
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
    io.observe(el);
    // Reliable reveal tied to actual scroll position (capture-phase catches the inner scroller).
    window.addEventListener("scroll", check, true);
    window.addEventListener("resize", check);
    // Ultimate backstop: content can never stay invisible.
    const t = setTimeout(reveal, 4000);
    function cleanup() {
      io.disconnect();
      window.removeEventListener("scroll", check, true);
      window.removeEventListener("resize", check);
      clearTimeout(t);
    }
    check();
    return cleanup;
  }, [armed]);
  const Tag2 = as;
  return (
    <Tag2 ref={ref} style={{ opacity: seen ? 1 : 0, transform: seen ? "none" : `translateY(${y}px)`,
      transition: `opacity var(--dur-veil) var(--ease-out) ${delay}ms, transform var(--dur-veil) var(--ease-out) ${delay}ms`, ...style }}>
      {children}
    </Tag2>
  );
}

/* ============ Grain — editorial film grain over mood/hero imagery ============ */
export function Grain() { return <div className="bb-grain" aria-hidden="true" />; }
