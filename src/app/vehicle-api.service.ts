import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// {"id":2,"year":1926,"make":"Chrysler","model":"Imperial","hasDetails":0}
export interface IModel {
  id: number;
  year: number;
  make: string;
  model: string;
  hasDetails: boolean;
}

// {"id":1,"description":"Electricity"}
export interface IFuel {
  id: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class VehicleApiService {
  private readonly baseUrl = 'https://vehicle-data.azurewebsites.net';

  constructor(private http: HttpClient) { }

  /**
   * Returns the vehicle production years.
   */
  public getYears(): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/api/years`);
  }

  /**
   * Returns the vehicle models.
   */
  public getModels(): Observable<IModel[]> {
    return this.http.get<IModel[]>(`${this.baseUrl}/api/models`);
  }

  /**
   * Returns the model with the specified id.
   * @param id the model id
   */
  public getModelById(id: number): Observable<IModel> {
    return this.http.get<IModel>(`${this.baseUrl}/api/models/${id}`);
  }

  /**
   * Returns the vehicle models at a specific offset.
   * @param offset the starting point
   * @param count the end point (offset + count)
   */
  public getModelsByOffset(offset: number, count: number): Observable<IModel[]> {
    return this.http.get<IModel[]>(`${this.baseUrl}/api/models?offset=${offset}&fetch=${count}`);
  }

  /**
   * Returns the models filtered by makes and year.
   * @param make the make filter
   * @param year the year filter
   * @param offset the specified offset
   */
  public getFilteredModelsByOffset(make: string, year: number, offset: number, count: number): Observable<IModel[]> {
    return this.http.get<IModel[]>(`${this.baseUrl}/api/models`, {
      params: {
        make: (make || '').toString(),
        year: (year || '').toString(),
        offset: offset.toString(),
        fetch: count.toString(),
      }
    });
  }

  /**
   * Returns the vehicle producers.
   */
  public getMakes(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/api/makes`);
  }

  /**
   * Returns the makes which match the filter.
   * @param filter the specified filter
   */
  public getFilteredMakes(filter: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/api/makes?make=${filter}`);
  }

  /**
   * Returns a list of fuel types.
   */
  public getFuelTypes(): Observable<IFuel[]> {
    return this.http.get<IFuel[]>(`${this.baseUrl}/api/fuelTypes`);
  }
}
