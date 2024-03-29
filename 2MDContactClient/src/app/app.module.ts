import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MaterialModule } from './material.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationService } from './application.service';
import { ThankYouComponent } from './thank-you/thank-you.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ThankYouComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [AppRoutingModule, ContactFormComponent, ThankYouComponent],
  providers: [    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
