import {ResourceService} from "../../common/resource.service";
import {Injectable} from "@angular/core";
import {Advised} from "aspect.js";
import {Subscription} from "../../models/subscription.model";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
@Advised()
export class SubscriptionApi extends ResourceService<Subscription>{
  url = `${environment.apiUrl}`
  public subscriptionUrl='subscription/'

  constructor(
    private http:HttpClient
  ) {
    super(http , Subscription)
  }

  public createSubscription(subscription: Subscription): Observable<string | undefined> {
    this.apiURL = this.subscriptionUrl;
    return this.post(subscription).pipe(
      map((subscription : Subscription) => subscription.numSub)
    );
  }

  public updateSubscription(subscription: Subscription): Observable<Subscription> {
    this.apiURL = this.subscriptionUrl;
    return this.put(subscription);
  }

  public searchSubscriptionById(id: string){
    this.apiURL = this.subscriptionUrl;
    return this.getById(id);
  }

  public removeSubscription(id: string): Observable<any> {
    this.apiURL = this.subscriptionUrl ;
    return this.delete(id);
  }

  public findAll(criteria?: string): Observable<Subscription[]> {
    this.apiURL = this.subscriptionUrl;
    const config = criteria !== undefined ? {params: {name_Stock: criteria}} : {};
    return this.get(config);
  }

}
