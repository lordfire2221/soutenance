import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidebarVisible = true;
  public datas:any = {role:""}
  constructor(private _api:ApiService,private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this._api.getUser(this.authService.getData('_id')!).subscribe((res:any)=>{
      this.datas = res
    })
  }
  logout(){
    this.authService.clearStorage();
    this.router.navigate(['/loginadmin'])
  }
}
