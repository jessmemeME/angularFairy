import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import {AuthService} from '../auth.service';
import { AuthGroup, AuthGroupPermissions } from '../../../models/auth-group.model';


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
        console.log( this.authGroupPermision);
      }
    });
  }
}
