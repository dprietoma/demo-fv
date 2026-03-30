export interface Project {
  id: string;
  name: string;
  type: 'VIS' | 'No VIS' | 'Inversión';
  city: string;
  priceFrom: string;
  status: 'Disponible' | 'Lanzamiento' | 'Últimas unidades';
}

export interface Stand {
  id: number;
  name: string;
  type: 'Banco / Asesor' | 'Constructora' | 'Domótica / Diseño';
  zone: string;
  advisor: string;
  city: string;
  commercialInfo: string;
  favorite?: boolean;
  projects?: Project[];
}