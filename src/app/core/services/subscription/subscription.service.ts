import { Injectable } from '@angular/core';
import {Subscription} from "../../models/subscription.model";
import {SubscriptionApi} from "../../api/subscription/subsciption.api";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(
    private subscriptionApi:SubscriptionApi
  ) {
  }
  createSubscription(subscription:Subscription){
    return this.subscriptionApi.createSubscription(subscription);
  }

  updateSubscription(subscription:Subscription){
    return this.subscriptionApi.updateSubscription(subscription);
  }

  getSubscriptionById(id:string){
    return this.subscriptionApi.searchSubscriptionById(id);
  }

  findAllSubscriptions(params:any):Observable<any>{
    return this.subscriptionApi.getAll(params);
  }

  removeSubscription(id : any){
    return this.subscriptionApi.removeSubscription(id);
  }
}
