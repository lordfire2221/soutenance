import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  sidebarVisible = true;
  public datas: any[] = [];
  isShow = false


constructor(private authService: AuthService, 
  private router: Router,private apiService:ApiService) { }

ngOnInit(): void {
  this.apiService.getNotes().subscribe(
    (res:any) => (this.datas = res,this.isShow  = true)
  )
}
logout() {
  this.authService.clearStorage();
    this.router.navigate(['/login'])
}

}
