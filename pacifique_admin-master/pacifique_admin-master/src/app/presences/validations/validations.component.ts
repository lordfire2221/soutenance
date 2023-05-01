import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
  styleUrls: ['./validations.component.scss']
})
export class ValidationsComponent implements OnInit {
  sidebarVisible = true;
  public datas: any[] = [];
  isShow = false;
  role:String = "";
  user:any={url:"",nom:""};
  id:string=""


  constructor(private authService: AuthService,
    private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getPendingPresence().subscribe(
      (res:any) => (this.datas = res,this.isShow  = true,console.log(res))
    )
  }
  valider(id:string){
    if(confirm("Voullez-vous valider cette présence ?"))
      this.apiService.activatePresence(id)
  }
  get(id:string,uid:string){
    this.id=id;
    this.apiService.getOneApprenantById(uid).subscribe((res:any)=>{
      this.user = res
    })
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
