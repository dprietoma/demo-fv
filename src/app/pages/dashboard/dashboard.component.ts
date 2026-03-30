import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  metrics = [
    { value: '1.245', label: 'Visitas al mapa' },
    { value: '328', label: 'Leads generados' },
    { value: '91', label: 'Clics en hablar con asesor' },
    { value: '18%', label: 'Usuarios desde exterior' },
  ];
}