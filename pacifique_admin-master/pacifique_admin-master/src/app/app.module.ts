import { LOCALE_ID,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApprenantsComponent } from './apprenants/apprenants.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ModifierComponent } from './apprenants/modifier/modifier.component';
import { AjouterComponent } from './apprenants/ajouter/ajouter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { FormComponent } from './form/form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './notes/notes.component';
import { ProgrammeComponent } from './programme/programme.component';
import { ConduiteComponent } from './conduite/conduite.component';
import { ProgrammeConduiteComponent } from './conduite/programme-conduite/programme-conduite.component';
import { CoursComponent } from './cours/cours.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { AjoutExoComponent } from './exercices/ajout-exo/ajout-exo.component';
import { ModifierExoComponent } from './exercices/modifier-exo/modifier-exo.component';
import { ModifierCoursComponent } from './cours/modifier-cours/modifier-cours.component';
import { ImagesUploadComponent } from './images-upload/images-upload.component';
import { CrenneauComponent } from './crenneau/crenneau.component';
import { ProgrammeCrenneauComponent } from './crenneau/programme-crenneau/programme-crenneau.component';
import { DesactiverAdminComponent } from './admin/desactiver-admin/desactiver-admin.component';
import { ModifierAdminComponent } from './admin/modifier-admin/modifier-admin.component';
import { AjouterAdminComponent } from './admin/ajouter-admin/ajouter-admin.component';
import { AdminComponent } from './admin/admin.component';
import { PresencesComponent } from './presences/presences.component';
import { ValidationsComponent } from './presences/validations/validations.component';
import { AuthService } from './services/auth.service';
import { Authguard } from './guard/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth';
import { SignalisationComponent } from './signalisation/signalisation.component';
import { AjoutCoursComponent } from './cours/ajout-cours/ajout-cours.component';
import { RevisionsComponent } from './revisions/revisions.component';
import { AjoutRevComponent } from './revisions/ajout-rev/ajout-rev.component';
import { ModifierRevComponent } from './revisions/modifier-rev/modifier-rev.component';
import { ImgViewerComponent } from './img-viewer/img-viewer.component';
import { ApiService } from './services/api.service';
import { DemandeService } from './services/demande.service';
import { ToastComponent } from './toast/toast.component';
import { ToasterComponent } from './toaster/toaster.component';
import { ErrorCatchingInterceptor } from './interceptors/error-catching.interceptor';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { SpinnerComponent } from './spinner/spinner.component';
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    ApprenantsComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    ModifierComponent,
    AjouterComponent,
    SignupComponent,
    LoginComponent,
    FourOhFourComponent,
    FormComponent,
    NotesComponent,
    ProgrammeComponent,
    ConduiteComponent,
    ProgrammeConduiteComponent,
    CoursComponent,
    ExercicesComponent,
    AjoutExoComponent,
    ModifierExoComponent,
    ModifierCoursComponent,
    ImagesUploadComponent,
    CrenneauComponent,
    ProgrammeCrenneauComponent,
    DesactiverAdminComponent,
    ModifierAdminComponent,
    AjouterAdminComponent,
    AdminComponent,
    PresencesComponent,
    ValidationsComponent,
    SignalisationComponent,
    AjoutCoursComponent,
    RevisionsComponent,
    AjoutRevComponent,
    ModifierRevComponent,
    ImgViewerComponent,
    ToastComponent,
    ToasterComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    ApiService,
    DemandeService,
    Authguard,    
    { provide: LOCALE_ID, useValue: 'fr-FR'},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorCatchingInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
