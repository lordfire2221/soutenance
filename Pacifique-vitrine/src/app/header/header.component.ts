import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  visible:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  dNone(){
    this.visible?this.visible=false:this.visible=true
  }

}
