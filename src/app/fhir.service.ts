
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FhirService {
  private baseUrl = environment.fhirBaseUrl;

  constructor(private http: HttpClient) {}

  getPatients() {
    return this.http.get(`${this.baseUrl}/Patient`);
  }

  getConditions() {
    return this.http.get(`${this.baseUrl}/Condition`);
  }
}
