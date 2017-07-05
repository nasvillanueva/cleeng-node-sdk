import BaseOfferData from './base-offer-data.model';
export default class EventOfferResult extends BaseOfferData {
  public id: string;
  public publisherEmail: string;
  public country: string;
  public active: boolean;
  public createdAt: number;
  public updatedAt: number;
  public applicableTaxRate: number;
  public socialCommissionRate: number;
  public averageRating: number;
  public contentType: string;
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
  public tags: string;
  public backgroundImageUrl: any;
}