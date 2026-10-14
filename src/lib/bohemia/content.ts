export const CONTACT = {
  phoneDisplay: "+52 322 139 9650",
  phoneWa: "523221399650",
  email: "contacto@labohemiaquartet.com",
  instagram: "https://www.instagram.com/labohemiaquartet_music",
  instagramHandle: "@labohemiaquartet_music",
  city: "Puerto Vallarta, Jal.",
} as const;

export const TRACKS = [
  {
    index: "01",
    title: "Cínica",
    note: "Material original",
    url: "https://open.spotify.com/track/413Dx6zDqP44aSnKlAnYke",
  },
  {
    index: "02",
    title: "Soy",
    note: "Material original",
    url: "https://open.spotify.com/track/52Gy5pL5ELxKB5lsF1YPxA",
  },
  {
    index: "03",
    title: "Fiebre de amor",
    note: "Material original",
    url: "https://open.spotify.com/track/4L3ot6z8V3yxV3hL2lUiX7",
  },
] as const;

export const GALLERY = [
  {
    src: "/bohemia/hero.jpg",
    alt: "Escenario vacío con guitarras, bajo y batería bajo una luz cálida",
    caption: "Sala",
    place: "Noche de hotel",
  },
  {
    src: "/bohemia/guitar.jpg",
    alt: "Detalle de guitarra electroacústica y micrófono vintage",
    caption: "Guitarra",
    place: "Primer plano",
  },
  {
    src: "/bohemia/terraza.jpg",
    alt: "Terraza nocturna frente al mar con luces y un escenario pequeño",
    caption: "Terraza",
    place: "Evento privado",
  },
  {
    src: "/bohemia/vino.jpg",
    alt: "Copa de vino, partitura y clavijas sobre madera oscura",
    caption: "Mesa",
    place: "Antes del set",
  },
  {
    src: "/bohemia/club.jpg",
    alt: "Batería y bajo en silueta dentro de un club oscuro",
    caption: "Club",
    place: "Sesión cerrada",
  },
] as const;

export const STYLES = [
  "Bohemio",
  "Jazz & Standards",
  "Pop latino",
  "Pop en inglés",
  "Cumbia acústica",
  "Material original",
] as const;

export type StyleName = (typeof STYLES)[number];

export type ShowStatus = "abierto" | "privado" | "confirmado";
export type ShowKind = "residencia" | "especial";
export type InquiryStatus = "nueva" | "en_curso" | "cerrada";

export type Show = {
  id: string;
  kind: ShowKind;
  when: string;
  title: string;
  venue: string;
  city: string;
  time: string;
  status: ShowStatus;
};

export type Musician = {
  id: string;
  name: string;
  role: string;
  instrument: string;
  mark: string;
};

export type Song = {
  id: string;
  title: string;
  style: StyleName;
};

export type Inquiry = {
  id: string;
  name: string;
  eventType: string;
  date: string;
  place: string;
  note: string;
  status: InquiryStatus;
  createdAt: string;
};

export const STATUS_LABEL: Record<ShowStatus, string> = {
  abierto: "Abierto",
  privado: "Privado",
  confirmado: "Confirmado",
};

export const INQUIRY_LABEL: Record<InquiryStatus, string> = {
  nueva: "Nueva",
  en_curso: "En curso",
  cerrada: "Cerrada",
};

export const seedShows: Show[] = [
  {
    id: "show-vie",
    kind: "residencia",
    when: "VIE · Semanal",
    title: "Noche bohemia",
    venue: "Sheraton Buganvilias",
    city: "Puerto Vallarta",
    time: "21:00 — 23:00",
    status: "abierto",
  },
  {
    id: "show-sab",
    kind: "residencia",
    when: "SÁB · Semanal",
    title: "Sesión acústica",
    venue: "Cristal Grand",
    city: "Puerto Vallarta",
    time: "20:00 — 23:00",
    status: "abierto",
  },
  {
    id: "show-nov",
    kind: "especial",
    when: "15 Nov",
    title: "Boda",
    venue: "Marina Vallarta",
    city: "Puerto Vallarta",
    time: "Privado",
    status: "confirmado",
  },
  {
    id: "show-dic",
    kind: "especial",
    when: "20 Dic",
    title: "Posada corporativa",
    venue: "Hotel Mousai",
    city: "Puerto Vallarta",
    time: "Privado",
    status: "privado",
  },
];

export const seedMusicians: Musician[] = [
  {
    id: "m-oscar",
    name: "Óscar Rosales",
    role: "Director musical",
    instrument: "Guitarra y voz",
    mark: "ÓR",
  },
  {
    id: "m-carlos",
    name: "Carlos Ledesma",
    role: "Voz",
    instrument: "Guitarra rítmica",
    mark: "CL",
  },
  {
    id: "m-alexis",
    name: "Alexis Macías Jr",
    role: "Bajo",
    instrument: "Bajo eléctrico",
    mark: "AM",
  },
  {
    id: "m-danny",
    name: "Dannyju",
    role: "Batería",
    instrument: "Batería",
    mark: "DJ",
  },
];

export const seedSongs: Song[] = [
  { id: "s1", title: "Bésame mucho", style: "Bohemio" },
  { id: "s2", title: "Contigo en la distancia", style: "Bohemio" },
  { id: "s3", title: "Sabor a mí", style: "Bohemio" },
  { id: "s4", title: "Fly me to the moon", style: "Jazz & Standards" },
  { id: "s5", title: "The girl from Ipanema", style: "Jazz & Standards" },
  { id: "s6", title: "Autumn leaves", style: "Jazz & Standards" },
  { id: "s7", title: "Corazón partío", style: "Pop latino" },
  { id: "s8", title: "De música ligera", style: "Pop latino" },
  { id: "s9", title: "La bicicleta", style: "Pop latino" },
  { id: "s10", title: "Perfect", style: "Pop en inglés" },
  { id: "s11", title: "Shallow", style: "Pop en inglés" },
  { id: "s12", title: "Can't help falling in love", style: "Pop en inglés" },
  { id: "s13", title: "La pollera colorá", style: "Cumbia acústica" },
  { id: "s14", title: "Cariñito", style: "Cumbia acústica" },
  { id: "s15", title: "Cómo te voy a olvidar", style: "Cumbia acústica" },
  { id: "s16", title: "Cínica", style: "Material original" },
  { id: "s17", title: "Soy", style: "Material original" },
  { id: "s18", title: "Fiebre de amor", style: "Material original" },
];

export function waLink(text: string) {
  return `https://wa.me/${CONTACT.phoneWa}?text=${encodeURIComponent(text)}`;
}
