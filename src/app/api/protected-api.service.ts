import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Contributor } from './contributor.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProtectedApiService {
  private contributorsUrl = environment.vmApi.baseUrl + '/api/contributors/protected'

  constructor(private http: HttpClient) { }

  getContributors(): Observable<Contributor[]> {
    return this.http.get<Contributor[]>(this.contributorsUrl);
  }
}
