import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent {
  form = {
    name: 'Manuel Rodríguez',
    email: 'manuel.rodriguez@example.com',
    location: 'Colombia',
    hasInvitation: 'Sí',
    goal: '',
    housingType: '',
    financing: '',
    budget: ''
  };


  constructor(private router: Router) {}

  get completion(): number {
    let count = 0;

    if (this.form.name.trim()) count += 12.5;
    if (this.form.email.trim()) count += 12.5;
    if (this.form.location) count += 12.5;
    if (this.form.hasInvitation) count += 12.5;
    if (this.form.goal) count += 12.5;
    if (this.form.housingType) count += 12.5;
    if (this.form.financing) count += 12.5;
    if (this.form.budget) count += 12.5;

    return count;
  }

  get canEnter(): boolean {
    return !!this.form.name.trim() &&
      !!this.form.email.trim() &&
      this.form.hasInvitation === 'Sí' &&
      !!this.form.goal &&
      !!this.form.housingType &&
      !!this.form.financing &&
      !!this.form.budget;
  }

  goToMap(): void {
    if (!this.canEnter) return;

    localStorage.setItem('visitorForm', JSON.stringify(this.form));
    this.router.navigate(['/map']);
  }
}