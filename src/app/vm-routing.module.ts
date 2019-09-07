import { AuthCallbackComponent } from './auth/auth-callback.component';
import { AuthGuard } from './auth/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './auth/interceptor.service';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './core/profile/profile.component';
import { Routes, RouterModule } from '@angular/router';
import { ContributorsComponent } from './contributors/contributors/contributors.component';

const routes: Routes = [
  {
    path: 'callback',
    component: AuthCallbackComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'contributors',
    component: ContributorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ]
})
export class VmRoutingModule { }
