import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-images-upload',
  templateUrl: './images-upload.component.html',
  styleUrls: ['./images-upload.component.scss']
})
export class ImagesUploadComponent {
  sidebarVisible = true;
  imageForm: FormGroup
  image: any[] = []
  constructor(private authService: AuthService, private apiService: ApiService,
    private router: Router, private fb: FormBuilder) {
    this.imageForm = fb.group({
      type: ['', Validators.required]
    })
  }

  upload(event: any) {
    var files = (event.target as HTMLInputElement).files!
    for (let i = 0; i < files?.length; i++) {
      const formValue = this.imageForm.value;
      var fd = new FormData();
      fd.append('file', files[i]);
      fd.append('type', formValue.type);
      if (this.imageForm.valid) {
        try {
          this.apiService.addImage(fd).subscribe((res: any) => {
            console.log(res)
          })
        } catch (error: any) {
          alert(error.message)
        }
      } else {
        alert("Remplissez tous les champs !!");
      }
    }
    alert("done")
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
