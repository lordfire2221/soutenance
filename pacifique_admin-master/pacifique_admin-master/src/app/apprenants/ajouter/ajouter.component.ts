import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.scss']
})
export class AjouterComponent implements OnInit {
  sidebarVisible = true;
  ajouterApprenant!: UntypedFormGroup;
  datas!: any;
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
    "Toukountouna"," Abomey - Calavi",
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
  selectedFile!: File;
  constructor(
    private apiService: ApiService,
    private fb: UntypedFormBuilder,
    private router: Router,
    private authService: AuthService,
    private http: HttpClient
  ) {
    this.ajouterApprenant = this.fb.group({
      nom: ['', [Validators.required, Validators.maxLength(255)]],
      dateNaissance: ['', Validators.required],
      dateDebut: ['', Validators.required],
      image: [null],
      lieuNaissance: ['', Validators.required],
      phone: ['', Validators.required],
      lieuResidence: ['', Validators.required],
      cours: ['', Validators.required],
      role: ['apprenant', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      statut: [true, Validators.required],
      genre: ['', Validators.required]
    })
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login'])
  }
  createFormData(event:any) {
    const selectedFile = (event.target as HTMLInputElement).files![0];
    this.ajouterApprenant.patchValue({
      image: selectedFile
    })
    this.ajouterApprenant.get('image')?.updateValueAndValidity()
  }
  onSubmit() {
    const formValue = this.ajouterApprenant.value ;
    var   fd = new FormData();
    fd.append('file', formValue.image);
    fd.append('nom', formValue.nom);
    fd.append('dateNaissance', formValue.dateNaissance);
    fd.append('dateDebut', formValue.dateDebut);
    fd.append('cours', formValue.cours);
    fd.append('role', formValue.role);
    fd.append('lieuNaissance', formValue.lieuNaissance);
    fd.append('phone', formValue.phone);
    fd.append('lieuResidence', formValue.lieuResidence);
    fd.append('email', formValue.email);
    fd.append('statut', formValue.statut);
    fd.append('genre', formValue.genre);
    if(this.ajouterApprenant.valid){
      try {
        this.authService.signup(formValue).subscribe((res:any)=>{
          this.apiService.addApprenant(fd).subscribe((res:any)=>{
            this.router.navigate(['apprenants'])
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
