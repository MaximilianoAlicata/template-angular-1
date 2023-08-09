import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './sections/intro/intro.component';
import { AboutComponent } from './sections/about/about.component';
import { ServicesComponent } from './sections/services/services.component';
import { PortfolioComponent } from './sections/portfolio/portfolio.component';
import { TeamComponent } from './sections/team/team.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { IconBoxComponent } from './sections/about/icon-box/icon-box.component';
import { MemberComponent } from './sections/team/member/member.component';
import { AlbumComponent } from './sections/portfolio/album/album.component';
import { FormComponent } from './sections/contact/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientComponent } from './http-client/http-client.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent,
    NavComponent,
    IconBoxComponent,
    MemberComponent,
    AlbumComponent,
    FormComponent,
    HttpClientComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
