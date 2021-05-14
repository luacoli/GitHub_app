import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

type User = {
  id: number;
  login: string;
};

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private storage: Storage) {
    // this.storage.get('users').then((user) => {
    //   this.users.push(...user);
    // });
    this.loadFromStorage();
  }

  private users: User[] = [];

  private async loadFromStorage() {
    const storedUsers = await this.storage.get('users');
 
    if (storedUsers) {
      this.users.push(...storedUsers);
    }
  }
  
  public allUsers(): Readonly<User>[] {
    return this.users;
  }

  public addRecentUser(user: User) {
    // const maxId = Math.max(0, ...this.users.map((u) => u.id));

    // user.id + 1;
    this.users.push({ ...user });

    this.storage.set('users', this.users);
  }
}
