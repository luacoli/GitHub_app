import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExplorarPageRoutingModule } from './explorar-routing.module';
import { ExplorarPage } from './explorar.page';
import { TabsComponent } from '../components/tabs/tabs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExplorarPageRoutingModule
  ],
  declarations: [ExplorarPage, TabsComponent]
})
export class ExplorarPageModule {}
