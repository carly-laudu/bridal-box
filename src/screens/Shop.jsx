import React from "react";
import { Reveal, Eyebrow, Button } from "../components/primitives.jsx";
import { PageHero } from "../components/PageHero.jsx";
import { ProductCard, SlotImg } from "../components/ProductCard.jsx";
import { PRONOVIAS, RICHARD, SALE, MOB, ACCESSORIES } from "../data.js";
import { pad } from "./helpers.js";

/* ============ Reusable category template ============ */
function CategoryPage({ go, t, eyebrow, title, heroPhoto = "couple-bw.jpg", intro, items, columns = 3, ratio = "3 / 4", showPrice = false, footnote }) {
  const P = pad(t);
  return (
    <div style={{ background: "var(--bb-paper)" }}>
      <PageHero eyebrow={eyebrow} title={title} photo={heroPhoto} bw={!(t && t.colourPhotos)} />
      {intro && (
        <section style={{ maxWidth: 720, margin: "0 auto", padding: `${P}px 40px 0`, textAlign: "center" }}>
          <Reveal><p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 16.2, lineHeight: 1.8, color: "var(--text-secondary)", margin: 0, textWrap: "pretty" }}>{intro}</p></Reveal>
        </section>
      )}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: `${intro ? 64 : P}px 40px ${P}px` }}>
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: 32 }}>
          {items.map((d, i) => <Reveal key={d.slug || d.slot} delay={(i % columns) * 90}><ProductCard item={d} go={go} ratio={ratio} showPrice={showPrice} /></Reveal>)}
        </div>
        {footnote && <Reveal><p style={{ textAlign: "center", marginTop: 56, fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 12.6, color: "var(--text-muted)", letterSpacing: "0.04em" }}>{footnote}</p></Reveal>}
        <div style={{ textAlign: "center", marginTop: 64 }}><Reveal><Button size="lg" onClick={() => go("contact")}>Book a fitting</Button></Reveal></div>
      </section>
    </div>
  );
}

/* ============ Bridal Gowns, designer landing ============ */
export function Gowns({ go, t }) {
  const P = pad(t);
  const designers = [
    { id: "pronovias", name: "Pronovias", blurb: "The celebrated Barcelona house, architectural silhouettes, exquisite Spanish lace and an unmistakable sense of drama. The label brides travel for.", photo: PRONOVIAS[4].front, count: PRONOVIAS.length },
    { id: "richard", name: "Richard Designs", blurb: "British romance, beautifully made, soft tulle, delicate appliqué and flattering fits, with a quiet attention to detail that brides return for.", photo: RICHARD[6].front, count: RICHARD.length },
  ];
  return (
    <div style={{ background: "var(--bb-paper)" }}>
      <PageHero eyebrow="The Collection" title="Bridal Gowns" photo="bride-editorial.jpg" bw={!(t && t.colourPhotos)} />
      <section style={{ maxWidth: 720, margin: "0 auto", padding: `${P}px 40px ${P - 30}px`, textAlign: "center" }}>
        <Reveal><Eyebrow align="center" withRule style={{ justifyContent: "center", marginBottom: 26 }}>Our Designers</Eyebrow></Reveal>
        <Reveal delay={80}><p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem, 2.8vw, 2.3rem)", lineHeight: 1.3, color: "var(--bb-ink)", margin: 0 }}>
          A considered, ever-changing selection that differs from any other boutique, chosen for cut, fabric and feeling.
        </p></Reveal>
      </section>

      {designers.map((d, i) => (
        <section key={d.id} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 540, borderTop: "1px solid var(--border-hairline)" }}>
          <div style={{ order: i % 2 === 0 ? 1 : 2, position: "relative", overflow: "hidden", background: "var(--bb-paper-warm)", minHeight: 440 }}>
            <img src={d.photo} alt={d.name} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
          </div>
          <div style={{ order: i % 2 === 0 ? 2 : 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px clamp(40px, 6vw, 92px)", background: i % 2 === 0 ? "var(--bb-paper)" : "var(--bb-blush)" }}>
            <Reveal><Eyebrow tone="var(--bb-ink-muted)" style={{ marginBottom: 20 }}>{d.count} styles in studio</Eyebrow></Reveal>
            <Reveal delay={70}><h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.4rem, 4vw, 3.6rem)", margin: "0 0 22px", color: "var(--bb-ink)" }}>{d.name}</h2></Reveal>
            <Reveal delay={130}><p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 15.3, lineHeight: 1.8, color: "var(--text-secondary)", maxWidth: 440, margin: "0 0 34px", textWrap: "pretty" }}>{d.blurb}</p></Reveal>
            <Reveal delay={190}><div><Button onClick={() => go(d.id)}>View {d.name}</Button></div></Reveal>
          </div>
        </section>
      ))}

      <section style={{ background: "var(--bb-ink)", color: "var(--bb-paper)", padding: `${P}px 40px`, textAlign: "center" }}>
        <Reveal><Eyebrow align="center" tone="var(--bb-stone)" style={{ justifyContent: "center", marginBottom: 18 }}>Also in store</Eyebrow></Reveal>
        <Reveal delay={70}><h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.9rem, 3.4vw, 2.8rem)", margin: "0 0 30px", color: "var(--bb-paper)" }}>Sample sale · Mother of the bride · Accessories</h2></Reveal>
        <Reveal delay={130}><div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="blush" onClick={() => go("sale")}>Sample Sale</Button>
          <Button variant="ghost" onClick={() => go("mob")} style={{ color: "var(--bb-paper)", borderColor: "var(--bb-paper)" }}>Mother of the Bride</Button>
          <Button variant="ghost" onClick={() => go("accessories")} style={{ color: "var(--bb-paper)", borderColor: "var(--bb-paper)" }}>Accessories</Button>
        </div></Reveal>
      </section>
    </div>
  );
}

