import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../models/gitUsers';
import { ServicesService } from '../services/services.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.page.html',
  styleUrls: ['./explorar.page.scss'],
})
export class ExplorarPage implements OnInit {
  public username = '';
 //public jsonGit: JsonPerfil;
  public users: Users[] = [];
  public usernames: Users[] = [];
  public usernamesRecent = this.storage.allUsers();

  

  constructor(
    // private route: ActivatedRoute,
    private service: ServicesService,
     private storage: StorageService
  ) {
  }
  
  // public users = this.storage.allUsers();
  public async searchUser() {
    this.users = await this.service.getUsers(this.username);
    // this.storage.addRecentUser(this.username);
  }

  public async getUser() {
   this.storage.addRecentUser(this.username as any);
   // this.user = await this.service.getUser(this.username);
  }
  
 

  
 
  

  ngOnInit() {}
}
