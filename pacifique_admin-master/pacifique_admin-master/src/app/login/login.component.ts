import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventTypes } from '../models/event-types';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  sidebarVisible = true;
  EventTypes = EventTypes;

  public loginForm: FormGroup;
  public errorMessage!: string;
  public isLogin: boolean = false;
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private apiService: ApiService,
    private router: Router,
    private toastService: ToastService

  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  onSubmit() {
    const formValue = this.loginForm.value;
    this.apiService.getOneAdminByEmail(formValue.email).subscribe(
      (res: any) => {
        if (res != undefined) {
          try {
            const formValue = this.loginForm.value;
            this.authService.login(formValue.email, formValue.password).subscribe(
              (res: any) => {
                this.authService.setAccessToken(res.token);
                this.authService.setDataInLocalStorage("_id", res.userId);
                this.apiService.getUser(this.authService.getData("_id")!).subscribe((res: any) => {
                  if (res.role === "apprenant") {
                    this.router.navigate(['/not-found'])
                  } else {
                    this.router.navigate(['/apprenants'])
                  }
                })
                // errorHandler 
              })
          } catch (error: any) {
            this.showToast(EventTypes.Error, "erreur de connexion", error.message)
          }
        } else {
          this.showToast(EventTypes.Warning, "erreur de connexion", "Vous n'avez pas de compte sur le sytème.")
        }
      }
    )
  }
  showToast(type: EventTypes, title: string, message: string) {
    switch (type) {
      case EventTypes.Success:
        this.toastService.showSuccessToast(title, message);
        break;
      case EventTypes.Warning:
        this.toastService.showWarningToast(title, message);
        break;
      case EventTypes.Error:
        this.toastService.showDangerToast(title, message);
        break;
      default:
        this.toastService.showInfoToast(title, message);
        break;
    }
  }
  public isLogedIn() {
    if (this.authService.getAccessToken() != null) {
      this.isLogin = true
    }
  }

  ngOnInit(): void {
    this.isLogedIn()
  }

}
