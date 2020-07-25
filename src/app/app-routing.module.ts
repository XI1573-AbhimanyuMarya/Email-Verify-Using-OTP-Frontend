import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailAuthComponent } from './app/email-auth/email-auth.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { LoginPageComponent } from './app/login-page/login-page.component';



const routes: Routes = [
  { path: '', component: EmailAuthComponent },
  { path: 'login', component: LoginPageComponent, canActivate:[AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
