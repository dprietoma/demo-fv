import { Component, OnInit } from '@angular/core';
import { Stand } from '../../models/stand.model';
import { STANDS } from '../../data/mock-data';

type FilterType =
  | 'Todos'
  | 'Banco / Asesor'
  | 'Constructora'
  | 'Domótica / Diseño';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  search = '';
  filter: FilterType = 'Todos';
  stands: Stand[] = STANDS;
  selectedStand: Stand | null = null;
  showSpeakerModal = false;
  location = 'Colombia';

  ngOnInit(): void {
    const rawVisitor = localStorage.getItem('visitorForm');
    if (rawVisitor) {
      const visitor = JSON.parse(rawVisitor);
      this.location = visitor.location || 'Colombia';
    }

    const rawFavorites = localStorage.getItem('favoriteStands');
    if (rawFavorites) {
      const favorites: Stand[] = JSON.parse(rawFavorites);
      this.stands = this.stands.map((stand) => ({
        ...stand,
        favorite: favorites.some((f) => f.id === stand.id),
      }));
    }
  }

  get filteredStands(): Stand[] {
    return this.stands.filter((stand) => {
      const matchesFilter =
        this.filter === 'Todos' || stand.type === this.filter;

      const text =
        `${stand.name} ${stand.zone} ${stand.type} ${stand.commercialInfo}`.toLowerCase();

      const matchesSearch = text.includes(this.search.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }

  get topRowStands(): Stand[] {
    return this.filteredStands.filter((s) => s.id >= 1 && s.id <= 12);
  }

  get constructorasLeft(): Stand[] {
    return this.filteredStands.filter((s) =>
      [13, 14, 15, 16, 25, 26, 27, 28].includes(s.id),
    );
  }

  get constructorasCenter(): Stand[] {
    return this.filteredStands.filter((s) =>
      [17, 18, 19, 20, 29, 30, 31, 32].includes(s.id),
    );
  }

  get constructorasRight(): Stand[] {
    return this.filteredStands.filter((s) =>
      [21, 22, 23, 24, 33, 34, 35, 36].includes(s.id),
    );
  }

  get bottomRowStands(): Stand[] {
    return this.filteredStands.filter((s) => s.id >= 37 && s.id <= 50);
  }

  setFilter(filter: FilterType): void {
    this.filter = filter;
  }

  selectStand(stand: Stand): void {
    this.selectedStand = stand;
  }

  openSpeakerModal(): void {
    this.showSpeakerModal = true;
  }

  closeSpeakerModal(): void {
    this.showSpeakerModal = false;
  }

  toggleFavorite(stand: Stand): void {
    stand.favorite = !stand.favorite;
    const favorites = this.stands.filter((item) => item.favorite);
    localStorage.setItem('favoriteStands', JSON.stringify(favorites));
  }

  get estimatedRange(): string {
    return this.location === 'Exterior' ? '$300M - $700M' : '$250M - $420M';
  }

  get recommendedBank(): string {
    return this.location === 'Exterior' ? 'Financia+ Hogar' : 'Banco Andino';
  }

  trackByStandId(index: number, stand: Stand): number {
    return stand.id;
  }

  getProjectCountText(): string {
    if (!this.selectedStand?.projects?.length) {
      return 'Sin portafolio de proyectos cargado';
    }

    const total = this.selectedStand.projects.length;
    return `${total} proyecto${total > 1 ? 's' : ''} activo${total > 1 ? 's' : ''} en feria`;
  }

  getProjectTypeCount(type: 'VIS' | 'No VIS' | 'Inversión'): number {
    if (!this.selectedStand?.projects?.length) {
      return 0;
    }

    return this.selectedStand.projects.filter(
      (project) => project.type === type,
    ).length;
  }

  getProjectCities(): string {
    if (!this.selectedStand?.projects?.length) {
      return 'Sin ubicaciones registradas';
    }

    const cities = [
      ...new Set(this.selectedStand.projects.map((project) => project.city)),
    ];
    return cities.join(', ');
  }

  getProjectPriceFrom(): string {
    if (!this.selectedStand?.projects?.length) {
      return 'No disponible';
    }

    return this.selectedStand.projects[0].priceFrom;
  }

  // Función para identificar stands recomendados
  isRecommended(id: number): boolean {
    return [18, 30, 36].includes(id);
  }
}
