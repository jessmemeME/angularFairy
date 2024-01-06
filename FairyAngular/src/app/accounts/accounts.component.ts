import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {AccountsService} from './accounts.service' //llamamos a nuestro servicio de la app
import { Accounts } from '../../models/accounts.model'//llamamos a nuestra interface

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})

//--------------------------------------------------------------------------------------
export class AccountsComponent implements OnInit{
  constructor(private servicio: AccountsService) {}
  //------------------------------------------------------------------------------------
  //INICIALIZAMOS NUESTROS CAMPOS DEL HTML
  accounts:Accounts[] = [];
  mostrarTemplate1 = true;
  titulo:string = "LISTA DE CUENTAS DE USUARIO";
  //DATOS DE LA ALERTA
  mostrarAlerta:boolean=false;
  tituloAlerta:string="";
  contenidoAlerta:string="";
  tipoAlertaClase:string="Success";
  counter:number=3;
  //CAMPOS DE LA BD
  id:number = 0;
  email:string = "";
  password:string = "";
  is_superuser:boolean= true;
  is_staff:boolean= true;
  is_active:boolean= true;
  date_joined:string= new Date().toISOString();  // Usar una fecha actual
  last_updated:string= new Date().toISOString();  // Usar una fecha actual
  last_login:string= new Date().toISOString();  // Usar una fecha actual
  //-----------------------------------------------------------------------------------


  //------------------------------------------------------------------------------------
  agregarAccount(){
    this.titulo= "AGREGAR NUEVA CUENTA DE USUARIO";
    this.email="";
    this.password="";
    this.is_staff = true;
    this.is_active = true;
    this.is_superuser = true;
    this.mostrarTemplate1=false;  
  }
//------------------------------------------------------------------------------------  
  editarAccount(accounts:Accounts){
    this.titulo = "EDITAR CUENTA DE USUARIO: "+ accounts.email;
    this.email  = accounts.email;
    this.password  = accounts.password;
    this.is_staff = accounts.is_staff; // Utilizar el valor de la base de datos
    this.is_active = accounts.is_active; // Utilizar el valor de la base de datos
    this.is_superuser = accounts.is_superuser; // Utilizar el valor de la base de datos
    this.mostrarTemplate1=false;
  }
//------------------------------------------------------------------------------------
  activarAlerta(titulo:string, contenido:string, tipo:string){
        this.mostrarAlerta = true;
        this.tipoAlertaClase = tipo;
        this.tituloAlerta = titulo;
        this.contenidoAlerta = contenido;
  }
//------------------------------------------------------------------------------------
  cerrarAlerta(){
    this.mostrarAlerta=false;
  }
//------------------------------------------------------------------------------------
  cerrarVentana(){
    this.mostrarTemplate1=true; 
  }
  //------------------------------------------------------------------------------------
  //Funcion a la que se llama cuando se quiere desactivar o activar el template desde el html
  
  cambiarTemplate(Condicion:String): void {
    if(Condicion=='Add' || Condicion=='Edit' ){
      this.mostrarTemplate1=false;  
    }else{
      this.mostrarTemplate1=true;  
    }
  }
 
 
  //------------------------------------------------------------------------------------
  obtenerLista ():void{
    this.servicio.getDataWithHeader().subscribe({
      next:(data) =>{
        this.accounts = data;
      }
    });
  }
  //------------------------------------------------------------------------------------
  //Funcion para Editar
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
  //------------------------------------------------------------------------------------
  //Funcion para iniciar
  ngOnInit(): void { 
    this.servicio.getDataWithHeader().subscribe({
      next:(data) =>{
        this.accounts = data;
      }
    });
  }
  //------------------------------------------------------------------------------------
}
