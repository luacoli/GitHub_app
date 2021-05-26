import { Component, OnInit } from '@angular/core';
import { Users } from '../models/gitUsers';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-idealizadores',
  templateUrl: './idealizadores.page.html',
  styleUrls: ['./idealizadores.page.scss'],
})
export class IdealizadoresPage implements OnInit {
  public luana: Users;
  public guilherme: Users;
  public mateus: Users;
  public messias: Users;
  public noelen: Users;

  constructor(    private service: ServicesService
    ) { }

  async ngOnInit() {
    this.luana = await this.service.getUser("luacooli");
    this.guilherme = await this.service.getUser("LosAmigosTI");
    this.mateus = await this.service.getUser("mateus011810");
    this.messias = await this.service.getUser("MessiasPQ");
    this.noelen= await this.service.getUser("NoelenGiovannaAS");
  }

}
