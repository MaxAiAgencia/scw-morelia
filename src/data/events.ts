export interface Fight {
  type: string;
  fighter1: string;
  fighter2: string;
  fighter3?: string;
}

export interface Event {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  city: string;
  isoDate: string;
  upcoming: boolean;
  mainEvent: string;
  fights?: Fight[];
  ticketUrl?: string;
  image?: string;
}

export const events: Event[] = [
  {
    id: 1,
    title: "STRONG STYLE FRIDAY NITES 2",
    subtitle: "La noche de los mejores encunetros",
    date: "Viernes 08 de Mayo",
    time: "7:30 PM",
    venue: "The Wrestling Factory",
    address: "Av. Michoacán #614, Col. Las Margaritas",
    city: "Morelia, Michoacán",
    isoDate: "2026-05-08T19:30:00",
    upcoming: true,
    mainEvent: "Aero Panther vs. El Príncipe — Campeonato Crucero SCW",
    image: "/images/evento.jpg",
    fights: [
      { type: "Mano a Mano", fighter1: "Chris Carter", fighter2: "René Rocks" },
      { type: "Mano a Mano", fighter1: "Hellboy", fighter2: "Hades" },
      { type: "Campeonato Crucero SCW", fighter1: "Aero Panther", fighter2: "El Príncipe" },
      { type: "Mano a Mano", fighter1: "Tommy Harrier", fighter2: "Cerbero" },
      { type: "Lucha de 3 Esquinas", fighter1: "Eddy Lee", fighter2: "Toro Machine", fighter3: "Fight Panter Jr." },
    ],
    ticketUrl: "https://www.masentrada.app/events/scw-strong-style-friday-nites-2?fbclid=IwY2xjawRp4w1leHRuA2FlbQIxMQBzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEe9wDp2mGuciSW2RGBTS9Zbv80WwzeVzNa1H06QoBvCysiyCqliWgRrWRK1uU_aem_0gGhSFdX0fuglonBeW78ZQ",
  },
  {
    id: 2,
    title: "SCW GUERRA TOTAL",
    subtitle: "Solo los más fuertes sobreviven",
    date: "Viernes 12 de Junio",
    time: "7:30 PM",
    venue: "The Wrestling Factory",
    address: "Av. Michoacán #614",
    city: "Morelia, Michoacán",
    isoDate: "2026-06-12T19:30:00",
    upcoming: true,
    mainEvent: "Torneo por el Campeonato",
    ticketUrl: "#boletos",
  },
  {
    id: 3,
    title: "STRONG STYLE FRIDAY NITES 1",
    subtitle: "El inicio de una era",
    date: "Viernes 04 de Abril",
    time: "7:30 PM",
    venue: "The Wrestling Factory",
    address: "Av. Michoacán #614",
    city: "Morelia, Michoacán",
    isoDate: "2026-04-04T19:30:00",
    upcoming: false,
    mainEvent: "Campeonato SCW en juego",
  },
];
