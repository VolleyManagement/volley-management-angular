import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Contributor } from './contributor.model';

/**
 * @class PublicApiService
 * @description Provides access to API parts that do not require authentication
 */
@Injectable({
  providedIn: 'root'
})
export class PublicApiService {

  private contributorsUrl = environment.vmApi.baseUrl + '/api/contributors'

  constructor(private http: HttpClient) { }

  getContributors(): Observable<Contributor[]> {
    return this.http.get<Contributor[]>(this.contributorsUrl);
  }
}
