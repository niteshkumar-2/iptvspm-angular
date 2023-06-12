import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashbordComponent } from './component/dashbord/dashbord.component';
import { RegisterComponent } from './component/register/register.component';
import { VarifyEmailComponent } from './component/varify-email/varify-email.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';


const router: Routes =[
  {path: '',redirectTo:'login',pathMatch:'full'},
  {path: 'login',component:LoginComponent},
  {path: 'dashbord',component:DashbordComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'verify-email',component:VarifyEmailComponent},
  {path: 'forgot-password',component:ForgotPasswordComponent},
];

@NgModule({
  imports:[RouterModule.forRoot(router)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
