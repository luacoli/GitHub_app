import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services/services.service';
import { JsonPerfil } from '../models/JsonPerfil';

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.page.html',
  styleUrls: ['./explorar.page.scss'],
})
export class ExplorarPage implements OnInit {
  public username;
  public jsonGit: JsonPerfil;

  constructor(
    private route: ActivatedRoute,
    private service: ServicesService
  ) {}

  private async getData(username) {
    // const id = this.route.snapshot.paramMap.get('id');
    this.jsonGit = await this.service.getUser(username);
  }

  public async searchUser() {
    this.getData(this.username);
  }

  ngOnInit() {}
}
