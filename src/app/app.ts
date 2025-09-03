import { Component, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WorldBankApiService } from './world-bank-api';
import { MapComponent } from './map/map';
import { CountryDetailComponent } from './country-detail/country-detail';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, MapComponent, CountryDetailComponent],
  providers: [WorldBankApiService],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected title = signal('my-world-map-app');
  protected countriesData = signal<any>(null);
  protected countryDetail = signal<any>(null);

  constructor(private worldBankApi: WorldBankApiService) {}

  ngOnInit() {
    this.worldBankApi.getCountryData('usa').subscribe((data: any) => {
      console.log('Initial data:', data);
      this.countriesData.set(data);
    });
  }

  onCountrySelected(countryId: string) {
    this.worldBankApi.getCountryData(countryId).subscribe((data: any) => {
      this.countryDetail.set(data);
    });
  }
}