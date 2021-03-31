import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IdealizadoresPageRoutingModule } from './idealizadores-routing.module';
import { IdealizadoresPage } from './idealizadores.page';
import { TabsComponent } from '../components/tabs/tabs.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdealizadoresPageRoutingModule,
  ],
  declarations: [IdealizadoresPage, HeaderComponent, FooterComponent]
})
export class IdealizadoresPageModule {}
