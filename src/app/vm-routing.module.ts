import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthCallbackComponent } from './auth/auth-callback.component';

const routes: Routes = [
  {
    path: 'callback',
    component: AuthCallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class VmRoutingModule { }
