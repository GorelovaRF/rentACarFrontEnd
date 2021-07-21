import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LineaDetallePageRoutingModule } from './linea-detalle-routing.module';

import { LineaDetallePage } from './linea-detalle.page';
import { ClienteService } from '../shared/cliente.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LineaDetallePageRoutingModule
  ],
  declarations: [LineaDetallePage],
  providers:[ClienteService]
})
export class LineaDetallePageModule {}
