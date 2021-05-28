import { Component, ModuleWithProviders, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../models/gitUsers';
import { ServicesService } from '../services/services.service';
//import { JsonPerfil} from '../models/gitUsers';


@Component({
  selector: 'app-visualizar-perfil',
  templateUrl: './visualizar-perfil.page.html',
  styleUrls: ['./visualizar-perfil.page.scss'],
})
export class VisualizarPerfilPage implements OnInit {
  public user: Users;
  // urlGit: string = "https://github.com/";

  constructor(
    private route: ActivatedRoute,
    private service: ServicesService
  ) {
    this.getData();
   }

   private async getData(){
    const id = this.route.snapshot.paramMap.get('id')
    this.user = await this.service.getUser(id);
   }

  
  ngOnInit() {
  }

}
