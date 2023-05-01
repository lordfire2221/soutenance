import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ajout-rev',
  templateUrl: './ajout-rev.component.html',
  styleUrls: ['./ajout-rev.component.scss']
})
export class AjoutRevComponent implements OnInit {
  sidebarVisible = true;
  public ajouterApprenant!: UntypedFormGroup;
  public datas!: any;
  file!: File;
  public revision: any;
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
      var revisions = fileContent?.toString().split("##")
      revisions!.forEach((exo: any, id: number) => {
        this.revision = [
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
            this.revision[this.revision.length - 1].questions[this.revision[this.revision.length - 1].questions.length] = {
              corrige: cor, 
              propositions: []
            }
            var propositions = quiz.split('•')
            for (let i = 0; i < propositions.length; i++) {
              if (i == 0)
                continue
              const prefix = this.revision[this.revision.length - 1].questions[this.revision[this.revision.length - 1].questions.length - 1].propositions
              prefix[prefix.length] = { val: this.lettres[i - 1], lab: propositions[i], isChecked: false }
            }
          }
        });
        console.log(this.revision)
        this.apiService.addRevision(this.revision[0]).subscribe((res:any)=>{
          console.log(res)
        })
      });
    };
    reader.readAsText(this.file);
  }
  ngOnInit(): void {
  }
}
