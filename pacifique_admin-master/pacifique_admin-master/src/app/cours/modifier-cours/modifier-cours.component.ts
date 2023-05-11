import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import { ApiService } from '../../services/api.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modifier-cours',
  templateUrl: './modifier-cours.component.html',
  styleUrls: ['./modifier-cours.component.scss']
})
export class ModifierCoursComponent implements OnInit {
  sidebarVisible = true;
  public datas: any = {
    titre: "",
    description: "",
    image: "",
    sous_chapitre: [
      {
        paragraphes: [
          {
            contenu: "",
            image: "",
            titre: ""
          }
        ],
        titre: ""
      }
    ],
    num: { type: Number, required: true },
    deleted_at: { type: Date, default: null }
  };
  public images: any;
  public bloc: any;
  isShow = false;
  public id: string = "";
  public typeBloc: string = "";
  public idBloc: number = 0;
  public modifBloc: UntypedFormGroup = this.fb.group(
    {
      titre: ['', Validators.required],
      contenu: [''],
      description: [''],
      image: ['']
    }
  )

  constructor(private authService: AuthService, 
    private router: Router, private apiService: ApiService, private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.id = this.authService.getData("id")!
    this.apiService.getOneCoursById(this.id).subscribe(
      (res: any) => {      
        this.datas = res
        this.isShow = true
      }
    )
    this.apiService.getImage("cours").subscribe(
      (res: any) => {
        this.images = res
      }
    )
  }
  onSubmit() {
    var formvalue = this.modifBloc.value
    console.log(formvalue)
    var infos = JSON.parse(this.authService.getData("infosModif")!)
    if (infos.type == "entete") {
      infos.datas.description = formvalue.description
      infos.datas.image = formvalue.image
      infos.datas.titre = formvalue.titre
      this.apiService.modifyCours(this.authService.getData("id")!,infos.datas).subscribe((res:any)=>{
        this.router.routeReuseStrategy.shouldReuseRoute = ()=>false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/']);
      })
    } else if (infos.type == "paragraphe") {
      infos.datas.sous_chapitre[infos.idSous].paragraphes[infos.idPar].contenu = formvalue.contenu
      infos.datas.sous_chapitre[infos.idSous].paragraphes[infos.idPar].image = formvalue.image
      infos.datas.sous_chapitre[infos.idSous].paragraphes[infos.idPar].titre = formvalue.titre
      this.apiService.modifyCours(this.authService.getData("id")!,infos.datas).subscribe((res:any)=>{
        this.router.routeReuseStrategy.shouldReuseRoute = ()=>false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/']);
      })
    } else if (infos.type == "sous_chapitre") {
      infos.datas.sous_chapitre[infos.idSous].titre = formvalue.titre
    }
  }
  selectImg(link:string){
    var formvalue = this.modifBloc.value
    formvalue.image = link
  }
  select(datas: any, type: string, idPar: number, idSous: number) {
    this.authService.setDataInLocalStorage("infosModif", JSON.stringify({ datas: datas, type: type, idPar: idPar, idSous: idSous }))
    // entete,paragraphe,sous_chapitre
    if (type == "entete") {
      this.modifBloc = this.fb.group(
        {
          titre: [datas.titre, Validators.required],
          description: [datas.description],
          image: [datas.image]
        }
      )
    } else if (type == "paragraphe") {
      this.modifBloc = this.fb.group(
        {
          titre: [datas.sous_chapitre[idSous].paragraphes[idPar].titre, Validators.required],
          contenu: datas.sous_chapitre[idSous].paragraphes[idPar].contenu,
          image: [datas.sous_chapitre[idSous].paragraphes[idPar].image]
        }
      )
    } else if (type == "sous_chapitre") {
      this.modifBloc = this.fb.group(
        {
          titre: [datas.sous_chapitre[idSous].titre, Validators.required]
        }
      )
    }
  }
  logout() {
    this.authService.clearStorage();
    this.router.navigate(['login']);
  }
}
