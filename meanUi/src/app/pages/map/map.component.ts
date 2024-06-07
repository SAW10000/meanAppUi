import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent implements OnInit, AfterViewInit {
  private map: L.Map | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private readonly myElement: ElementRef) { }

  private centroid: L.LatLngExpression = [21.7679, 78.8718]; //
  ngOnInit(): void {

  }

  private initMap(L: any): void {
    const mapElement = this.myElement.nativeElement.querySelector('#map');
    this.map = L.map(mapElement).setView(this.centroid, 5);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      tileSize: 256,
      zoomOffset: 0,
    }).addTo(this.map);
    console.log('hello');

  }
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {

      import('leaflet').then((L) => {
        this.initMap(L);
      });
    }
  }
}
