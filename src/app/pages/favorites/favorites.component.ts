import { Component, OnInit } from '@angular/core';
import { Stand } from '../../models/stand.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites: Stand[] = [];

  ngOnInit(): void {
    const raw = localStorage.getItem('favoriteStands');
    this.favorites = raw ? JSON.parse(raw) : [];
  }
}