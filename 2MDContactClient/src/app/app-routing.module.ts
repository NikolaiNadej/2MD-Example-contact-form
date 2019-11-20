import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { ContactFormComponent } from './contact-form/contact-form.component';


const routes: Routes = [ 
  {
    path: '',
    pathMatch: 'full',
    component: ContactFormComponent
  },
  {
    path: 'thankyou',
    component: ThankYouComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
