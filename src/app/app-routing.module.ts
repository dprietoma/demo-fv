import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './pages/landing/landing.component';
import { AccessComponent } from './pages/access/access.component';
import { MapComponent } from './pages/map/map.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { CompareComponent } from './pages/compare/compare.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'access', component: AccessComponent },
  { path: 'map', component: MapComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'compare', component: CompareComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}