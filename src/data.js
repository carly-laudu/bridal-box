/* The Bridal Box, content data (real specifics from the Oxford boutique, in brand voice) */

/* ---- House facts (verbatim from the boutique) ---- */
export const HOUSE = {
  name: "The Bridal Box",
  tagline: "For beautiful bridalwear",
  city: "Oxford",
  est: "1991",
  email: "thebridalbox@btinternet.com",
  phone: "01865 761333",
  mobile: "07720 969396",
  owner: "Dusanka",
  social: [
    ["Facebook", "https://www.facebook.com/thebridalboxoxfordshire"],
    ["Twitter", "https://twitter.com/BridalBoxOxford"],
    ["Instagram", "https://www.instagram.com/thebridalbox/"],
  ],
  carHire: ["Vintage Car Hire", "http://www.something-borrowed.uk/"],
};

/* ---- Navigation ---- */
export const NAV_PRIMARY = [
  ["about", "The House"],
  ["gowns", "Bridal Gowns", [
    ["pronovias", "Pronovias"],
    ["richard", "Richard Designs"],
    ["sale", "Sample Sale"],
    ["alterations", "Alterations & Fittings"],
  ]],
  ["mob", "Mother of the Bride"],
  ["accessories", "Accessories"],
  ["testimonials", "Brides"],
];

/* ---- Real gown lookbook ---- */
/* Photography supplied by the boutique. Each gown: front / back / detail views. */
const GOWN = "/assets/gowns/";
const gp = (f) => GOWN + f + "-400x571.jpg.jpeg";
/* build a gown record: [name, detail, frontFile, backFile?, detailFile?] */
const mkG = (collection, slugp, rows) =>
  rows.map((r, i) => ({
    collection, name: r[0], detail: r[1], slug: `${slugp}-${i + 1}`,
    front: gp(r[2]), back: r[3] ? gp(r[3]) : null, view3: r[4] ? gp(r[4]) : null,
  }));

export const PRONOVIAS = mkG("Pronovias", "pronovias", [
  ["Ajanta", "Sculpted lace, soft A-line", "AJANTA-B", "AJANTA-C", "AJANTA-D"],
  ["Antalya", "Convertible A-line over-skirt", "ANTALYA-C", "ANTALYA-D", "ANTALYA_A-Line_Skirt"],
  ["Asmara", "Floral lace, sheer bodice", "ASMARA-B-1", "ASMARA-C-1", "ASMARA-D-1"],
  ["Bayon", "Beaded straps, fluid crêpe", "BAYON-B-1", "BAYON-C-1", "BAYON-D-1"],
  ["Betsy", "Long-sleeve crêpe, square neckline", "BETSY-B-1", "BETSY-C", "BETSY-D"],
  ["Bloom", "Floral appliqué, soft A-line", "BLOOM-B-1", "BLOOM-C2-1", "BLOOM-D-1"],
  ["Bryce", "Strapless lace, fit-and-flare", "BRYCE-B", "BRYCE-C", "BRYCE-D"],
  ["Cathy", "Beaded lace mermaid", "CATHY-B", "CATHY-C", "CATHY-D"],
  ["Danxia", "Sleek satin, open back", "DANXIA-B", "DANXIA-D", "DANXIA-B2"],
  ["Elara", "Draped V-neck, soft chiffon", "ELARA-B", "ELARA-C"],
  ["Farrah", "Off-shoulder beaded ballgown", "FARRAH-A-1", "FARRAH-D1", "FARRAH-B"],
  ["Fianna", "Romantic tulle, lace bodice", "FIANNA-C"],
  ["Hopkins", "Sheath with illusion back", "HOPKINS-A1", "HOPKINS-B1", "HOPKINS-C1"],
  ["Kit", "Star tulle, deep V-neck", "KIT-A-1", "KIT-B-1", "KIT-C-1"],
  ["Kodiak", "High neck, beaded crêpe", "KODIAK-B-1", "KODIAK-C-1", "KODIAK-D-1"],
  ["Komodo", "Off-shoulder, floral bodice", "KOMODO-B", "KOMODO-D", "KOMODO-D2"],
  ["Makena", "Strapless lace mermaid", "MAKENA-B", "MAKENA-C", "MAKENA-D"],
  ["Nihi", "Pearl halter, beaded keyhole", "NIHI-B-1-1", "NIHI-C-1-1", "NIHI-D-1-1"],
  ["Nikita", "Off-shoulder tulle, soft slit", "NIKITA-B", "NIKITA-C", "NIKITA-D"],
  ["Sondong", "Pearl halter, fluid crêpe", "SONDONG-A", "SONDONG-B", "SONDONG-C"],
  ["Tianzi", "Beaded high neck, cap sleeve", "TIANZI-C"],
  ["Adrienne", "V-neck, draped waist", "adrienne-b-becd88ae", "adrienne-c-33aa85e7", "adrienne-d-2781661c"],
]);

