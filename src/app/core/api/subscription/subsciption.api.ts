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
  public subscriptionAddUrl='subscription/add'
  public subscriptionGetOneUrl='subscription/get'
  public subscriptionAllUrl='subscription/all/'
  public subscriptionUpdateUrl='subscription/update'
  public subscriptionDeleteUrl='subscription/delete/'

  constructor(
    private http:HttpClient
  ) {
    super(http , Subscription)
  }

  public createSubscription(subscription: Subscription): Observable<string | undefined> {
    this.apiURL = this.subscriptionAddUrl;
    return this.post(subscription).pipe(
      map((subscription : Subscription) => subscription.numSub)
    );
  }

  public updateSubscription(subscription: Subscription): Observable<Subscription> {
    this.apiURL = this.subscriptionUpdateUrl;
    return this.put(subscription);
  }

  public searchSubscriptionById(id: string){
    this.apiURL = this.subscriptionGetOneUrl;
    return this.getById(id);
  }

  public removeSubscription(id: any): Observable<any> {
    return this.http.delete(`${this.url}${this.subscriptionDeleteUrl}${id}` , {observe : 'response'});
  }

  getAll(typeSub:string) {
    return this.http.get(`${this.url}${this.subscriptionAllUrl}${typeSub}` , {observe : 'response'});
  }

}
