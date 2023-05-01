import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-presences',
  templateUrl: './presences.component.html',
  styleUrls: ['./presences.component.scss']
})
export class PresencesComponent implements OnInit {
  sidebarVisible = true;
  public datas: any[] = [];
  isShow = false;
  role:String = ""


  constructor(private authService: AuthService,
    private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getPresence().subscribe(
      (res:any) => (this.datas = res,this.isShow  = true)
    )
  }
  delete(id:string){
    if(confirm("Voullez-vous supprimer cet élément ?"))
      this.apiService.deletePresence(id)
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
