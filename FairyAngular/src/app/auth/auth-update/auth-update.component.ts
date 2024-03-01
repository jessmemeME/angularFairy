import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import {AuthService} from '../auth.service'
import { Observable } from 'rxjs';
import { AuthGroup } from '../../../models/auth-group.model';

@Component({
  selector: 'app-auth-update',
  templateUrl: './auth-update.component.html',
  styleUrl: './auth-update.component.css'
})
export class AuthUpdateComponent implements OnInit{
  constructor(private router:Router, private activatedRoute:ActivatedRoute, private servicio:AuthService) {
   // console.log(this.router.getCurrentNavigation().extras.state);
}
  auth:AuthGroup ={};
  ngOnInit(): void {
    if(history!==undefined){
      this.auth = history.state??history.state;
      sessionStorage.setItem('currentAuth',JSON.stringify(history.state));
    }else{
      const currentAuthString = sessionStorage.getItem('currentAuth');
     if(currentAuthString){
      this.auth = JSON.parse(currentAuthString);
     }
    }
  }
  actualizarDatos():void{
    const postData = {id:this.auth.id ,name:this.auth.name };
    this.servicio.updateData(postData).subscribe(
      (result) => {
        this.router.navigateByUrl("auth/list-rol");
      },
      (error) => {
      }
    );
  }
}
