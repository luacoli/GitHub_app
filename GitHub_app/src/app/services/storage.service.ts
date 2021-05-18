import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'
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
    // this.storage.get('users').then((user) => {
    //   this.users.push(...user);
    // });
    this.storage.create();
    this.loadFromStorage();
  
  }

 
  private async loadFromStorage() {
    const storedUsers = await this.storage.get('usernames');
 
    if (storedUsers) {
      this.usernames.push(...storedUsers);
    }
  }
  
  // public aync allUsers(): Readonly<Usernames>[] {
    public allUsers() {
    return  this.usernames;
  }

  public addRecentUser(user: Usernames) {
    //const maxId = Math.max(0, ...this.usernames.map(s => s.id));
    //user.id = maxId + 1;
    console.log(user);
    this.usernames.push(user);
    this.storage.set('usernames', this.usernames.reverse());
    console.log(this.usernames);

  }
}
