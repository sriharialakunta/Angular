import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ItemsComponent } from './items/items.component';

const routes:Routes=[
  {path:'',redirectTo:'items',pathMatch:'full'},
  {path:'home',component:AppComponent},
  {path:'items',component:ItemsComponent},
  {path:'about',component:AboutComponent},
  {path:'contactinfo',component:ContactUsComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
})
export class AppRoutingModule { }
