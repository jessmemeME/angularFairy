import { Component,OnInit } from '@angular/core';
import {AccountsService} from './accounts.service' //llamamos a nuestro servicio de la app
import { Observable } from 'rxjs';
import { Accounts } from '../../models/accounts.model'//llamamos a nuestra interface

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent implements OnInit{
  constructor(private servicio: AccountsService) {}
//INICIALIZAMOS NUESTROS CAMPOS DEL HTML
accounts:Accounts[] = [];
mostrarTemplate1 = true;
id:number = 0;
password:string = "";
last_login:string= "2024-01-05T21:01:21.112Z";
is_superuser:boolean= true;
email:string = "";
is_staff:boolean= true;
is_active:boolean= true;
date_joined:string= "2024-01-05T21:01:21.112Z";
last_updated:string= "2024-01-05T21:01:21.112Z";
cambiarTemplate(Condicion:String): void {
  if(Condicion=='Add' || Condicion=='Edit' ){
    this.mostrarTemplate1=false;  
  }else{
    this.mostrarTemplate1=true;  
  }
}
enviarDatos ():void{
  const postData = { id: 0, 
                    password:this.password,
                    last_login:this.last_login,
                    is_superuser:this.is_superuser,
                    email:this.email,
                    is_staff:this.is_staff,
                    is_active:this.is_active,
                    date_joined:this.date_joined,
                    last_updated:this.last_updated };
  this.servicio.postData(postData).subscribe(
    (result) => {
      //this.postDataResult = result;
      console.log(result);
      this.cambiarTemplate("List");
    },
    (error) => {
      console.error('Error al enviar datos:', error);
    }
  );
}
ngOnInit(): void { 
  this.servicio.getDataWithHeader().subscribe({
    next:(data) =>{
      this.accounts = data;
    }
  });
}
}
