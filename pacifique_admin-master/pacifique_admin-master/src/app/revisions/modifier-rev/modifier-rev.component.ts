import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modifier-rev',
  templateUrl: './modifier-rev.component.html',
  styleUrls: ['./modifier-rev.component.scss']
})
export class ModifierRevComponent implements OnInit {
  sidebarVisible = true;
  public datas: any={
    num: { type: Number, required: true, unique: true },
  questions: [
    {
      corrige: [], 
      image: {data:""},
      quiz:"",
      propositions: [
        { 
          val:"",
          lab:"",
          isChecked: ""
        }
      ]
    }
  ],
  imagePrinc: ""
  };
  public images: any;
  public bloc: any;
  isShow = false;
  public id: string = "";
  public typeBloc: string = "";
  public idBloc: number = 0;
  public modifBloc: UntypedFormGroup = this.fb.group(
    {
      quiz: ['', Validators.required],
      lab: ['', Validators.required],
      val: ['', Validators.required],
      isChecked: ['', Validators.required],
      corrige: ['', Validators.required],
      image: ['']
    }
  )

  constructor(private authService: AuthService, 
    private router: Router, public apiService: ApiService, private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.id = this.authService.getData("id")!
    this.apiService.getOneRevisionById(this.id).subscribe(
      (res: any) => (this.datas = res, this.isShow = true)
    )
    this.apiService.getImage("exo").subscribe(
      (res: any) => {
        this.images = res
      }
    )
  }
  onSubmit() {
    var formvalue = this.modifBloc.value
    var infos = JSON.parse(this.authService.getData("infosModif")!)
    if (infos.type == "entete") {
      infos.datas.image = formvalue.image
      this.apiService.modifyRevision(this.authService.getData("id")!,infos.datas).subscribe((res:any)=>{
      })
    } else if (infos.type == "propositions") {
      infos.datas.questions[infos.idQuizz].propositions[infos.idProp].val = formvalue.val
      infos.datas.questions[infos.idQuizz].propositions[infos.idProp].isChecked = formvalue.isChecked
      infos.datas.questions[infos.idQuizz].propositions[infos.idProp].lab = formvalue.lab
      this.apiService.modifyRevision(this.authService.getData("id")!,infos.datas).subscribe((res:any)=>{
      })
    } else if (infos.type == "questions") {
      infos.datas.questions[infos.idQuizz].quizz = formvalue.quiz
      infos.datas.questions[infos.idQuizz].corrige = formvalue.corrige.split(',')
      infos.datas.questions[infos.idQuizz].image = formvalue.image
      this.apiService.modifyRevision(this.authService.getData("id")!,infos.datas).subscribe((res:any)=>{
      })
    }
  }
  selectImg(link: string) {
    var formvalue = this.modifBloc.value
    formvalue.image = link
  }
  select(datas: any, type: string, idProp: number, idQuizz: number) {
    this.authService.setDataInLocalStorage("infosModif", JSON.stringify({ datas: datas, type: type, idProp: idProp, idQuizz: idQuizz }))
    // entete,propositions,questions
    if (type == "entete") {
      this.modifBloc = this.fb.group(
        {
          image: [datas.image, Validators.required],
        }
      )
    } else if (type == "propositions") {
      this.modifBloc = this.fb.group(
        {
          lab: [datas.questions[idQuizz].propositions[idProp].lab, Validators.required],
          val: [datas.questions[idQuizz].propositions[idProp].val, Validators.required],
          isChecked: [datas.questions[idQuizz].propositions[idProp].isChecked, Validators.required]
        }
      )
    } else if (type == "questions") {
      this.modifBloc = this.fb.group(
        {
          quiz: [datas.questions[idQuizz].quiz, Validators.required],
          corrige: [datas.questions[idQuizz].corrige.join(","), Validators.required],
          image: [datas.questions[idQuizz].image, Validators.required]
        }
      )
    }
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
