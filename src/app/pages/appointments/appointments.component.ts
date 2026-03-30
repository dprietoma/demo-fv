import { Component } from '@angular/core';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {
  appointments = [
    {
      hour: '10:30 a.m.',
      title: 'Constructora Horizonte',
      description: 'Asesoría sobre proyecto Reserva del Lago'
    },
    {
      hour: '11:15 a.m.',
      title: 'Banco Andino',
      description: 'Precalificación de crédito hipotecario'
    },
    {
      hour: '3:00 p.m.',
      title: 'Mabel Quintero',
      description: 'Conferencia central'
    }
  ];
}