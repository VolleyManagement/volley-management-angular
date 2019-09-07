import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'vm-root',
  templateUrl: './vm.component.html',
  styleUrls: ['./vm.component.scss']
})
export class VmComponent {
  title = 'Volley Management';

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.localAuthSetup();
  }
}
