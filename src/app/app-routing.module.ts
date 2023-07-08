import { NotfoundComponent } from './notfound/notfound.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import { CredentialsComponent } from './credentials/credentials.component';
import { ServicesComponent } from './services/services.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';

const routes: Routes = [

  {path: '', redirectTo:'welcome',pathMatch: 'full'},
  {path: 'welcome', component:WelcomeComponent},
  {path: 'aboutUs', component:AboutUsComponent},
  {path: 'services', component:ServicesComponent},
  {path: 'credentials', component:CredentialsComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'career', component:CareerComponent},
  {path: 'datapotection', component:DataProtectionComponent},
  {path:'**',component:WelcomeComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