export const RICHARD = mkG("Richard Designs", "richard", [
  ["Posy", "Off-shoulder floral A-line", "POSY-1315-1"],
  ["Primrose", "Sheer corset bodice, soft slip", "PRIMROSE-1326-1"],
  ["Livvy", "V-neck bodice, tulle skirt", "LIVVY-1307-2"],
  ["Alessia", "Chiffon column, V-neck", "ALESSIA-1330-1"],
  ["Carli", "V-neck, ruched waist", "CARLI-1219-1"],
  ["Jewel", "Bateau neckline, crêpe sheath", "JEWEL-1"],
  ["Layla", "Off-shoulder tulle ballgown", "LAYLA-1"],
]);

/* ---- Sample Sale (real photography, sold as seen) ---- */
const saleP = (f) => "/assets/sale/" + f;
export const SALE = [
  { collection: "Sample Sale", name: "The Bridal Suit", detail: "Pronovias · peplum jacket & trouser", slug: "sale-1", front: saleP("ashley-jacket.jpg"), back: saleP("ashley-suit.jpg"), sample: true },
  { collection: "Sample Sale", name: "Bromo", detail: "Pronovias · beaded crêpe", slug: "sale-2", front: saleP("bromo.jpg"), back: null, sample: true },
  { collection: "Sample Sale", name: "Efigie", detail: "Pronovias · sculpted satin", slug: "sale-3", front: saleP("efigie.jpg"), back: null, sample: true },
  { collection: "Sample Sale", name: "Sondong", detail: "Pronovias · pearl halter crêpe", slug: "sale-4", front: saleP("sondong.jpg"), back: null, sample: true },
  { collection: "Sample Sale", name: "Bryce", detail: "Pronovias · strapless lace", slug: "sale-5", front: saleP("bryce.jpg"), back: null, sample: true },
  { collection: "Sample Sale", name: "Ajanta", detail: "Pronovias · sculpted lace A-line", slug: "sale-6", front: saleP("ajanta.jpg"), back: null, sample: true },
  { collection: "Sample Sale", name: "Cathy", detail: "Pronovias · beaded lace mermaid", slug: "sale-7", front: saleP("cathy.jpg"), back: null, sample: true },
  { collection: "Sample Sale", name: "Komodo", detail: "Pronovias · off-shoulder floral", slug: "sale-8", front: saleP("komodo.jpg"), back: null, sample: true },
];

/* ---- Mother of the Bride (real occasion-wear photography) ---- */
const mobP = (f) => "/assets/mob/" + f;
export const MOB = [
  { collection: "Mother of the Bride", name: "Cornflower", detail: "Embellished bodice, full skirt", slug: "mob-1", front: mobP("cornflower-f.jpg"), back: mobP("cornflower-b.jpg") },
  { collection: "Mother of the Bride", name: "Platinum Satin", detail: "Wrap bodice, tea-length", slug: "mob-2", front: mobP("platinum1212-f.jpg"), back: null },
  { collection: "Mother of the Bride", name: "Royal Blue Chiffon", detail: "Flutter sleeve, corsage waist", slug: "mob-3", front: mobP("royal1218-f.jpg"), back: mobP("royal1218-b.jpg") },
  { collection: "Mother of the Bride", name: "Silver Lace", detail: "Lace bodice, full skirt", slug: "mob-4", front: mobP("platinum1191-f.jpg"), back: mobP("platinum1191-b.jpg") },
  { collection: "Mother of the Bride", name: "Eucalyptus Lace", detail: "Sheer-sleeve lace, A-line", slug: "mob-5", front: mobP("eucalyptus1264-f.jpg"), back: mobP("eucalyptus1264-b.jpg") },
  { collection: "Mother of the Bride", name: "Navy Lace", detail: "Sheer-sleeve, satin skirt", slug: "mob-6", front: mobP("navy1265-f.jpg"), back: mobP("navy1265-b.jpg") },
  { collection: "Mother of the Bride", name: "Dusky Pink", detail: "Soft chiffon, fluted sleeve", slug: "mob-7", front: mobP("duskypink-f.jpg"), back: null },
  { collection: "Mother of the Bride", name: "Royal Blue Satin", detail: "Wrap bodice, corsage", slug: "mob-8", front: mobP("royal1191-f.jpg"), back: null },
  { collection: "Mother of the Bride", name: "Plum Chiffon", detail: "Flutter sleeve, full skirt", slug: "mob-9", front: mobP("plum-f.jpg"), back: null },
  { collection: "Mother of the Bride", name: "Midnight Blue", detail: "Beaded waist, fluid skirt", slug: "mob-10", front: mobP("midnight-f.jpg"), back: null },
  { collection: "Mother of the Bride", name: "Eucalyptus Satin", detail: "Two-piece, A-line skirt", slug: "mob-11", front: mobP("eucalyptus1280-f.jpg"), back: null },
  { collection: "Mother of the Bride", name: "Mint Two-Piece", detail: "Lace top, soft skirt", slug: "mob-12", front: mobP("mint-f.jpg"), back: null },
];

