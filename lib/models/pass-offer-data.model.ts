import BaseOfferDataRequest from './base-offer-data-request.model';
export default class PassOfferData extends BaseOfferDataRequest {
  public accessToTags: string;
  public period: string;
  public expiresAt: number;
}
