import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SubscriptionService} from "../../../core/services/subscription/subscription.service";
import {Subscription} from "../../../core/models/subscription.model";
import {TypeSubscription} from "../../../core/models/constant/TypeSubscription.model";

@Component({
  selector: 'app-add-subscription',
  templateUrl: './add-subscription.component.html',
  styleUrls: ['./add-subscription.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class AddSubscriptionComponent implements OnInit {

  @Input() modalNewSubscription:boolean = true;
  @Output() closeModalNewSubscription = new EventEmitter<boolean>();

  public subscriptionForm!:FormGroup;
  subscription!:Subscription;

  typeSubscription = [
    { label: 'SEMESTRIEL', value: 'SEMESTRIEL' },
    { label: 'MONTHLY', value: 'MONTHLY' },
    { label: 'ANNUAL', value: 'ANNUAL' }
  ];
  constructor(
    private messageService:MessageService,
    private confirmationService:ConfirmationService,
    private formBuilder: FormBuilder,
    private subscriptionService:SubscriptionService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.subscriptionForm = this.formBuilder.group({
      'startDate':['',Validators.required],
      'price':['',Validators.required],
      'typeSub':[TypeSubscription.MONTHLY,Validators.required]
    })
  }


  addNewSubscription(){
    this.subscription = this.subscriptionForm.value;
    this.subscriptionService.createSubscription(this.subscription).subscribe(res =>{
      this.modalNewSubscription=false;
      this.subscriptionForm.reset();
      this.closeModalNewSubscription.emit(this.modalNewSubscription);
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Subscription Added', life: 3000 });
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Add Failed', life: 3000 });
    })
  }


  cancel(){
    this.modalNewSubscription=false;
    this.subscriptionForm.reset();
    this.closeModalNewSubscription.emit(this.modalNewSubscription);
  }

}
