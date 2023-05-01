import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.scss']
})
export class ExercicesComponent implements OnInit {
  sidebarVisible = true;
  public datas: any[] = [];
    isShow = false


  constructor(private authService: AuthService, 
    private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getExercice().subscribe(
      (res:any) => (this.datas = res,this.isShow  = true)
    )
  }
  modify(id:string){
    this.authService.setDataInLocalStorage('id',id)
    this.router.navigate([`exercices/modifier`])
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
