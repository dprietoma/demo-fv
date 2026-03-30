import { Component } from '@angular/core';
import { STANDS } from '../../data/mock-data';
import { Stand } from '../../models/stand.model';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent {
  constructoras: Stand[] = STANDS.filter(
    (stand) => stand.type === 'Constructora'
  );

  selectedIds: number[] = [];

  toggleStand(id: number): void {
    if (this.selectedIds.includes(id)) {
      this.selectedIds = this.selectedIds.filter((x) => x !== id);
      return;
    }

    if (this.selectedIds.length < 3) {
      this.selectedIds.push(id);
    }
  }

  isSelected(id: number): boolean {
    return this.selectedIds.includes(id);
  }

  get selectedStands(): Stand[] {
    return this.constructoras.filter((stand) =>
      this.selectedIds.includes(stand.id)
    );
  }
}