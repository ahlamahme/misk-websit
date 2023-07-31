import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavebarComponent } from './navebar/navebar.component';
import { CenterElementComponent } from './center-element/center-element.component';
import { LogoDescribtionComponent } from './logo-describtion/logo-describtion.component';
import { ManyYearsOfExpComponent } from './many-years-of-exp/many-years-of-exp.component';
import { OurServiceComponent } from './our-service/our-service.component';
import { OurPlansComponent } from './our-plans/our-plans.component';

@NgModule({
  declarations: [
    AppComponent,
    NavebarComponent,
    CenterElementComponent,
    LogoDescribtionComponent,
    ManyYearsOfExpComponent,
    OurServiceComponent,
    OurPlansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
