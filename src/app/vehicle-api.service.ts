import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleApiService {
  private readonly baseUrl = 'https://vehicle-data.azurewebsites.net';

  constructor(private http: HttpClient) { }
}
