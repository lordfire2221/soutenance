import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  public paymentForm!: FormGroup;

  constructor( 
    private firebaseService: FirebaseService,
        private fb: FormBuilder,
  ) {this.paymentForm = this.fb.group({
      name: ['',[Validators.required,Validators.maxLength(255)]],
      email: ['',[Validators.email,Validators.required]],
      phone: ['',Validators.required],
      montant:['',Validators.required],
      type:['',Validators.required],      
    }) }

  ngOnInit(): void {
  }
  visible:boolean=false
  dNone(){
    this.visible?this.visible=false:this.visible=true
  }

  onSubmit() {
    if(this.paymentForm.value.type == "momo"){
      this.firebaseService.createContact(this.paymentForm.value).then(
        ()=>{
          this.ngOnInit()
        }
      )
    }
    if(this.paymentForm.value.type == "card"){
      this.firebaseService.createContact(this.paymentForm.value).then(
        ()=>{
          this.ngOnInit()
        }
      )
    }
  }
}
