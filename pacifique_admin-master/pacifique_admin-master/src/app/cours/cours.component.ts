import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit {
  sidebarVisible = true;
  public datas: any[] = [];
    isShow = false


  constructor(private authService: AuthService, 
    private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCours().subscribe(
      (res:any) => {
        this.datas = res,
        this.isShow  = true
        console.log(res)
      }
    )
  }
  modify(id:string){
    this.authService.setDataInLocalStorage('id',id)
    this.router.navigate([`cours/modifier`])
  }
  logout() {
    this.authService.clearStorage();
    this.router.navigate(['login']);
  }
}
