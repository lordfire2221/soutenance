import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  sidebarVisible = true;
  public datas: any[] = [];
    isShow = false


  constructor(private authService: AuthService,
    private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAdmin().subscribe(
      (res:any) => (this.datas = res,this.isShow  = true)
    )
  }
  // delete(id:string){
  //   if(confirm("Voulez-vous supprimer cet élément?"))
  //     this.apiService.deleteAdmin(id)
  // }
  desactivate(id:string){
    this.apiService.deleteAdmin(id).subscribe((res:any)=>{
      alert(res.message)
      this.router.routeReuseStrategy.shouldReuseRoute = ()=>false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/']);    })
  }
  activate(id: string) {
    this.apiService.activateAdmin(id).subscribe(
      (res:any)=>{
        alert(res.message)
        this.router.routeReuseStrategy.shouldReuseRoute = ()=>false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/']);      }
    );
  }
  modify(id:string){
    this.authService.setDataInLocalStorage('id',id)
    this.router.navigate([`admin/modifier`])
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
