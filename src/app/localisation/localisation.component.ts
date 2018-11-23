import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MapComponent } from 'ngx-openlayers';

@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.component.html',
  styleUrls: ['./localisation.component.css'],
})
export class LocalisationComponent implements OnInit {

  distance = 60;
  zoom = 16;
  // Coordonnées de la ville de Tours
  x = 0.66842;
  y = 47.39301;

  ngOnInit() {

  }

}
