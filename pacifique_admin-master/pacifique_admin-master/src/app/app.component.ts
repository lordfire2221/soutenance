import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'permis-ecole-admin';
  constructor(private apiService:ApiService,private userservice:AuthService,private router:Router){

  }
  ngOnInit(): void {
    var date = new Date()
    var day = date.getDay()
    if(day > 3){
      this.apiService.getValidDisponibilite().subscribe(
        (res: any) => {
          var datas = res;
          datas.forEach((element:any) => {
            this.apiService.activateDisponibilite(element._id).subscribe((res:any)=>{
              console.log(res)
            })
          });
        }
      )
    }
    this.apiService.ping().subscribe((res:any)=>{
      if(res.status == 0){
        this.userservice.logout()
        this.router.navigate(['/login'])
      }
    })
  }
}
