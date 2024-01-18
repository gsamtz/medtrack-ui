import { Constants } from '../../constants/constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medication } from 'src/app/shared/models/medication';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {

  constructor(private http: HttpClient) { }

  getMedications(): Observable<Medication[]> {
    return this.http.get<Medication[]>(`${Constants.API_URL}` + '/medication')
  }
}
