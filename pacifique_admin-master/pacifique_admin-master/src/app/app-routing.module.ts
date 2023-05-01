import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AjouterAdminComponent } from './admin/ajouter-admin/ajouter-admin.component';
import { ModifierAdminComponent } from './admin/modifier-admin/modifier-admin.component';
import { AjouterComponent } from './apprenants/ajouter/ajouter.component';
import { ApprenantsComponent } from './apprenants/apprenants.component';
import { ModifierComponent } from './apprenants/modifier/modifier.component';
import { ConduiteComponent } from './conduite/conduite.component';
import { ProgrammeConduiteComponent } from './conduite/programme-conduite/programme-conduite.component';
import { AjoutCoursComponent } from './cours/ajout-cours/ajout-cours.component';
import { CoursComponent } from './cours/cours.component';
import { ModifierCoursComponent } from './cours/modifier-cours/modifier-cours.component';
import { CrenneauComponent } from './crenneau/crenneau.component';
import { ProgrammeCrenneauComponent } from './crenneau/programme-crenneau/programme-crenneau.component';
import { AjoutExoComponent } from './exercices/ajout-exo/ajout-exo.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { ModifierExoComponent } from './exercices/modifier-exo/modifier-exo.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { Authguard } from './guard/auth.guard';
import { ImagesUploadComponent } from './images-upload/images-upload.component';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { PresencesComponent } from './presences/presences.component';
import { ValidationsComponent } from './presences/validations/validations.component';
import { AjoutRevComponent } from './revisions/ajout-rev/ajout-rev.component';
import { ModifierRevComponent } from './revisions/modifier-rev/modifier-rev.component';
import { RevisionsComponent } from './revisions/revisions.component';
import { SignalisationComponent } from './signalisation/signalisation.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'not-found',component:FourOhFourComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'cours',canActivate:[Authguard],component:CoursComponent
  },
  {
    path:'cours/modifier',canActivate:[Authguard],component:ModifierCoursComponent
  },
  {
    path:'cours/ajouter',canActivate:[Authguard],component:AjoutCoursComponent
  },
  {
    path:'exercices',canActivate:[Authguard],component:ExercicesComponent
  },
  {
    path:'exercices/ajouter',canActivate:[Authguard],component:AjoutExoComponent
  },
  {
    path:'exercices/modifier',canActivate:[Authguard],component:ModifierExoComponent
  },
  {
    path:'revisions',canActivate:[Authguard],component:RevisionsComponent
  },
  {
    path:'revisions/ajouter',canActivate:[Authguard],component:AjoutRevComponent
  },
  {
    path:'revisions/modifier',canActivate:[Authguard],component:ModifierRevComponent
  },
  {
    path:'upload',canActivate:[Authguard],component:ImagesUploadComponent
  },
  {
    path:'',redirectTo:'/apprenants',pathMatch:'full'
  },
  // {
  //   path:'gestion',canActivate:[Authguard],component:GestionComponent
  // },
  // {
  //   path:'desactiver',canActivate:[Authguard],component:DesactiverComponent
  // },
  // {
  //   path:'messages',canActivate:[Authguard],component:MessagesComponent
  // },
  {
    path:'notes',canActivate:[Authguard],component:NotesComponent
  },
  {
    path:'conduite',canActivate:[Authguard],component:ConduiteComponent
  },
  {
    path:'conduite/edit',canActivate:[Authguard],component:ProgrammeConduiteComponent
  },
  {
    path:'moniteur',canActivate:[Authguard],component:CrenneauComponent
  },
  {
    path:'moniteur/edit',canActivate:[Authguard],component:ProgrammeCrenneauComponent
  },
  {
    path:'crenneau',canActivate:[Authguard],component:CrenneauComponent
  },
  {
    path:'crenneau/edit',canActivate:[Authguard],component:ProgrammeCrenneauComponent
  },
  {
    path:'presence',canActivate:[Authguard],component:PresencesComponent
  },
  {
    path:'presence/edit',canActivate:[Authguard],component:ValidationsComponent
  },
  // {
  //   path:'code',canActivate:[Authguard],component:CodeComponent
  // },
  // {
  //   path:'code/edit',canActivate:[Authguard],component:ProgrammeCodeComponent
  // },
  {
    path:'apprenants',canActivate:[Authguard],component:ApprenantsComponent
  },
  {
    path:'apprenants/modifier',canActivate:[Authguard],component:ModifierComponent
  },
  {
    path:'apprenants/ajouter',canActivate:[Authguard],component:AjouterComponent
  },
  {
    path:'admin',canActivate:[Authguard],component:AdminComponent
  },
  {
    path:'admin/modifier',canActivate:[Authguard],component:ModifierAdminComponent
  },
  {
    path:'signalisation',canActivate:[Authguard],component:SignalisationComponent
  },
  {
    path:'admin/ajouter',canActivate:[Authguard],component:AjouterAdminComponent
  },
  {
    path:'**',redirectTo:'/not-found',pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
