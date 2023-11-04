import { Injectable } from '@angular/core';
import {Subscription} from "../../models/subscription.model";
import {SubscriptionApi} from "../../api/subscription/subsciption.api";

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

  findAllSubscriptions(params?:any){
    return this.subscriptionApi.findAll(params);
  }

  removeSubscription(id : string){
    return this.subscriptionApi.removeSubscription(id);
  }
}
