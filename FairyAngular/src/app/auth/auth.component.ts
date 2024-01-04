import { Component,OnInit } from '@angular/core';
import {AuthService} from './auth.service'
import { Observable } from 'rxjs';
import { AuthGroup } from '../../models/auth-group.model'


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit{
    constructor(private servicio: AuthService) {}
  
  authGroup:AuthGroup[] = [];
  mostrarTemplate1 = true;
  nombre:string="";
  cambiarTemplate(Condicion:String): void {
    if(Condicion=='Add' || Condicion=='Edit' ){
      this.mostrarTemplate1=false;  
    }else{
      this.mostrarTemplate1=true;  
    }
  }
  enviarDatos ():void{
    const postData = { id: 0, name: this.nombre };
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
        this.authGroup = data;
      }
    });
  }
}
