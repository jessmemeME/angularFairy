import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import {AuthService} from '../auth.service';
import { AuthGroup, AuthGroupPermissions, AuthGroupPermissionsUpdate } from '../../../models/auth-group.model';


@Component({
  selector: 'app-auth-permissions',
  templateUrl: './auth-permissions.component.html',
  styleUrl: './auth-permissions.component.css'
})
export class AuthPermissionsComponent implements OnInit{
  constructor(private router:Router, private activatedRoute:ActivatedRoute, private servicio:AuthService){}
  auth:AuthGroup = {};
  authGroupPermision:AuthGroupPermissions[] = [];
  allChecked:boolean = false;
  ngOnInit(): void {
    if(history!==undefined){
      this.auth = history.state;
      this.obtenerLista();
    }else{
      this.router.navigateByUrl("auth/list-rol");
    }
  }

  obtenerLista ():void{
    let  idAuth = this.auth.id==undefined?0:this.auth.id;
    this.servicio.getAuthPermisionss(idAuth).subscribe({
      next:(data) =>{
        this.authGroupPermision = data;
        //console.log( this.authGroupPermision);
      }
    });
  }

  guardarLista ():void{
    const authAux = this.authGroupPermision.filter((item) => item.checqueado == true);
    let  idAuth:number = this.auth.id==undefined?0:this.auth.id;
    if(authAux.length <= 0){
      
      let sender:AuthGroupPermissionsUpdate = {id:idAuth, listaPermisos:"()"}
      this.actualizarLista(sender);
    }else{
      
      let stringAux:string ="("
      authAux.forEach(function(item,index){
        if(index == 0){
          stringAux = stringAux + item.id;
        }else{ 
          stringAux = stringAux + "," + item.id;
        }
      });
      stringAux = stringAux + ")";
      let sender:AuthGroupPermissionsUpdate = {id:idAuth, listaPermisos:stringAux}
      this.actualizarLista(sender);
    }
  }

  actualizarLista(data:AuthGroupPermissionsUpdate):void{
    this.servicio.updateAuthPermisions(data).subscribe(
      (result) => {},
      (error) => {
        console.log(error)
      }
    );
  }

  seleccionarTodo():void{
    if(!this.allChecked){
      this.authGroupPermision.forEach(item=>{
        item.checqueado = true;
      });
    }else{
      this.authGroupPermision.forEach(item=>{
        item.checqueado = false;
      });
    }
  }

}