/* ============ Designer & category pages ============ */
export function Pronovias({ go, t }) {
  return <CategoryPage go={go} t={t} eyebrow="Designer · Barcelona" title="Pronovias" heroPhoto="bride-editorial.jpg"
    intro="The celebrated Spanish house, renowned for architectural silhouettes and exquisite lace. Each Pronovias gown is ordered to your measurements and fitted in studio, try the samples on and we'll find your size together."
    items={PRONOVIAS} />;
}
export function Richard({ go, t }) {
  return <CategoryPage go={go} t={t} eyebrow="Designer · British" title="Richard Designs" heroPhoto="couple-portrait.jpg"
    intro="British romance, beautifully made, soft tulle, delicate appliqué and genuinely flattering fits. A favourite for brides who want something pretty, comfortable and quietly individual."
    items={RICHARD} />;
}
export function Sale({ go, t }) {
  return <CategoryPage go={go} t={t} eyebrow="Limited · One of a kind" title="Sample Sale" heroPhoto="veil-detail-bw.jpg"
    intro="Beautiful sample and ex-display gowns at a gentle price, each one unique, ready to take home and made to fit with our in-house alterations. When they're gone, they're gone."
    items={SALE} showPrice footnote="Sample gowns are sold as seen and reserved with a deposit. Sizes and prices vary, please call to check availability." />;
}
export function MotherOfBride({ go, t }) {
  return <CategoryPage go={go} t={t} eyebrow="For the Mother of the Bride" title="Mother of the Bride" heroPhoto="reception-tablescape.jpg"
    intro="Elegant occasion-wear for the mother of the bride and groom, considered colour, beautiful tailoring and the same unhurried fitting service we give every bride."
    items={MOB} columns={4} ratio="3 / 4" />;
}
export function Accessories({ go, t }) {
  return <CategoryPage go={go} t={t} eyebrow="The Finishing Touch" title="Accessories" heroPhoto="veil-detail-bw.jpg"
    intro="Veils, tiaras, belts, boleros, jewellery and shoes to complete your look, styled with your gown so everything sits together perfectly on the day."
    items={ACCESSORIES} columns={4} ratio="3 / 4" />;
}

