import BaseOfferDataRequest from './base-offer-data-request.model';
export default class VodOfferData extends BaseOfferDataRequest {
  public videoId: string;
  public playerCode: string;
  public playerCodeHead: string;
  public rentalPeriod: string;
  public runtime: string;
  public videoQuality: string;
  public eventAssociation: string[];
  public tags: string[];
  public backgroundImageUrl: string;
}
