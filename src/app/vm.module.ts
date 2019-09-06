import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { VmRoutingModule } from './vm-routing.module';
import { VmComponent as VmComponent } from './vm.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AuthCallbackComponent } from './auth/auth-callback.component';
import { ProfileComponent } from './core/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    VmComponent,
    NavbarComponent,
    AuthCallbackComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    VmRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [VmComponent]
})
export class VmModule { }
