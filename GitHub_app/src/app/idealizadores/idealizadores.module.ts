import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IdealizadoresPageRoutingModule } from './idealizadores-routing.module';
import { IdealizadoresPage } from './idealizadores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdealizadoresPageRoutingModule,
  ],
  declarations: [IdealizadoresPage ]
})
export class IdealizadoresPageModule {}
