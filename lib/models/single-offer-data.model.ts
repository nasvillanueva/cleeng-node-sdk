import BaseOfferDataRequest from './base-offer-data-request.model';
export default class SingleOfferData extends BaseOfferDataRequest {
  public videoId: string;
  public contentExternalId: string;
  public contentExternalData: string;
  public tags: string[];
}
