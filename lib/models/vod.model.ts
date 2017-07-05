import BaseOfferData from './base-offer-data.model';
export default class Vod extends BaseOfferData {
  public id: string;
  public videoId: string;
  public rentalPeriod: string;
  public publisherEmail: string;
  public playerCode: string;
  public playerCodeHead: string;
  public streamingPlatform: string;
  public runtime: string;
  public videoQuality: string;
  public backgroundImageUrl: any;
  public eventAssociation: string[];
  public tags: string[];
}
