import BaseOfferData from './base-offer-data.model';
export default class RentalOfferResult extends BaseOfferData {
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
  public contentAgeRestriction: string;
  public period: number;
  public videoId: string;
  public contentExternalId: string;
  public contentExternalData: string;
  public tags: string[];
  public currency: string;
}
