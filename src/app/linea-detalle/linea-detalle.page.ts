import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Linea } from '../shared/cliente.model';
import { ClienteService } from '../shared/cliente.service';

@Component({
  selector: 'app-linea-detalle',
  templateUrl: './linea-detalle.page.html',
  styleUrls: ['./linea-detalle.page.scss'],
})
export class LineaDetallePage implements OnInit {

  linea:Linea;
  constructor(private activateRoute:ActivatedRoute,private clienteService:ClienteService,private router:Router) {
    this.activateRoute.queryParams.subscribe(params => {
      clienteService.getLoggedCliente().then(c => {
        c.Facturas.forEach(f => {
          f.Lineas.forEach(l => {
            if(l.NumLinea == (params['numLinea'] as number)) {
              this.linea = l;
              console.log(l);
            }
          })
        });
      });
    });
  }

  ngOnInit() {

  }

  goBack(){
    window.history.back();
  }

  // if (f.Id == (params['id'] as number)) {
  //   this.factura = f;
  //   console.log(f);
  }



