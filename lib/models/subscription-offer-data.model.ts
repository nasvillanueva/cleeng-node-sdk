import BaseOfferDataRequest from './base-offer-data-request.model';
export default class SubscriptionOfferData extends BaseOfferDataRequest {
  public period: string;
  public freePeriods: number;
  public freeDays: number;
  public accessToTags: string[];
}
