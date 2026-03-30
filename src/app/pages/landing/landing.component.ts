import { Component, OnDestroy, OnInit } from '@angular/core';

interface LiveStat {
  label: string;
  value: number;
  target: number;
  step: number;
  suffix?: string;
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit, OnDestroy {
  showSpeakerModal = false;

  countdown = {
    days: 12,
    hours: 8,
    minutes: 24
  };

  allies = [
    'Constructora Horizonte',
    'Vive Capital',
    'Banco Andino',
    'Financia+',
    'Casa Domótica'
  ];

  liveStats: LiveStat[] = [
    {
      label: 'Visitantes conectados',
      value: 1240,
      target: 1860,
      step: 35
    },
    {
      label: 'Stands activos',
      value: 24,
      target: 50,
      step: 2
    },
    {
      label: 'Citas agendadas hoy',
      value: 86,
      target: 210,
      step: 8
    },
    {
      label: 'Asesores disponibles',
      value: 18,
      target: 42,
      step: 1
    }
  ];

  private statsInterval: any;

  ngOnInit(): void {
    this.startLiveStats();
  }

  ngOnDestroy(): void {
    if (this.statsInterval) {
      clearInterval(this.statsInterval);
    }
  }

  startLiveStats(): void {
    this.statsInterval = setInterval(() => {
      this.liveStats = this.liveStats.map((item) => {
        if (item.value < item.target) {
          const nextValue = item.value + item.step;
          return {
            ...item,
            value: nextValue > item.target ? item.target : nextValue
          };
        }

        return item;
      });
    }, 2000);
  }

  formatStat(value: number): string {
    return value.toLocaleString('es-CO');
  }

  openSpeakerModal(): void {
    this.showSpeakerModal = true;
  }

  closeSpeakerModal(): void {
    this.showSpeakerModal = false;
  }
}