import { Component, OnInit } from '@angular/core';
import { PublicApiService } from 'src/app/api/public-api.service';
import { Contributor } from 'src/app/api/contributor.model';
import { ProtectedApiService } from 'src/app/api/protected-api.service';

@Component({
  selector: 'vm-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss']
})
export class ContributorsComponent implements OnInit {
  public publicContributors: Contributor[];
  public protectedContributors: Contributor[];

  constructor(private publicApi: PublicApiService, private protectedApi: ProtectedApiService) { }

  ngOnInit() {
  }

  // There is no difference between Public and Protected at this time
  getPublic(){
    this.publicApi.getContributors()
      .subscribe(con => this.publicContributors = con);
  }

  getProtected(){
    this.protectedApi.getContributors()
      .subscribe(con => this.protectedContributors = con);
  }
}
