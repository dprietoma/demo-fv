import { Stand } from '../models/stand.model';
import { EventItem } from '../models/event.model';

const buildStands = (): Stand[] => {
  const stands: Stand[] = [];

  for (let i = 1; i <= 12; i++) {
    stands.push({
      id: i,
      name: `Stand ${i}`,
      type: 'Banco / Asesor',
      zone: 'Asesores y bancos',
      advisor: `Asesor ${i}`,
      city: 'Bogotá',
      commercialInfo: 'Asesoría financiera y acompañamiento hipotecario',
      favorite: false,
    });
  }

  for (let i = 13; i <= 36; i++) {
    stands.push({
      id: i,
      name: `Stand ${i}`,
      type: 'Constructora',
      zone: 'Constructoras',
      advisor: `Asesor ${i}`,
      city: 'Bogotá',
      commercialInfo: 'Proyectos de vivienda VIS, No VIS e inversión',
      favorite: false,
      projects: [
        {
          id: 'p1',
          name: 'Reserva del Lago',
          type: 'VIS',
          city: 'Bogotá',
          priceFrom: '$220M',
          status: 'Disponible',
        },
        {
          id: 'p2',
          name: 'Bosques de Fontibón',
          type: 'VIS',
          city: 'Bogotá',
          priceFrom: '$280M',
          status: 'Lanzamiento',
        },
        {
          id: 'p3',
          name: 'Ámbar 116',
          type: 'No VIS',
          city: 'Chía',
          priceFrom: '$420M',
          status: 'Disponible',
        },
        {
          id: 'p4',
          name: 'Mirador Inversión',
          type: 'Inversión',
          city: 'Soacha',
          priceFrom: '$310M',
          status: 'Últimas unidades',
        },
      ],
    });
  }

  for (let i = 37; i <= 50; i++) {
    stands.push({
      id: i,
      name: `Stand ${i}`,
      type: 'Domótica / Diseño',
      zone: 'Domótica y diseño interior',
      advisor: `Asesor ${i}`,
      city: 'Bogotá',
      commercialInfo:
        'Domótica, acabados, interiorismo y soluciones para el hogar',
      favorite: false,
    });
  }

  return stands;
};

export const STANDS: Stand[] = buildStands();

export const EVENTS: EventItem[] = [
  {
    id: 'e1',
    hour: '10:00 a.m.',
    title: 'Tendencias del mercado inmobiliario',
    speaker: 'Panel constructoras',
    place: 'Tarima principal',
    type: 'Conferencia',
    description: 'Panorama de vivienda e inversión.',
  },
  {
    id: 'e2',
    hour: '1:00 p.m.',
    title: 'Asesoría de crédito en feria',
    speaker: 'Banco Andino',
    place: 'Zona financiera',
    type: 'Asesoría',
    description: 'Precalificación y opciones de financiación.',
  },
  {
    id: 'e3',
    hour: '3:00 p.m.',
    title: 'Compra inteligente de vivienda',
    speaker: 'Mabel Quintero',
    place: 'Tarima principal',
    type: 'Conferencia',
    description: 'Cómo tomar mejores decisiones de compra.',
  },
];
