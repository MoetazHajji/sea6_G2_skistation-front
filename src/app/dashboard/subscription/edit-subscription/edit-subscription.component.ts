import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SubscriptionService} from "../../../core/services/subscription/subscription.service";
import {Subscription} from "../../../core/models/subscription.model";
import {TypeSubscription} from "../../../core/models/constant/TypeSubscription.model";

@Component({
  selector: 'app-edit-subscription',
  templateUrl: './edit-subscription.component.html',
  styleUrls: ['./edit-subscription.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class EditSubscriptionComponent implements OnInit {

  @Input() modalEditSubscription:boolean=true ;
  @Input() SubId : any
  @Output() closeModalEditSubscription=new EventEmitter<boolean>();
  @Output() refreshSubscription=new EventEmitter<boolean>();

  subscription!:Subscription;
  public subscriptionForm!:FormGroup;

  typeSubscription = [
    { label: 'SEMESTRIEL', value: 'SEMESTRIEL' },
    { label: 'MONTHLY', value: 'MONTHLY' },
    { label: 'ANNUAL', value: 'ANNUAL' }
  ];

  constructor(
    private messageService:MessageService,
    private confirmationService:ConfirmationService,
    private subscriptionService:SubscriptionService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.subscriptionService.getSubscriptionById(this.SubId).subscribe(res => {
      this.subscription = res
      this.initForm();
    })
    this.initForm();
  }

  initForm(){
    this.subscriptionForm = this.formBuilder.group({
      numSub:this.SubId,
      'startDate':[this.subscription.startDate,Validators.required],
      'endDate':[this.subscription.endDate,Validators.required],
      'price':[this.subscription.price,Validators.required],
      'typeSub':[this.subscription.typeSub,Validators.required]
    })
  }

  cancel(){
    this.modalEditSubscription=false;
    this.closeModalEditSubscription.emit(this.modalEditSubscription);
  }
  editSubscription() {
    this.subscription = this.subscriptionForm.value;
    this.subscriptionService.updateSubscription(this.subscription).subscribe((res:any) => {
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Subscription Updated', life: 3000 });
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Update Failed', life: 3000 });
    })
  }

}
