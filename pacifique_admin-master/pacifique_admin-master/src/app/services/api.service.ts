import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, map, Observable, throwError } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
}) 
export class ApiService {
  private apiUrl = 'https://pacifique.yes.bj/api';

  constructor(private http: HttpClient,private sanitizer: DomSanitizer) { }
  //users
  getUser(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user/${id}`);
  }
  //Apprenants
  getApprenant() {
    return this.http.get(`${this.apiUrl}/apprenant`);
  }
  addApprenant(apprenant: any) {
    return this.http.post(`${this.apiUrl}/apprenant`, apprenant, { reportProgress:true,observe:'events' });
  }
  getOneApprenantById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/apprenant/${id}`);
  }
  getOneApprenantByEmail(email: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/apprenant/email/${email}`);
  }
  modifyApprenant(id: string, entity: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<any>(`${this.apiUrl}/apprenant/${id}`, entity, { headers });
  }
  deleteApprenant(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(`${this.apiUrl}/apprenant/${id}`, { headers });
  }
  activateApprenant(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(`${this.apiUrl}/apprenant/activate/${id}`, { headers });
  }
  //Admin
  getAdmin() {
    return this.http.get(`${this.apiUrl}/admin`);
  }
  addAdmin(admin: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.apiUrl}/admin`, admin, { headers });
  }
  getOneAdminByEmail(email: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/admin/email/${email}`);
  }
  deleteAdmin(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(`${this.apiUrl}/admin/${id}`, { headers });
  }
  activateAdmin(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(`${this.apiUrl}/admin/activate/${id}`, { headers });
  }
  modifyAdmin(id: string, entity: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<any>(`${this.apiUrl}/admin/${id}`, entity, { headers });
  }
  getOneAdminById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/admin/${id}`);
  }
  //Signalisations
  addSignalisation(signalisation: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.apiUrl}/signalisation`, signalisation, { headers });
  }
  //Exercices
  addExercice(exercices: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.apiUrl}/exercice`, exercices, { headers });
  }
  getExercice() {
    return this.http.get(`${this.apiUrl}/exercice`);
  }
  getOneExerciceById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/exercice/${id}`);
  }
  modifyExercice(id: string, entity: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<any>(`${this.apiUrl}/exercice/${id}`, entity, { headers });
  }
  //Revisions start
    addRevision(exercices: any) {
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      return this.http.post(`${this.apiUrl}/revision`, exercices, { headers });
    }
    getRevision() {
      return this.http.get(`${this.apiUrl}/revision`);
    }
    getOneRevisionById(id: string): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/revision/${id}`);
    }
    modifyRevision(id: string, entity: any): Observable<any> {
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      return this.http.put<any>(`${this.apiUrl}/revision/${id}`, entity, { headers });
    }
  //Revisions end
  //cours
  addCours(cours: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.apiUrl}/cours`, cours, { headers });
  }
  getCours() {
    return this.http.get(`${this.apiUrl}/cours`);
  }
  // getOneCoursByEmail(email: string): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/admin/email/${email}`);
  // }
  // deleteCours(id: string): Observable<any> {
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json');
  //   return this.http.post<any>(`${this.apiUrl}/admin/${id}`, { headers });
  // }
  // activateCours(id: string): Observable<any> {
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json');
  //   return this.http.post<any>(`${this.apiUrl}/admin/activate/${id}`, { headers });
  // }
  modifyCours(id: string, entity: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<any>(`${this.apiUrl}/cours/${id}`, entity, { headers });
  }
  getOneCoursById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/cours/${id}`);
  }
  //Presence
  addPresence(cours: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.apiUrl}/cours`, cours, { headers });
  }
  getPresence() {
    return this.http.get(`${this.apiUrl}/presence`);
  }
  getPresences(apprenant:string) {
    return this.http.get(`${this.apiUrl}/presence/apprenant/${apprenant}`);
  }
  getPendingPresence(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/presence/pending/${false}`);
  }
  deletePresence(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(`${this.apiUrl}/presence/${id}`, { headers });
  }
  activatePresence(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(`${this.apiUrl}/presence/activate/${id}`, { headers });
  }
  getOnePresenceById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/presence/${id}`);
  }
  //Notes
  getNotes() {
    return this.http.get(`${this.apiUrl}/note`);
  }
  //Disponibilite
  addDisponibilite(cours: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.apiUrl}/disponibilite`, cours, { headers });
  }
  getDisponibilite(type:string) {
    return this.http.get(`${this.apiUrl}/disponibilite/type/${type}`);
  }
  getDisponibiliteSingle(id:string,type:string) {
    return this.http.get(`${this.apiUrl}/disponibilite/apprenant/${id}/${type}`);
  }
  getPendingDisponibilite(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/disponibilite/pending/${false}`);
  }
  getValidDisponibilite(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/disponibilite/pending/${true}`);
  }
  deleteDisponibilite(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(`${this.apiUrl}/disponibilite/${id}`, { headers });
  }
  activateDisponibilite(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<any>(`${this.apiUrl}/disponibilite/activate/${id}`, { headers });
  }
  //Programme
  addProgramme(cours: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.apiUrl}/programme`, cours, { headers });
  }
  getProgramme(type:string) {
    return this.http.get(`${this.apiUrl}/programme/type/${type}`);
  }
  deleteProgramme(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(`${this.apiUrl}/programme/${id}`, { headers });
  }
  getOneProgrammeById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/programme/${id}`);
  }
  modifyProgramme(id: string, entity: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<any>(`${this.apiUrl}/programme/${id}`, entity, { headers });
  }
  //Images
  getImage(type:string) {
    return this.http.get(`${this.apiUrl}/image/${type}`);
  }
  addImage(admin: any) {
    return this.http.post(`${this.apiUrl}/image`, admin, { reportProgress:true,observe:'events' });
  }
  getOneImageByEmail(email: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/image/email/${email}`);
  }
  deleteImage(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(`${this.apiUrl}/image/${id}`, { headers });
  }
  getOneImageById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/image/${id}`);
  }
  //Ping
  ping(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/user/ping`);
  }
  sanitize(img:any){
    let TYPED_ARRAY = new Uint8Array(img)
    const STRING_CHAR = TYPED_ARRAY.reduce((data, byte) => {
      return data + String.fromCharCode(byte);
    }, '')
    let b64String = btoa(STRING_CHAR)
    return this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' + b64String)
  }
}
