import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-revisions',
  templateUrl: './revisions.component.html',
  styleUrls: ['./revisions.component.scss']
})
export class RevisionsComponent implements OnInit {
  sidebarVisible = true;
  public datas: any[] = [];
    isShow = false


  constructor(private authService: AuthService, 
    private router: Router, public apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getRevision().subscribe(
      (res:any) => (this.datas = res,this.isShow  = true,console.log(res))
    )
  }
  modify(id:string){
    this.authService.setDataInLocalStorage('id',id)
    this.router.navigate([`revisions/modifier`])
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
