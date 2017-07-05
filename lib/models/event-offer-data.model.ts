import BaseOfferDataRequest from './base-offer-data-request.model';
export default class EventOfferData extends BaseOfferDataRequest {
  public currency: string;
  public playerCode: string;
  public playerCodeHead: string;
  public startTime: number;
  public endTime: number;
  public timeZone: string;
  public videoId: string;
  public viewerEstimate: string;
  public teaser: string;
  public applyServiceFeeOnCustomer: boolean;
  public tags: string[];
}
