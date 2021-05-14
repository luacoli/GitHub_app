import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JsonPerfil } from '../models/JsonPerfil';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  public userJson: string;

  constructor(private http: HttpClient) {}

  async getUser(user: string) {
    const url = `https://api.github.com/users/${user}`;
    const result = await this.http.get<JsonPerfil>(url).toPromise();
    console.log(result);
    return result;
  }

  async getRepos(user: string) {
    const url = `https://api.github.com/repos/${user}/repos`;
    const result = await this.http.get<JsonPerfil>(url).toPromise();

    return result;
  }

  async getCommits(user: string, repos: string) {
    const url = `https://api.github.com/repos/${user}/${repos}/commits`;
    const result = await this.http.get<JsonPerfil>(url).toPromise();

    return result;
  }
  //url https://api.github.com/users/name
}
