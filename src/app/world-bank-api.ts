import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorldBankApiService {

  constructor(private http: HttpClient) { }

  getCountryData(countryCode: string) {
    const url = `http://api.worldbank.org/v2/country/${countryCode}?format=json`;
    return this.http.get(url);
  }
}