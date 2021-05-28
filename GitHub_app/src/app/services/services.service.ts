import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users, UserSearchResult } from '../models/gitUsers';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(private http: HttpClient) {}

  async getUsers(user: string) {
    const url = 'https://api.github.com/search/users?q=' + user + '&per_page';
    const result = await this.http.get<UserSearchResult>(url).toPromise();

    return result.users;
  }

  async getUser(user: string) {
    const url = `https://api.github.com/users/${user}`;
    const result = (await this.http.get(url).toPromise()) as Users;
    console.log(result);
    return result;
  }

  async getRepos(user: string) {
    const url = `https://api.github.com/users/${user}/repos`;
    const result = await this.http.get(url).toPromise();

    return result;
  }

  async getCommits(user: string, repos: string) {
    const url = `https://api.github.com/users/${user}/${repos}/commits`;
    const result = await this.http.get(url).toPromise();

    return result;
  }
}
