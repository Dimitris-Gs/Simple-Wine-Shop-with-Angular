import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    TeamComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: '', 
      component: HomeComponent
    },
    {
      path: 'our-team',
      component: TeamComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    },
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
