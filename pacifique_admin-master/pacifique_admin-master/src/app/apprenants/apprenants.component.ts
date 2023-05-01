import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-apprenants',
  templateUrl: './apprenants.component.html',
  styleUrls: ['./apprenants.component.scss']
})
export class ApprenantsComponent implements OnInit {
  sidebarVisible = true;
  public datas: any[] = [];
  isShow = false;
  role:String = "";

  constructor(
    private authService: AuthService, 
    
    private router: Router, 
    private apiService: ApiService
    ) { }

  ngOnInit(): void {
    this.apiService.getApprenant().subscribe(
      (res:any) => (this.datas = res,this.isShow  = true)
    )
    this.apiService.getUser(this.authService.getData('_id')!).subscribe((res:any)=>{
      this.role = res.role
    })  
  }
  desactivate(id:string){
    this.apiService.deleteApprenant(id).subscribe((res:any)=>{
      alert(res.message)
      this.router.routeReuseStrategy.shouldReuseRoute = ()=>false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/']);
    })
  }
  activate(id: string) {
    this.apiService.activateApprenant(id).subscribe(
      (res:any)=>{
        alert(res.message)
        this.router.routeReuseStrategy.shouldReuseRoute = ()=>false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/']);
      }
    );
  }
  modify(id:string){
    this.authService.setDataInLocalStorage('id',id)
    this.router.navigate([`apprenants/modifier`])
  }
  async logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
