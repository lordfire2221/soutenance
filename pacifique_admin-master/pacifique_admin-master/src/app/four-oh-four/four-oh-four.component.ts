import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-four-oh-four',
  templateUrl: './four-oh-four.component.html',
  styleUrls: ['./four-oh-four.component.scss']
})
export class FourOhFourComponent implements OnInit {
  sidebarVisible = true;

  constructor(private authService:AuthService,    
    private router:Router) { }

  ngOnInit(): void {
  }
logout(){
  this.authService.clearStorage();
    this.router.navigate(['/login'])
}
}
