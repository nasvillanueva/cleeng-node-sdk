import BaseOfferData from './base-offer-data.model';
export default class SingleOfferResult extends BaseOfferData {
  public videoId: string;
  public contentExternalId: string;
  public contentExternalData: string;
  public tags: string[];
  public contentAgeRestriction: string;
  public id: string;
  public publisherEmail: string;
  public country: string;
  public currency: string;
  public active: boolean;
  public createdAt: string;
  public updatedAt: string;
  public applicableTaxRate: number;
  public socialCommissionRate: number;
  public averageRating: number;
  public contentType: string;
}
