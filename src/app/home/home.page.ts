import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  map!: L.Map;
  basemaps!: string | any;

  constructor() {}
  // ngOnInit() {

  //   });
  // }

  ionViewDidEnter() {
    this.map = L.map('mapId').setView(
      [-8.42602230497795, 119.29144368693532],
      13
    );

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    //Marker
    const markerIcon = L.icon({
      iconUrl: 'assets/icon/destination.png',
      iconSize: [50, 50],
      iconAnchor: [12, 41],
    });
    const marker = L.marker([-8.42602230497795, 119.29144368693532], {
      icon: markerIcon,
    }).addTo(this.map);
    const marker2 = L.marker([-8.531822973089568, 119.47108770542997], {
      icon: markerIcon,
    }).addTo(this.map);

    //Pop-up information
    marker.bindPopup('Pulau Gili Banta').openPopup();
    marker2.bindPopup('Pulau Komodo').openPopup();

    //Basemap
    const baseMaps = {
      OpenStreetMap: L.tileLayer(
        'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }
      ),
      Satellite: L.tileLayer(
        'https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',
        {
          maxZoom: 20,
          subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
          attribution:
            '&copy; <a href="https://maps.google.com">Google Maps</a>',
        }
      ),
      Watercolor: L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg', {
        maxZoom: 17,
        attribution:
          '&copy; <a href="https://www.opentopomap.org">OpenTopoMap</a> contributors',
      })
    };
    //LayerControl
    L.control.layers(baseMaps).addTo(this.map);

  }
}
