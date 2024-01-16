import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'
import { Observable } from 'rxjs';
import { AuthGroup } from '../../../models/auth-group.model';


@Component({
  selector: 'app-auth-list',
  templateUrl: './auth-list.component.html',
  styleUrl: './auth-list.component.css'
})
export class AuthListComponent implements OnInit{
  constructor(private servicio: AuthService) {}
  authGroup:AuthGroup[] = [];
  
 

  ngOnInit(): void { 
    this.obtenerLista();
  }

  obtenerLista ():void{
    this.servicio.getDataWithHeader().subscribe({
      next:(data) =>{
        this.authGroup = data;
      }
    });
  }

  eliminarDatos(auth:AuthGroup):void{
    const postData = auth;
    this.servicio.deleteData(postData).subscribe(
      (result) => {
        this.obtenerLista();

      },
      (error) => {
      }
    );
  }

}
