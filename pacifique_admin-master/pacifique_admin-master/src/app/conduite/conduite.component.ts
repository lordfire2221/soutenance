import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-conduite',
  templateUrl: './conduite.component.html',
  styleUrls: ['./conduite.component.scss']
})
export class ConduiteComponent implements OnInit {
  sidebarVisible = true;
  public datas: any[] = [];
  public isShow: boolean = false;
  public name: string = "";
  public heures: any = [];
  public jours: any = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  public modifierProgramme: UntypedFormGroup = this.fb.group(
    {
      heure: ['', [Validators.required, Validators.maxLength(255)]],
      jour: ['', [Validators.required, Validators.maxLength(255)]],
      tours: ['', [Validators.required, Validators.maxLength(255)]],
      type: ['', [Validators.required, Validators.maxLength(255)]],
      apprenant: ['', [Validators.required, Validators.maxLength(255)]],
      _id: ['', [Validators.required, Validators.maxLength(255)]]
    }
  );
  constructor(private authService: AuthService,
    private router: Router, private apiService: ApiService, private fb: UntypedFormBuilder) { }
  ngOnInit(): void {
    this.apiService.getProgramme('conduite').subscribe(
      (res: any) => {
        this.datas = res;
        this.isShow = true
      }
    )
  }
  decompose(string: string, pos: number) {
    return string.split('"')[pos]
  }
  getDispo(uid: string, jour: number) {

    this.apiService.getDisponibiliteSingle(uid, "conduite").subscribe(
      (res: any) => {
        var dispo = res.disponibilite
        this.heures = dispo[jour].split('"')
        this.heures.splice(0, 1)
        this.heures.splice(1, 1)
        this.heures.splice(2, 1)
        console.log(this.heures)
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
            tours: res.tours,
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
      console.log(res)
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
