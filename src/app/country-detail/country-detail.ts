import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-country-detail',
  standalone: true,
  imports: [],
  templateUrl: './country-detail.html',
  styleUrl: './country-detail.css'
})
export class CountryDetailComponent implements OnChanges {
  @Input() countryData: any;
  countryInfo: any = {};

  ngOnChanges(changes: SimpleChanges): void {
    if (this.countryData) {
      this.extractCountryProperties(this.countryData);
    }
  }

  private extractCountryProperties(data: any): void {
    const properties = data[1][0];

    if (properties) {
      this.countryInfo = {
        name: properties.name,
        capital: properties.capitalCity,
        region: properties.region.value,
        incomeLevel: properties.incomeLevel.value,
        latitude: properties.latitude,
        longitude: properties.longitude,
      };
    }
  }
}