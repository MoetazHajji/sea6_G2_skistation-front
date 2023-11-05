import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Subscription} from "../../core/models/subscription.model";
import {ConfirmationService, MessageService} from "primeng/api";
import {SubscriptionService} from "../../core/services/subscription/subscription.service";
import {TypeSubscription} from "../../core/models/constant/TypeSubscription.model";

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'],
  providers:[MessageService,ConfirmationService]
})
export class SubscriptionComponent implements OnInit,AfterViewInit {

  subscriptionList:Subscription[] = [];
  subscription!:Subscription;
  addNewSubscriptionModal:boolean=false;
  selectedTypeSub:any;
  typeSubscription:any

  constructor(
    private messageService:MessageService,
    private confirmationService:ConfirmationService,
    private subscriptionService:SubscriptionService
  ) { }

  ngOnInit(): void {
    this.typeSubscription = [
      { name: 'SEMESTRIEL', code: 'SEMESTRIEL' },
      { name: 'MONTHLY', code: 'MONTHLY' },
      { name: 'ANNUAL', code: 'ANNUAL' }
    ];
    // Retrieve the last selected subscription type from localStorage
    const savedTypeSub = localStorage.getItem('selectedTypeSub');
    if (savedTypeSub) {
      this.selectedTypeSub = JSON.parse(savedTypeSub)
      this.subscriptionService.findAllSubscriptions(this.selectedTypeSub).subscribe(res => {
        localStorage.setItem('selectedTypeSub', JSON.stringify(this.selectedTypeSub.code));
        this.subscriptionList = res.body;
      });
    } else {
      // Set a default subscription type if none was saved
      this.selectedTypeSub = this.typeSubscription[1];
    }
  }
  ngAfterViewInit() {
    // Add a change event listener to the p-dropdown element
    const dropdownElement = document.querySelector('#Subscription') as HTMLSelectElement;

    if (dropdownElement) {
      dropdownElement.addEventListener('change', () => {
        this.selectedTypeSub = this.typeSubscription.find(
          (typeSub: TypeSubscription) => typeSub === dropdownElement.value
        );
        // Save the selected typeSubscription to localStorage
        localStorage.setItem('selectedTypeSub', JSON.stringify(this.selectedTypeSub));
      });
    }
  }
  onTypeSubChange() {
    console.log(this.selectedTypeSub.code)
    if (this.selectedTypeSub.code) {
      this.subscriptionService.findAllSubscriptions(this.selectedTypeSub.code).subscribe(res => {
        localStorage.setItem('selectedTypeSub', JSON.stringify(this.selectedTypeSub.code));
        this.subscriptionList = res.body;
      });
    } else if (localStorage.getItem('selectedTypeSub') != null){
      let typeSubb :any ;
      localStorage.setItem('selectedTypeSub', JSON.stringify(typeSubb));
      this.subscriptionService.findAllSubscriptions(typeSubb).subscribe(res => {
        this.subscriptionList = res.body;
      });
    }
  }

  getSeverity(status: string) : any {
    switch (status) {
      case 'ANNUAL':
        return 'success';
      case 'MONTHLY':
        return 'warning';
      case 'SEMESTRIEL':
        return 'success';
    }
  }

  openNew(){
    this.addNewSubscriptionModal = true;
  }

  hideDialog() {
    this.addNewSubscriptionModal = false;
  }

}
