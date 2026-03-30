export interface Stand {
  id: string;
  name: string;
  type: 'Constructora' | 'Banco' | 'Domótica' | 'Diseño Interior' | 'Conferencia';
  zone: string;
  x: number;
  y: number;
  projects: string[];
  advisor: string;
  city: string;
  commercialInfo: string;
}

export const STANDS: Stand[] = [
  {
    id: 'A1',
    name: 'Constructora Horizonte',
    type: 'Constructora',
    zone: 'Zona Proyectos VIS',
    x: 8,
    y: 18,
    projects: ['Reserva del Lago', 'Bosques de Fontibón'],
    advisor: 'Laura Gómez',
    city: 'Bogotá',
    commercialInfo: '$220M - $380M',
  },
  {
    id: 'A2',
    name: 'Vive Capital',
    type: 'Constructora',
    zone: 'Zona Proyectos No VIS',
    x: 27,
    y: 18,
    projects: ['Ámbar 116', 'Torres del Parque'],
    advisor: 'Juan Rojas',
    city: 'Bogotá',
    commercialInfo: '$420M - $780M',
  },
  {
    id: 'A3',
    name: 'Hogar Urbano',
    type: 'Constructora',
    zone: 'Zona Proyectos VIS',
    x: 46,
    y: 18,
    projects: ['Senderos del Sur', 'Ícono 74'],
    advisor: 'Sara Méndez',
    city: 'Soacha',
    commercialInfo: '$180M - $290M',
  },
  {
    id: 'B1',
    name: 'Banco Andino',
    type: 'Banco',
    zone: 'Zona Financiera',
    x: 8,
    y: 45,
    projects: ['Crédito hipotecario', 'Leasing habitacional'],
    advisor: 'Carlos Peña',
    city: 'Nacional',
    commercialInfo: 'Tasa desde 10.8% EA',
  },
  {
    id: 'B2',
    name: 'Financia+ Hogar',
    type: 'Banco',
    zone: 'Zona Financiera',
    x: 27,
    y: 45,
    projects: ['Preaprobación en feria', 'Subsidio + crédito'],
    advisor: 'Mariana Ortiz',
    city: 'Nacional',
    commercialInfo: 'Cuota desde $1.4M',
  },
  {
    id: 'C1',
    name: 'Casa Domótica',
    type: 'Domótica',
    zone: 'Zona Smart Home',
    x: 64,
    y: 18,
    projects: ['Paquete de seguridad', 'Automatización de iluminación'],
    advisor: 'David Castro',
    city: 'Bogotá',
    commercialInfo: 'Desde $3.5M',
  },
  {
    id: 'C2',
    name: 'Interiores Boreal',
    type: 'Diseño Interior',
    zone: 'Zona Diseño & Acabados',
    x: 64,
    y: 45,
    projects: ['Cocinas modulares', 'Closets a medida'],
    advisor: 'Paula Niño',
    city: 'Bogotá',
    commercialInfo: 'Desde $8M',
  },
  {
    id: 'D1',
    name: 'Tarima Principal',
    type: 'Conferencia',
    zone: 'Zona Experiencias',
    x: 83,
    y: 30,
    projects: ['Charla central 3:00 p.m.'],
    advisor: 'Equipo Camacol',
    city: 'Auditorio',
    commercialInfo: 'Acceso incluido',
  },
];