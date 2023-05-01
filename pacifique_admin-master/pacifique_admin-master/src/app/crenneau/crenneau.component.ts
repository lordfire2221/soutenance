import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-crenneau',
  templateUrl: './crenneau.component.html',
  styleUrls: ['./crenneau.component.scss']
})
export class CrenneauComponent implements OnInit {
  sidebarVisible = true;
  public datas: any[] = [];
  public isShow: boolean = false;
  public name: string = "";
  public heures: any = [];
  public jours: any = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
  public apprenant: any;

  public modifierProgramme: UntypedFormGroup = this.fb.group(
    {
      heure: ['', [Validators.required, Validators.maxLength(255)]],
      semaine: ['', [Validators.required, Validators.maxLength(255)]],
      jour: ['', [Validators.required, Validators.maxLength(255)]],
      type: ['', [Validators.required, Validators.maxLength(255)]],
      tours: ['', [Validators.required, Validators.maxLength(255)]],
      apprenant: ['', [Validators.required, Validators.maxLength(255)]],
      _id: ['', [Validators.required, Validators.maxLength(255)]]
    }
  );
  constructor(private authService: AuthService,
    private router: Router, private apiService: ApiService, private fb: UntypedFormBuilder) { }
  ngOnInit(): void {
    this.apiService.getProgramme('crenneau').subscribe(
      (res: any) => {
        this.datas = res;
        this.isShow = true
      }
    )
  }
  decompose(string: string, pos: number) {
    return string.split('"')[pos]
  }
  getAprenant(uid: any): any {
    this.apiService.getOneApprenantById(uid).subscribe(
      (res: any) => {
        this.apprenant = res[0];
      }
    )
  }
  getDispo(uid: string, jour: number) {
    this.apiService.getDisponibiliteSingle(uid, "crenneau").subscribe(
      (res: any) => {
        var dispo = res.disponibilite
        this.heures = dispo[jour].split('"')
        this.heures.splice(0, 1)
        this.heures.splice(1, 1)
        this.heures.splice(2, 1)
      }
    )

  }
  select(uid: string, id: string) {
    this.apiService.getOneProgrammeById(id).subscribe(
      (res: any) => {
        this.name = res.apprenant.nom;
        this.modifierProgramme.patchValue(
          {
            heure: res.heure,
            semaine: res.semaine,
            jour: res.jour,
            type: res.type,
            tours: res.type,
            apprenant: res.apprenant._id,
            _id: res._id
          }
        )
      }
    )
  }
  onSubmit() {
    var formvalue = this.modifierProgramme.value
    this.apiService.modifyProgramme(formvalue._id, formvalue).subscribe((res: any) => {
      this.router.routeReuseStrategy.shouldReuseRoute = ()=>false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/']);
    })
  }
  logout() {
    this.authService.clearStorage();
    this.router.navigate(['login']);
  }
}
