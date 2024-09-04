import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { BasicInfoService } from '../../../basic-info.service';
//Modelos
import { 
  AgeGroup, 
  DocumentType,
  Gender,
  RelationshipBusiness,
  TypeOfDiner,
  Tradition,
  Culture,
  Religion
} from '../../../../../../models/basic-info.model';

@Component({
  selector: 'app-basic-info-age-group-update',
  templateUrl: './basic-info-age-group-update.component.html',
  styleUrl: './basic-info-age-group-update.component.css'
})
export class BasicInfoAgeGroupUpdateComponent {
  constructor(private router:Router, private activatedRoute:ActivatedRoute, private servicio:BasicInfoService) {
    // console.log(this.router.getCurrentNavigation().extras.state);
 }
   ageGroup:AgeGroup ={};

   ngOnInit(): void {

     if(history!==undefined){
       this.ageGroup = history.state??history.state;
       //sessionStorage.setItem('currentAuth',JSON.stringify(history.state));
     }
     /*
     else{
       //const currentAuthString = sessionStorage.getItem('currentAuth');
       
       
      if(currentAuthString){
       this.auth = JSON.parse(currentAuthString);
      }
       
     }
     */
   }
   actualizarDatos():void{
     const postData = {id:this.ageGroup.id ,name:this.ageGroup.name };
     this.servicio.UpdateAgeGroups(postData).subscribe(
       (result) => {
         this.router.navigateByUrl("settings/basic-info/list-age-group");
       },
       (error) => {
       }
     );
   }
 }
 
//



