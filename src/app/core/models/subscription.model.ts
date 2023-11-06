import {ResourceModel} from "../common/resource.model";
import {TypeSubscription} from "./constant/TypeSubscription.model";

export class Subscription extends ResourceModel<Subscription> {

  numSub?:any;
  startDate?:Date;
  endDate?:Date;
  price?:Date;
  typeSub?:TypeSubscription;

  constructor(model?: Partial<Subscription>) {
    super(model);
  }
}
