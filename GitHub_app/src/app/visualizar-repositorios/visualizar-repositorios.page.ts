import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-visualizar-repositorios',
  templateUrl: './visualizar-repositorios.page.html',
  styleUrls: ['./visualizar-repositorios.page.scss'],
})
export class VisualizarRepositoriosPage implements OnInit {
  public repos;
  public login;

  constructor(private route: ActivatedRoute, private service: ServicesService) {
    this.getData();
  }

  private async getData() {
    const id = this.route.snapshot.paramMap.get('id');
    this.login = id;
    this.repos = await this.service.getRepos(id);
    console.log(this.repos);
  }

  // public dateFormat(dateBefore) {
  //   dateBefore.substr(8, 2) +
  //     '/' +
  //     dateBefore.substr(5, 2) +
  //     '/' +
  //     dateBefore.substr(0, 4);
  // }

  // public timeFormat(timeBefore) {
  //   timeBefore.substr(11, 2) + ':' + timeBefore.substr(14, 2);
  // }

  ngOnInit() {}
}
