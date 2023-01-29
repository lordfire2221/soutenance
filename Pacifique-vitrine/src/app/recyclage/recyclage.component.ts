import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recyclage',
  templateUrl: './recyclage.component.html',
  styleUrls: ['./recyclage.component.scss']
})
export class RecyclageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  visible:boolean=false
  dNone(){
    this.visible?this.visible=false:this.visible=true
  }
}
