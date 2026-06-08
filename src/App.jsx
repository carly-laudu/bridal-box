import React from "react";
import { Nav } from "./components/Nav.jsx";
import { Footer } from "./components/Footer.jsx";
import { Home } from "./screens/Home.jsx";
import { About } from "./screens/About.jsx";
import { Gowns, Pronovias, Richard, Sale, MotherOfBride, Accessories, Detail } from "./screens/Shop.jsx";
import { Testimonials, Alterations, Contact } from "./screens/Info.jsx";

/* Brand defaults, as settled in design review: full-bleed B&W hero,
   all-caps headlines, monochrome editorial photography, editorial rhythm. */
const TWEAKS = { hero: "bw", headline: "caps", colourPhotos: false, density: "editorial" };

export default function App() {
  const [route, setRoute] = React.useState({ name: "home", data: null });
  const [scrolled, setScrolled] = React.useState(false);
  const scrollerRef = React.useRef(null);

  const go = (name, data = null) => {
    setRoute({ name, data });
    if (scrollerRef.current) scrollerRef.current.scrollTop = 0;
    setScrolled(false);
  };
  const onScroll = (e) => setScrolled(e.target.scrollTop > 40);

  const screens = {
    home: <Home go={go} t={TWEAKS} />,
    about: <About go={go} t={TWEAKS} />,
    gowns: <Gowns go={go} t={TWEAKS} />,
    pronovias: <Pronovias go={go} t={TWEAKS} />,
    richard: <Richard go={go} t={TWEAKS} />,
    sale: <Sale go={go} t={TWEAKS} />,
    mob: <MotherOfBride go={go} t={TWEAKS} />,
    accessories: <Accessories go={go} t={TWEAKS} />,
    detail: <Detail go={go} t={TWEAKS} item={route.data} />,
    testimonials: <Testimonials go={go} t={TWEAKS} />,
    alterations: <Alterations go={go} t={TWEAKS} />,
    contact: <Contact go={go} t={TWEAKS} />,
  };
  const showFooter = route.name !== "contact";

  return (
    <div ref={scrollerRef} onScroll={onScroll} className="scroller"
      style={{ height: "100vh", overflowY: "auto", overflowX: "hidden", background: "var(--bb-paper)" }}>
      <Nav go={go} current={route.name} scrolled={scrolled} />
      <main key={route.name}>{screens[route.name] || screens.home}</main>
      {showFooter && <Footer go={go} />}
    </div>
  );
}
