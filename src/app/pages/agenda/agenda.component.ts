import { Component } from '@angular/core';
import { EVENTS } from '../../data/mock-data';
import { EventItem } from '../../models/event.model';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent {
  events: EventItem[] = EVENTS;
}