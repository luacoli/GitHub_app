import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizarRepositoriosPageRoutingModule } from './visualizar-repositorios-routing.module';

import { VisualizarRepositoriosPage } from './visualizar-repositorios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizarRepositoriosPageRoutingModule
  ],
  declarations: [VisualizarRepositoriosPage]
})
export class VisualizarRepositoriosPageModule {}
