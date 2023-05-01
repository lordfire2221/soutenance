import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/services/api.service';
import * as moment from 'moment'

@Component({
  selector: 'app-programme-conduite',
  templateUrl: './programme-conduite.component.html',
  styleUrls: ['./programme-conduite.component.scss']
})
export class ProgrammeConduiteComponent implements OnInit {
  sidebarVisible = true;
  public datas: any[] = [];
  public programme: any = { uid: '', jour: 0, heure: '', type: 'conduite', semaine: 'conduite' }
  public programmes: any[] = []
  public isShow: boolean = false;
  public day: number = 0
  public apprenant: any = { nom: "" }
  public presence: any
  constructor(private authService: AuthService,
    private router: Router, private apiService: ApiService) { }
  ngOnInit(): void {
    this.apiService.getDisponibilite('conduite').subscribe(
      (res: any) => {
        console.log(res)
        this.datas = res;
        this.isShow = true;
      }
    )
    var date = new Date()
    this.day = date.getDay()
    this.authService.setDataInLocalStorage("programme", "")
  }
  getAprenant(uid: any): any {
    this.apiService.getUser(uid).subscribe(
      (res: any) => {
        this.apiService.getOneApprenantByEmail(res.email).subscribe(
          (res: any) => {
            this.apprenant = res
          }
        )
      }
    )
  }
  getPresence(uid: any): any {
    this.apiService.getPresences(uid).subscribe(
      (res: any) => {
        if (res != null)
          this.presence = res
        else
          this.presence = []
      }
    )
  }
  nextMonday() {
    let today = moment();
    let nextMonday = today.startOf('week').add(7, 'days')
    return nextMonday.format("ddd, MMMM Do YYYY")
  }
  select(day: number, hour: string, uid: string, event: any) {
    var nombre = prompt("Combien de tours doit-il faire","1")
    this.programme.apprenant = uid;
    this.programme.type = "conduite";
    this.programme.tours = +nombre!;
    this.programme.jour = day;
    this.programme.heure = hour;
    this.programme.semaine = this.nextMonday();
    if (event.target.checked) {
      this.addItem(this.programme)
    }
    else
      this.removeItem(this.programme)
  }
  decompose(string: string, pos: number): string {
    return string.split('"')[pos]
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
  addItem(item: any) {
    delete item.apprenant.image
    var prgm = this.authService.getData("programme")
    prgm += "#" + JSON.stringify(item)
    this.authService.setDataInLocalStorage("programme", prgm)
    this.programmes.push(item);
  }
  removeItem(item: any) {
    delete item.apprenant.image
    var tab = this.authService.getData("programme")?.split("#") || []
    tab = tab.filter(i => i !== JSON.stringify(item));
    this.authService.setDataInLocalStorage("programme", tab.join("#"))
  }
  validate() {
    if (confirm('Voulez-vous enregistrer les modification ?')) {
      this.apiService.getDisponibilite('conduite').subscribe(
        (res: any) => {
          this.datas = res;
          console.log(res)
          this.datas.forEach(element => {
            this.apiService.activateDisponibilite(element._id).subscribe((res: any) => {
              console.log(res)
            })
          });
        }
      )
      this.programmes = this.authService.getData("programme")?.split("#") || []
      this.programmes.forEach(prgm => {
        if (prgm !== "")
          this.apiService.addProgramme(JSON.parse(prgm)).subscribe((res: any) => {
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.onSameUrlNavigation = 'reload';
            this.router.navigate(['/']);
          })
      });
    }
  }
}
