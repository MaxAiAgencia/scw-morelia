export interface Wrestler {
  id: number;
  name: string;
  alias: string;
  style: "Rudo" | "Técnico";
  title?: string;
  bio: string;
  color: string;
  number: string;
}

export const wrestlers: Wrestler[] = [
  {
    id: 1,
    name: "Aero Panther",
    alias: "Campeón Crucero SCW",
    style: "Técnico",
    title: "Campeón Crucero SCW",
    bio: "Velocidad y vuelo. El Campeón Crucero que domina los cielos del ring de SCW Morelia.",
    color: "#0066CC",
    number: "01",
  },
  {
    id: 2,
    name: "El Príncipe",
    alias: "El Retador",
    style: "Técnico",
    bio: "Elegante y explosivo, El Príncipe va por la corona del Campeonato Crucero.",
    color: "#3e1a6e",
    number: "02",
  },
  {
    id: 3,
    name: "Hellboy",
    alias: "El Demonio del Ring",
    style: "Rudo",
    bio: "Feroz e impredecible. Hellboy lleva el caos a cada esquina del cuadrilátero.",
    color: "#CC0000",
    number: "03",
  },
  {
    id: 4,
    name: "Hades",
    alias: "El Señor del Inframundo",
    style: "Rudo",
    bio: "Desde las profundidades, Hades trae destrucción a todo el que se le pone enfrente.",
    color: "#1a1a3e",
    number: "04",
  },
  {
    id: 5,
    name: "Chris Carter",
    alias: "El Americano",
    style: "Técnico",
    bio: "Técnica y corazón combinados. Chris Carter es uno de los favoritos de la afición.",
    color: "#1a3e1a",
    number: "05",
  },
  {
    id: 6,
    name: "René Rocks",
    alias: "La Roca de Morelia",
    style: "Rudo",
    bio: "Sólido como una roca. René Rocks destruye rivales sin piedad ni remordimientos.",
    color: "#3e2a0a",
    number: "06",
  },
  {
    id: 7,
    name: "Tommy Harrier",
    alias: "El Guerrero Incansable",
    style: "Técnico",
    bio: "La resistencia y el corazón de Tommy Harrier lo convierten en una amenaza constante.",
    color: "#1a3e3e",
    number: "07",
  },
  {
    id: 8,
    name: "Cerbero",
    alias: "El Guardián",
    style: "Rudo",
    bio: "Como el mítico guardián, Cerbero no deja pasar a nadie. Brutal y calculador.",
    color: "#3e1a00",
    number: "08",
  },
  {
    id: 9,
    name: "Toro Machine",
    alias: "La Máquina de Destrucción",
    style: "Rudo",
    bio: "Una vez que Toro Machine toma velocidad, nadie lo detiene. Pura potencia.",
    color: "#2a0a0a",
    number: "09",
  },
  {
    id: 10,
    name: "Eddy Lee",
    alias: "El Dinámico",
    style: "Técnico",
    bio: "Rápido y creativo, Eddy Lee siempre sorprende con maniobras que nadie espera.",
    color: "#0a2a3e",
    number: "10",
  },
  {
    id: 11,
    name: "Fight Panter Jr.",
    alias: "El Hijo del Panther",
    style: "Técnico",
    bio: "Porta con orgullo el legado de la familia Panter. Agilidad felina en el ring.",
    color: "#1a1a0a",
    number: "11",
  },
];
