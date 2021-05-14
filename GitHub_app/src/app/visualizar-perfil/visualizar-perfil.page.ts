import { Component, ModuleWithProviders, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services/services.service';
import { JsonPerfil} from '../models/JsonPerfil';


@Component({
  selector: 'app-visualizar-perfil',
  templateUrl: './visualizar-perfil.page.html',
  styleUrls: ['./visualizar-perfil.page.scss'],
})
export class VisualizarPerfilPage implements OnInit {
  public jsonGit: JsonPerfil;

  constructor(
    private route: ActivatedRoute,
    private service: ServicesService
  ) {
    this.getData();
   }

   private async getData(){
    const id = this.route.snapshot.paramMap.get('id')
    this.jsonGit = await this.service.getUser(id);
   }

  
   

  ngOnInit() {
  }

}
