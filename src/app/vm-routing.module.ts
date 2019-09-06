import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthCallbackComponent } from './auth/auth-callback.component';
import { ProfileComponent } from './core/profile/profile.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'callback',
    component: AuthCallbackComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class VmRoutingModule { }
