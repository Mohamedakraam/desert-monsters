import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';

import { ExperianceComponent } from './components/experiance/experiance.component';
import { OffersComponent } from './components/offers/offers.component';
import { MediaComponent } from './components/media/media.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DestinationComponent } from './components/destination/destination.component';
import { SubMediaComponent } from './components/sub-media/sub-media.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ComponentsComponent },
  { path: 'user-profile', component: ProfileComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'experiance', component: ExperianceComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'media', component: MediaComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'destination', component: DestinationComponent },
  { path: 'sub-media', component: SubMediaComponent },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
