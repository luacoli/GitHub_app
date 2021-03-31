import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizarPerfilPageRoutingModule } from './visualizar-perfil-routing.module';

import { VisualizarPerfilPage } from './visualizar-perfil.page';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizarPerfilPageRoutingModule
  ],
  declarations: [VisualizarPerfilPage, HeaderComponent, FooterComponent]
})
export class VisualizarPerfilPageModule {}
