import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  private apiUrl = 'http://localhost:4000/api';

  constructor(private http: HttpClient) { }
  getDemande() {
    return this.http.get(`${this.apiUrl}/demande`);
  }
  addDemande(demande: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.apiUrl}/demande`, demande, { headers });
  }
  getAllByEmail(email: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/demande/${email}`);
  }
  getOneById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/demande/${id}`);
  }
  getOneByEmail(email: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/demande/email/${email}`);
  }
  modify(id: string, entity: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<any>(`${this.apiUrl}/demande/${id}`, entity, { headers });
  }
  cancel(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(`${this.apiUrl}/demande/${id}`, { headers });
  }
}
