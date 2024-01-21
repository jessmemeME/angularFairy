import { Component,OnInit} from '@angular/core';
import {AccountsService} from './../accounts.service' //llamamos a nuestro servicio de la app
import { Accounts } from '../../../models/accounts.model'//llamamos a nuestra interface

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.css'
})
export class AccountListComponent implements OnInit{
  constructor(private servicio:AccountsService){}
  /*SE DEFINE LA LISTA QUE ALMACENARA LA LISTA DE CUENTAS*/
  accounts:Accounts[] = [];
  //Funcion para iniciar
  ngOnInit(): void { 
    this.obtenerLista();  
  }
  

  obtenerLista():void{
    this.servicio.getDataWithHeader().subscribe({
      next:(data) =>{
        this.accounts = data;
      }
    });
  }

  eliminarDatos(account:Accounts):void{
    const postData = account;
    this.servicio.deleteData(postData).subscribe(
      (result) => {
        this.obtenerLista();

      },
      (error) => {
      }
    );
  }

}
