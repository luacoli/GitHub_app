import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GithubPageRoutingModule } from './github-routing.module';

import { GithubPage } from './github.page';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GithubPageRoutingModule
  ],
  declarations: [GithubPage, HeaderComponent, FooterComponent]
})
export class GithubPageModule {}
