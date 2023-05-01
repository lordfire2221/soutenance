import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-ajouter-admin',
  templateUrl: './ajouter-admin.component.html',
  styleUrls: ['./ajouter-admin.component.scss']
})
export class AjouterAdminComponent implements OnInit {
  sidebarVisible = true;
  public ajouterAdmin!: UntypedFormGroup;
  public datas!: any;
  selectedFiles: FileList | undefined;
  percentage!: number;
  communes: string[] = [
    "Banikoara",
    "Kandi",
    "Gogonou",
    "Karimama",
    "Malanville",
    "Ségbana",
    "Boukoumbé",
    "Cobli",
    "Kérou",
    "Kouandé",
    "Matéri",
    "Natitingou", "Péhunco",
    "Tanguiéta",
    "Toukountouna", " Abomey - Calavi",
    "Allada",
    "Kpomassè",
    "Ouidah",
    "Sô-Ava",
    "Toffo",
    "Tori",
    "Zê",
    "Bembèrèkè",
    "Kalalé",
    "N’Dali",
    "Nikki",
    "Parakou",
    "Pèrèrè",
    "Sinendé",
    "Tchaourou",
    "Bantè",
    "Dassa-Zoumè",
    "Glazoué",
    "Ouessè",
    "Savalou",
    "Savè",
    "Aplahoué",
    "Djakotomey",
    "Dogbo",
    "Klouékanmey",
    "Lalo",
    "Toviklin",
    "Bassila",
    "Copargo",
    "Djougou",
    "Ouaké",
    "Cotonou",
    "Athiémé",
    "Bopa",
    "Comè",
    "Grand-Popo",
    "Houéyogbé",
    "Lokossa",
    "Adjarra",
    "Adjohoun",
    "Aguégués",
    "Akpro-Missérété",
    "Avrankou",
    "Bonou",
    "Dangbo",
    "Porto-Novo",
    "Sèmè-Podji",
    "Adja-ouèrè",
    "Ifangni",
    "Kétou",
    "Pobè",
    "Sakété",
    "Abomey",
    "Agbangnizoun",
    "Bohicon",
    "Covè",
    "Djidja",
    "Ouinhi",
    "Zagnanado",
    "Za-kpota",
    "Zogbodomè",
  ]
  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private fb: UntypedFormBuilder,
    private router: Router,
  ) {
    this.ajouterAdmin = this.fb.group({
      nom: ['', [Validators.required, Validators.maxLength(255)]],
      dateNaissance: ['', Validators.required],
      role: ['', Validators.required],
      lieuNaissance: ['', Validators.required],
      phone: ['', Validators.required],
      lieuResidence: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      statut: [false, Validators.required],
      genre: ['', Validators.required]
    })
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login'])
  }
  onSubmit() {
    const formValue = this.ajouterAdmin.value ;
    if(this.ajouterAdmin.valid){
      try {
        this.authService.signup(formValue).subscribe((res:any)=>{
          this.apiService.addAdmin(formValue).subscribe((res:any)=>{

            alert(res.message)
            this.router.navigate(['/admin'])
          })
        })
      } catch (error:any) {
        alert(error.message)
      }
      return true
    }else{
      alert("Remplissez tous les champs !!");
      return false
    }
  }
  ngOnInit(): void {
  }
}