/* ---- Accessories (real photography) ---- */
const accP = (f) => "/assets/accessories/" + f;
export const ACCESSORIES = [
  { collection: "Accessories", name: "Cathedral Veil", detail: "Soft tulle, raw edge", slug: "acc-1", front: accP("veil-t1.jpg"), back: null },
  { collection: "Accessories", name: "Chapel Veil", detail: "Single tier, fingertip", slug: "acc-2", front: accP("veil-twilight.jpg"), back: null },
  { collection: "Accessories", name: "Blusher Veil", detail: "Two tier, gathered", slug: "acc-3", front: accP("veil-tw2.jpg"), back: null },
  { collection: "Accessories", name: "Crystal Comb", detail: "Floral crystal spray", slug: "acc-4", front: accP("comb-3062.jpg"), back: null },
  { collection: "Accessories", name: "Pearl Comb", detail: "Pearl & crystal cluster", slug: "acc-5", front: accP("comb-3080.jpg"), back: null },
  { collection: "Accessories", name: "Hair Vine", detail: "Pearl & crystal vine", slug: "acc-6", front: accP("vine-3163.jpg"), back: null },
  { collection: "Accessories", name: "Floral Headpiece", detail: "Crystal flower comb", slug: "acc-7", front: accP("comb-3124.jpg"), back: null },
  { collection: "Accessories", name: "Gold Vine", detail: "Pearl & leaf, gold tone", slug: "acc-8", front: accP("comb-3124b.png"), back: null },
];

/* ---- Curated testimonials (real brides, as editorial pull-quotes) ---- */
export const TESTIMONIALS = [
  { heading: "I felt like a princess", quote: "Thank you so much for my amazing dress, I felt like a princess. My dress fitted like a glove and was so very comfortable.", name: "Laura-May" },
  { heading: "The best I have ever felt", quote: "I cannot thank you enough for making my wedding dress shopping and fitting some of the best days of my life. You made me feel the best I have ever felt, I am so in love with my dress.", name: "Fleur" },
  { heading: "What a difference", quote: "You made me feel special and I didn't realise what a difference that could make until I visited other bridal shops. We had the most perfect day.", name: "Charlotte" },
  { heading: "So so talented", quote: "You have really made this the best experience ever. Your friendliness and professionalism is second to none, I am absolutely in love with my dress.", name: "Lauren" },
  { heading: "Out of this world", quote: "Wow, my dream was just out of this world. I felt amazing all day. I can't thank you enough for all your kindness, support and hard work.", name: "Georgia Clark" },
  { heading: "Truly beautiful", quote: "Thank you so much for making my wedding dress shopping so perfect, and for the most truly beautiful dress.", name: "Beth" },
  { heading: "Elegant", quote: "I felt so elegant on my wedding day. I couldn't have chosen a more perfect dress and would like to thank you for all the reassurance, the patience and the fun we had in your shop.", name: "Emma Dodds" },
  { heading: "Like a glove", quote: "Thank you for working so hard to make my dress fit me perfectly. I got so many compliments, I will never forget how helpful you all were.", name: "Jen Burford" },
];

/* ---- About copy (verbatim three movements) ---- */
export const ABOUT = [
  {
    heading: "We've been here for over thirty years",
    body: "The Bridal Box has been established for over thirty years and has provided all our brides with an amazing experience in helping them choose their wedding gown. We have a highly skilled team of bridal stylists with the expertise required to advise and help you select the perfect gown for your special day. The Bridal Box is well renowned for having a selection of dresses that differs from any other bridal boutique.",
  },
  {
    heading: "We cover off lots of styles",
    body: "With styles to suit all manner of weddings, from traditional church weddings to informal ceremonies, our aim is to provide beautiful wedding gowns with the highest level of service. The Bridal Box is widely renowned for the quality and fit of its dresses, and prides itself on excellent customer service.",
  },
  {
    heading: "We care about our customers",
    body: "It is important to us that you enjoy your experience, from your first visit to the final fitting. You can be assured that you will be personally supervised throughout by our experienced staff to help you find the dress of your dreams.",
  },
];
