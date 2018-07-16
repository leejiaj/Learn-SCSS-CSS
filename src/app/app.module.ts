import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScssTutorial1Component } from './scss-tutorial1/scss-tutorial1.component';
import { PersonalHomePageComponent } from './personal-home-page/personal-home-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { CourseworkComponent } from './coursework/coursework.component';
import { RecentComponent } from './recent/recent.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ScssTutorial1Component,
    PersonalHomePageComponent,
    HomeComponent,
    CourseworkComponent,
    RecentComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
