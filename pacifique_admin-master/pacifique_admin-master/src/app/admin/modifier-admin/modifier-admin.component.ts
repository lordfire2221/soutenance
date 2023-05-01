import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-modifier-admin',
  templateUrl: './modifier-admin.component.html',
  styleUrls: ['./modifier-admin.component.scss']
})
export class ModifierAdminComponent implements OnInit {
  sidebarVisible = true;
  public modifierAdmin!: UntypedFormGroup;
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
  constructor(
    private apiService: ApiService,
    private fb: UntypedFormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    var id:string = this.authService.getData('id')!
    this.apiService.getOneAdminById(id).subscribe(
      (res:any)=>{
        authService.setDataInLocalStorage('admin',JSON.stringify(res))
      }
    )
    var admin = JSON.parse(authService.getData('admin')!)
    this.modifierAdmin = this.fb.group({
      nom: [admin.nom, [Validators.required, Validators.maxLength(255)]],
      dateNaissance: [admin.dateNaissance, Validators.required],
      lieuNaissance: [admin.lieuNaissance, Validators.required],
      phone: [admin.phone, Validators.required],
      lieuResidence: [admin.lieuResidence, Validators.required],
      email: [admin.email, [Validators.required, Validators.email]],
      statut: [admin.statut, Validators.required],
      genre: [admin.genre, Validators.required]
    })
  }

  logout() {
    this.authService.clearStorage();
    this.router.navigate(['/login'])
  }
  onSubmit() {
    this.apiService.modifyAdmin(this.authService.getData('id')!,this.modifierAdmin.value).subscribe((res:any)=>{
      this.router.navigate(['admin'])
    })
  }
  
  ngOnInit(): void {
  }
}
