import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IdealizadoresPageRoutingModule } from './idealizadores-routing.module';
import { IdealizadoresPage } from './idealizadores.page';
import { TabsComponent } from '../components/tabs/tabs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdealizadoresPageRoutingModule,
  ],
  declarations: [IdealizadoresPage, TabsComponent]
})
export class IdealizadoresPageModule {}
