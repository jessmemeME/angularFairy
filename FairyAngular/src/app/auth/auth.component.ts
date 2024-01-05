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
  titulo:string = "LISTA DE ROLES";
  nombre:string = "";
  mostrarAlerta:boolean=false;
  tituloAlerta:string="";
  contenidoAlerta:string="";
  tipoAlertaClase:string="Success";
  counter:number=3;
  
  agregarRol(){
    this.titulo= "AGREGAR NUEVO ROL";
    this.nombre="";
    this.mostrarTemplate1=false;  
  }
  
  editarRol(auth:AuthGroup){
    this.titulo = "EDITAR ROL: "+auth.name;
    this.nombre = auth.name;
    this.mostrarTemplate1=false;
  }

  activarAlerta(titulo:string, contenido:string, tipo:string){
        this.mostrarAlerta = true;
        this.tipoAlertaClase = tipo;
        this.tituloAlerta = titulo;
        this.contenidoAlerta = contenido;
  }

  cerrarAlerta(){
    this.mostrarAlerta=false;
  }

  cerrarVentana(){
    this.mostrarTemplate1=true; 
  }

  obtenerLista ():void{
    this.servicio.getDataWithHeader().subscribe({
      next:(data) =>{
        this.authGroup = data;
      }
    });
  }
  enviarDatos ():void{
    const postData = { id: 0, name: this.nombre };
    this.servicio.postData(postData).subscribe(
      (result) => {
        this.obtenerLista();
        this.activarAlerta("Exito","Se agrego correctamente el rol","success");
        let intervalId = setInterval(() => {
          this.counter = this.counter - 1;
          if(this.counter === 0){
            this.cerrarAlerta();
            this.cerrarVentana();            
            clearInterval(intervalId);
          } 
          
      }, 1000)
      },
      (error) => {
        this.activarAlerta("Error","No se agrego el rol","danger");
        let intervalId = setInterval(() => {
          this.counter = this.counter - 1;
          if(this.counter === 0){
            this.cerrarAlerta();
            this.cerrarVentana();            
            clearInterval(intervalId);
          } 
          
      }, 1000)
        console.error('Error al enviar datos:', error);
      }
    );
  }
  ngOnInit(): void { 
    this.obtenerLista();
  }
}
