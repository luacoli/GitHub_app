import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VisualizarCommitsPageRoutingModule } from './visualizar-commits-routing.module';
import { VisualizarCommitsPage } from './visualizar-commits.page';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizarCommitsPageRoutingModule
  ],
  declarations: [VisualizarCommitsPage, HeaderComponent, FooterComponent]
})
export class VisualizarCommitsPageModule {}
