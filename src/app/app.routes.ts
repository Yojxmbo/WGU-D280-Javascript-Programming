import { Routes } from '@angular/router';
import { MapComponent } from './map/map';
import { CountryDetailComponent } from './country-detail/country-detail';

export const routes: Routes = [
  { path: '', redirectTo: 'map', pathMatch: 'full' },
  { path: 'map', component: MapComponent },
  { path: 'country-detail', component: CountryDetailComponent },
  { path: '**', redirectTo: 'map', pathMatch: 'full' }
];