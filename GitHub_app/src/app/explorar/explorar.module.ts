import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExplorarPageRoutingModule } from './explorar-routing.module';
import { ExplorarPage } from './explorar.page';
import { TabsComponent } from '../components/tabs/tabs.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExplorarPageRoutingModule
  ],
  declarations: [ExplorarPage, HeaderComponent, FooterComponent]
})
export class ExplorarPageModule {}