/* ============ Dress detail ============ */
export function Detail({ go, t, item }) {
  const d = item || PRONOVIAS[0];
  const [size, setSize] = React.useState("");
  return (
    <div style={{ background: "var(--bb-paper)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "118px 40px 28px" }}>
        <button onClick={() => go("gowns")} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)" }}>← Back to gowns</button>
      </div>
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "8px 40px 110px", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64, alignItems: "start" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {d.front ? (
            (() => {
              const imgs = [d.front, d.back, d.view3].filter((v, i, a) => v && a.indexOf(v) === i);
              return imgs.map((src, i) => (
                <div key={src} style={{ gridColumn: i === 0 ? "1 / -1" : "auto", aspectRatio: i === 0 ? "4 / 5" : "3 / 4", overflow: "hidden", borderRadius: "var(--radius-sm)", background: "var(--bb-paper-warm)" }}>
                  <img src={src} alt={i === 0 ? d.name + ", front" : ""} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
                </div>
              ));
            })()
          ) : (
            <React.Fragment>
              <div style={{ gridColumn: "1 / -1", aspectRatio: "4 / 5", overflow: "hidden", borderRadius: "var(--radius-sm)", background: "var(--bb-paper-warm)" }}>
                <SlotImg placeholder={d.name + ", front"} />
              </div>
              <div style={{ aspectRatio: "1", overflow: "hidden", borderRadius: "var(--radius-sm)", background: "var(--bb-paper-warm)" }}>
                <SlotImg placeholder="Detail" />
              </div>
              <div style={{ aspectRatio: "1", overflow: "hidden", borderRadius: "var(--radius-sm)", background: "var(--bb-paper-warm)" }}>
                <SlotImg placeholder="Back" />
              </div>
            </React.Fragment>
          )}
        </div>
        <div style={{ position: "sticky", top: 110 }}>
          <Reveal><Eyebrow style={{ marginBottom: 18 }}>{d.collection}</Eyebrow></Reveal>
          <Reveal delay={60}><h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.6rem, 5vw, 4rem)", margin: "0 0 12px", color: "var(--bb-ink)" }}>{d.name}</h1></Reveal>
          <Reveal delay={110}><p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 16.2, color: "var(--text-secondary)", margin: "0 0 28px" }}>{d.detail}</p></Reveal>
          {d.price && <Reveal delay={140}><p style={{ fontFamily: "var(--font-serif)", fontSize: 26, color: "var(--bb-ink)", margin: "0 0 28px" }}>{d.price}</p></Reveal>}
          <Reveal delay={160}><p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 14.4, lineHeight: 1.8, color: "var(--text-secondary)", maxWidth: 440, margin: "0 0 32px", textWrap: "pretty" }}>
            Come and try {d.name} on in the studio. We'll pin it to you, talk through fabrics and lengths, and order your size to be fitted by hand across two or three calm appointments.
          </p></Reveal>
          <Reveal delay={190}>
            <div style={{ marginBottom: 30, maxWidth: 280 }}>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 12 }}>Sample size to try</div>
              <div style={{ display: "flex", gap: 8 }}>
                {["8", "10", "12", "14"].map((s) => (
                  <button key={s} onClick={() => setSize(s)} style={{ width: 46, height: 46, borderRadius: "var(--radius-md)", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 14,
                    border: "1px solid " + (size === s ? "var(--bb-ink)" : "var(--border-on-blush)"), background: size === s ? "var(--bb-ink)" : "transparent", color: size === s ? "var(--bb-paper)" : "var(--bb-ink)", transition: "all var(--dur-base)" }}>{s}</button>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={220}><div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Button size="lg" onClick={() => go("contact")}>Book to try on</Button>
            <Button variant="ghost" size="lg" onClick={() => go("contact")}>Ask a stylist</Button>
          </div></Reveal>
        </div>
      </section>
    </div>
  );
}
