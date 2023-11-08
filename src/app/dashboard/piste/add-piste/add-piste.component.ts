import {  Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Piste } from 'src/app/core/models/Piste';
import { PisteService } from 'src/app/core/services/piste/piste.service';


@Component({
  selector: 'app-add-piste',
  templateUrl: './add-piste.component.html',
  styleUrls: ['./add-piste.component.css']
})
export class AddPisteComponent implements OnInit {

  @Input() state : boolean = false;
  @Input() title?: string;
  @Input() pisteInput?: Piste;
  @Output() onClickEvent=new EventEmitter<boolean>();  
  @Output() onPisteEvent=new EventEmitter<Piste>();  

  constructor(public pisteService : PisteService) { }
  ngOnInit(): void {  this.pisteService.piste  = (this.pisteInput==undefined||this.pisteInput==null  ? new Piste(): this.pisteInput )  ; }
  onClickNo():void { 
    this.state = false; 
    this.onClickEvent.emit(this.state);
  }
  onClickYes():void {  
    this.state = true;  
    this.onClickEvent.emit(this.state);
  }


  onClickOnSubmitAddPiste(form: NgForm):void{

    if(!form.invalid){ 
      this.onPisteEvent.emit(this.pisteService.piste );
      this.onClickNo();
    }
  }
}
