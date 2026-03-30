export interface Project {
  id: string;
  name: string;
  type: 'VIS' | 'No VIS' | 'Inversión';
  city: string;
  priceFrom: string;
  status: 'Disponible' | 'Lanzamiento' | 'Últimas unidades';
}