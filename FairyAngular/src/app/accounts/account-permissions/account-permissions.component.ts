import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { Accounts, UserGroupPermissionsUpdate, UserPermissionsWithCheck } from '../../../models/accounts.model'
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-account-permissions',
  templateUrl: './account-permissions.component.html',
  styleUrl: './account-permissions.component.css'
})
export class AccountPermissionsComponent implements OnInit {
    constructor(private servicio:AccountsService, private router:Router, private activatedRoute:ActivatedRoute){} 
    /*SE INICIALIZAN LAS VARIABLES INTERNAS */
    account:Accounts = {};
    permissionList:UserPermissionsWithCheck[] = [];
    allChecked:boolean = false;

    ngOnInit(): void {
      if(history!==undefined){
        this.account = history.state;
        this.obtenerListaPermisos();
      }
    }

    obtenerListaPermisos ():void{

      let  idAuth = this.account.id == undefined?0:this.account.id;
      //console.log(idAuth);
      this.servicio.GetPermissionsById(idAuth.toString()).subscribe({
        next:(data) =>{
          this.permissionList = data;
         // console.log(this.permissionList);
        }
      });
    }

    asignarPermisos ():void{
      const accountAux = this.permissionList.filter((item) => item.chequeado == true);
      let  idAccount:number = this.account.id==undefined ? 0 :this.account.id;
      if(accountAux.length <= 0){
        let sender:UserGroupPermissionsUpdate = {id:idAccount, listaPermisos:"()"}
        this.actualizarLista(sender);
      }else{
        
        let stringAux:string ="("
        accountAux.forEach(function(item,index){
          if(index == 0){
            stringAux = stringAux + item.id;
          }else{ 
            stringAux = stringAux + "," + item.id;
          }
        });
        stringAux = stringAux + ")";
        let sender:UserGroupPermissionsUpdate = {id:idAccount, listaPermisos:stringAux}
        this.actualizarLista(sender);
      }
    }
  
    actualizarLista(data:UserGroupPermissionsUpdate):void{
      this.servicio.asignPermissions(data).subscribe(
        (result) => {},
        (error) => {
        }
      );
    }
  
    seleccionarTodo():void{
      if(!this.allChecked){
        this.permissionList.forEach(item=>{
          item.chequeado = true;
        });
      }else{
        this.permissionList.forEach(item=>{
          item.chequeado = false;
        });
      }
    }
  
}
