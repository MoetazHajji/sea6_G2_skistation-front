import { Component, OnInit } from '@angular/core';
import { Piste } from 'src/app/core/models/Piste';
import { PisteService } from 'src/app/core/services/piste/piste.service';

@Component({
  selector: 'app-all-piste',
  templateUrl: './all-piste.component.html',
  styleUrls: ['./all-piste.component.css']
})
export class AllPisteComponent implements OnInit {

  constructor(public pisteService : PisteService) { }

  ngOnInit(): void {
    this.pisteService.getAll().subscribe(
      (response) => {     
        const  list : Piste[]  = response.body;
        this.pisteService.listPistes = list; 
      }
      ,(error) => {
        console.log(  "error AllPisteComponent ngOnInit"  ) ;
        console.log(  error.message   ) ;
      }) ;

  }



stateAddPisteFormModale : boolean = false;
onClickOpenClose():void { this.stateAddPisteFormModale =  true;}
onClickEventOpenCloseAddPisteFormModale($event:any):void {
 this.stateAddPisteFormModale = $event ;
}
onPisteEventAdd($event:Piste):void {
  this.pisteService.insert( $event) .subscribe(
    (response) => {     
      const  pisteAdded : Piste  = response.body;
      this.pisteService.listPistes.push( pisteAdded );
    }
    ,(error) => {
      console.log(  "error onPisteEventAdd"  ) ;
      console.log(  error.message   ) ;
    }) ;
 }



 stateUpdatePisteFormModale : boolean = false;
 onClickUpdatePiste(elementPiste : Piste):void {this.pisteService.piste=elementPiste; this.stateUpdatePisteFormModale =  true;}
 onClickEventOpenCloseUpdatePisteFormModale($event:any):void {
  this.stateUpdatePisteFormModale = $event ;
 }
 onPisteEventUpdate($event:any):void {
  const  pisteUpdate : Piste  = $event;
  this.pisteService.update(pisteUpdate.numPiste, pisteUpdate) .subscribe(
    (response) => {      
      const index = this.pisteService.listPistes.findIndex((piste) => piste.numPiste === pisteUpdate.numPiste);

      if (index !== -1) {
        this.pisteService.listPistes[index] = pisteUpdate;
      }
    }
    ,(error) => {
      console.log(  "onPisteEventUpdate"  ) ;
      console.log(  error.message   ) ;
    }) ;
 }




 onClickDeletePiste(id:number):void {
  this.pisteService.delete(id) .subscribe(
    (response) => {      
     // this.pisteService.listPistes.push( pisteAdded );
     this.pisteService.listPistes =  this.pisteService.listPistes.filter((piste) => piste.numPiste !== id);
    }
    ,(error) => {
      console.log(  "error onClickDeletePiste"  ) ;
      console.log(  error.message   ) ;
    }) ;
 }




}
