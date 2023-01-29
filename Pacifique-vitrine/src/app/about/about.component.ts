import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public counter:number=0
  public counter1:number=0
  public counter2:number=0
  public counter3:number=0
  constructor() { }

  ngOnInit(): void {
    this.autoCount(20001,0)
    this.autoCount1(17001,0)
    this.autoCount2(9,0)
    this.autoCount3(10,0)
  }
  autoCount(limit:number,start:number){
    for(let i=start;i<limit;i++){
      setTimeout(() => {
        this.counter=i
        }, 5000);
    }
  }
  visible:boolean=false
  dNone(){
    this.visible?this.visible=false:this.visible=true
  }

  autoCount1(limit:number,start:number){
    
    for(let i=start;i<limit;i++){
      setTimeout(() => {
        this.counter1=i
        }, 5000);
    }
  }
  autoCount2(limit:number,start:number){
    for(let i=start;i<limit;i++){
      setTimeout(() => {
        this.counter2=i
        }, 5000);
    }
  }
  autoCount3(limit:number,start:number){
    for(let i=start;i<limit;i++){
      setTimeout(() => {
        this.counter3=i
        }, 5000);
    }
  }

}
