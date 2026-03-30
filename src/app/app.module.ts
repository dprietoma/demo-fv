import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingComponent } from './pages/landing/landing.component';
import { AccessComponent } from './pages/access/access.component';
import { MapComponent } from './pages/map/map.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { CompareComponent } from './pages/compare/compare.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SectionTitleComponent } from './shared/components/section-title/section-title.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AccessComponent,
    MapComponent,
    AgendaComponent,
    FavoritesComponent,
    CompareComponent,
    AppointmentsComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SectionTitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}