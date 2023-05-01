import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  sidebarVisible = true;

  public registerForm: FormGroup;
  public errorMessage!: string;
  public isLogin: boolean = false;
  selectedFiles: FileList | undefined;
  percentage!: number;

  constructor(private fb: FormBuilder,
    private router: Router,
    public apiService: ApiService
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      password_conf: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  onSubmit() {
    const formValue = this.registerForm.value;
    if (formValue.password === formValue.password_conf) {
      this.apiService.addApprenant({
        email: formValue.email,
      });
      this.router.navigate(['login'])
    }
    else {
      alert('Les mots de passe ne corespondent pas!')
    }
  }

  ngOnInit(): void {
  }

}
