import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Users } from '../models/gitUsers';

type Usernames = {
  id: number;
  login: string;
};

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private usernames: Usernames[] = [];

  constructor(private storage: Storage) {
    this.storage.create();
    this.loadFromStorage();
  }

  private async loadFromStorage() {
    const storedUsers = await this.storage.get('usernames');

    if (storedUsers) {
      this.usernames.push(...storedUsers);
    }
  }

  public allUsers() {
    return this.usernames;
  }

  public addRecentUser(user: Usernames) {
    this.usernames.push(user);
    this.storage.set('usernames', this.usernames.reverse());
  }
}
