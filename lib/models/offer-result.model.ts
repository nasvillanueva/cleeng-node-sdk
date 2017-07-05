import BaseOfferData from './base-offer-data.model';
export default class OfferResult extends BaseOfferData {
  public id: string;
  public publisherEmail: string;
  public country: string;
  public currency: string;
  public active: boolean;
  public createdAt: number;
  public updatedAt: number;
  public applicableTaxRate: number;
  public socialCommissionRate: number;
  public averageRating: number;
  public contentType: string;
  public expiresAt: number;
  public period: string;
  public freePeriods: number;
  public freeDays: number;
  public accessToTags: string[];

}
