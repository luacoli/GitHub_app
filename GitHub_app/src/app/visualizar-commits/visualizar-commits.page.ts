import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-visualizar-commits',
  templateUrl: './visualizar-commits.page.html',
  styleUrls: ['./visualizar-commits.page.scss'],
})
export class VisualizarCommitsPage implements OnInit {
  public commits;
  public repo;
  public login;

  constructor(private route: ActivatedRoute, private service: ServicesService) {
    this.getData();
  }

  private async getData() {
    const id = this.route.snapshot.paramMap.get('id');
    const repo = this.route.snapshot.paramMap.get('repo');
    this.login = id; 
    this.repo = repo;
    this.commits = await this.service.getCommits(id, repo);
  }

  ngOnInit() {}
}
