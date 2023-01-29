import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contactForm!: FormGroup;
  public datas!: any;

  constructor(
    private firebaseService: FirebaseService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.contactForm = this.fb.group({
      name: ['',[Validators.required,Validators.maxLength(255)]],
      email: ['',[Validators.email,Validators.required]],
      subject: ['',Validators.required],
      message:['',Validators.required],
    })
  }

  onSubmit() {
    console.log(this.contactForm.value)
    this.firebaseService.createContact(this.contactForm.value).then(
      ()=>{
        this.ngOnInit()
      }
    )
  }
  
  visible:boolean=false
  dNone(){
    this.visible?this.visible=false:this.visible=true
  }


  ngOnInit(): void {
  }
}
