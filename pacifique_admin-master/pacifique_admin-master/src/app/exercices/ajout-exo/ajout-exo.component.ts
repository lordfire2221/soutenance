import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ajout-exo',
  templateUrl: './ajout-exo.component.html',
  styleUrls: ['./ajout-exo.component.scss']
})
export class AjoutExoComponent implements OnInit {
  sidebarVisible = true;
  public ajouterApprenant!: UntypedFormGroup;
  public datas!: any;
  file!: File;
  public exercice: any;
  public lettres: any[] = ["A","B","C","D","E","F","G","H"];
  number!: string;
  selectedFiles: FileList | undefined;
  percentage!: number;
  constructor(
    private apiService: ApiService,
    private fb: UntypedFormBuilder,
    private router: Router,
    private authService: AuthService,
    
  ) {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login'])
  }

  fileChanged(event: any) {
    this.file = event.target.files[0];
  }

  uploadFile() {
    const reader = new FileReader();
    reader.onload = () => {
      const fileContent = reader.result;
      var exercices = fileContent?.toString().split("##")
      exercices!.forEach((exo: any, id: number) => {
        this.exercice = [
          {
            num: id,
            questions: [],
            imagePrinc: ""
          }
        ]
        var quizs = exo.split("#")
        quizs.forEach((quiz: any, id: number) => {
          if (id != 0) {
            console.log(quiz.split('\n')[0])
            var cor = quiz.split('\n')[0].split(',')
            var enonce = quiz.split('\n')[1]
            this.exercice[this.exercice.length - 1].questions[this.exercice[this.exercice.length - 1].questions.length] = {
              corrige: cor, image: "63f8dcf5d5d5dfb9d67abf8f",
              quiz: enonce,
              propositions: []
            }
            var propositions = quiz.split('•')
            for (let i = 0; i < propositions.length; i++) {
              if (i == 0)
                continue
              const prefix = this.exercice[this.exercice.length - 1].questions[this.exercice[this.exercice.length - 1].questions.length - 1].propositions
              console.log(prefix.length)
              prefix[prefix.length] = { val: this.lettres[i - 1], lab: propositions[i], isChecked: false }
            }
          }
        });
        console.log(this.exercice)
        this.apiService.addExercice(this.exercice[0]).subscribe((res:any)=>{
          console.log(res)
        })
      });
    };
    reader.readAsText(this.file);
  }
  ngOnInit(): void {
  }
}
