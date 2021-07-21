import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente, Reserva } from '../shared/cliente.model';
import { ClienteService } from '../shared/cliente.service';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  reserva:Reserva;
  cliente:Cliente;
  token:string;

  constructor(private activateRoute:ActivatedRoute,private clienteService:ClienteService,private storage:Storage) {
   this.storage.get('token').then(token=>{this.token = token;})
   this.clienteService.getLoggedCliente().then(c=>{
     this.cliente=c;
     this.activateRoute.queryParams.subscribe(params => {
       clienteService.getReservasPorDNI(this.cliente.DNI, this.token).subscribe(c=> {
         c.forEach(r => {
           if (r.Id ==(params['id'] as number)) {
             this.reserva =r;
             console.log(r);
           }

         });
       });
     });
   });

  }

  
  ngOnInit() {

  }

  goBack(){
    window.history.back();
  }

}
