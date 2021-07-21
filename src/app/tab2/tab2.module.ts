import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ClienteService } from '../shared/cliente.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page],
  providers:[ClienteService]
})

// const routes: Routes = [{
//   path: '',
//   component: Tab2Page
// }]
// @NgModule( {
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
export class Tab2PageModule {}
