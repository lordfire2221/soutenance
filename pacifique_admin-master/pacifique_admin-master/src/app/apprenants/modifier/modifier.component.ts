import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.scss']
})
export class ModifierComponent implements OnInit {
  sidebarVisible = true;
  public modifierApprenant!: UntypedFormGroup;
  public datas!: any;
  selectedFiles: FileList | undefined;
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
    private apiService: ApiService,
    private fb: UntypedFormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.modifierApprenant = this.fb.group({
      nom: ['', [Validators.required, Validators.maxLength(255)]],
      dateNaissance: ['', Validators.required],
      dateDebut: ['', Validators.required],
      lieuNaissance: ['', Validators.required],
      phone: ['', Validators.required],
      lieuResidence: ['', Validators.required],
      cours: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      statut: ['', Validators.required],
      genre: ['', Validators.required]
    })
  }

  logout() {
    this.authService.clearStorage();
    this.router.navigate(['/login'])
  }
  onSubmit() {
    this.apiService.modifyApprenant(this.authService.getData('id')!, this.modifierApprenant.value).subscribe((res:any)=>{
      this.router.navigate(['apprenants'])
    })
  }

  ngOnInit(): void {
    var id: string = this.authService.getData('id')!
    this.apiService.getOneApprenantById(id).subscribe(
      (res: any) => {
        this.modifierApprenant.patchValue({
          nom: res.nom,
          dateNaissance: res.dateNaissance,
          lieuNaissance: res.lieuNaissance,
          phone: res.phone,
          lieuResidence: res.lieuResidence,
          cours: res.cours,
          email: res.email,
          statut: res.statut,
          genre: res.genre,
          dateDebut: res.dateDebut,
          image: res.image
        })
        this.authService.setDataInLocalStorage('apprenant', JSON.stringify(res))
      }
    )
  }
}
