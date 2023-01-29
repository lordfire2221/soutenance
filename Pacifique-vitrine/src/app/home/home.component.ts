import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
