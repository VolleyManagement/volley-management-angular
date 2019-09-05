import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { VmRoutingModule } from './vm-routing.module';
import { VmComponent as VmComponent } from './vm.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AuthCallbackComponent } from './auth/auth-callback.component';

@NgModule({
  declarations: [
    VmComponent,
    NavbarComponent,
    AuthCallbackComponent
  ],
  imports: [
    BrowserModule,
    VmRoutingModule
  ],
  providers: [],
  bootstrap: [VmComponent]
})
export class VmModule { }
