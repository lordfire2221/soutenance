import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HomeComponent } from './home/home.component';
import { InformationsComponent } from './informations/informations.component';
import { PaymentComponent } from './payment/payment.component';
import { PricingComponent } from './pricing/pricing.component';
import { RecyclageComponent } from './recyclage/recyclage.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'payment',component:PaymentComponent},
  {path:'pricing',component:PricingComponent},
  {path:'informations',component:InformationsComponent},
  {path:'recyclage',component:RecyclageComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:FourOhFourComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
