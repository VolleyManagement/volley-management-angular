import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { VmRoutingModule } from './vm-routing.module';
import { VmComponent as VmComponent } from './vm.component';

@NgModule({
  declarations: [
    VmComponent
  ],
  imports: [
    BrowserModule,
    VmRoutingModule
  ],
  providers: [],
  bootstrap: [VmComponent]
})
export class VmModule { }
