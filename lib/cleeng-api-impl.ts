import * as rp from 'request-promise-native';
import {CleengApi} from './interfaces/cleeng-api';
import SubscriptionOfferData from './models/subscription-offer-data.model';
import CleengResponse from './models/support/cleeng-response.model';
import OfferResult from './models/offer-result.model';
import CleengRequest from './models/support/cleeng-request.model';
import SingleOfferData from './models/single-offer-data.model';
import SingleOfferResult from './models/single-offer-result.model';
import EventOfferData from './models/event-offer-data.model';
import EventOfferResult from './models/event-offer-result.model';
import RentalOfferData from './models/rental-offer-data.model';
import RentalOfferResult from './models/rental-offer-result.model';
import PassOfferData from './models/pass-offer-data.model';
import PassOfferResult from './models/pass-offer-result.model';
import OfferListCriteria from './models/offer-list-criteria.model';
import CleengListResponse from './models/support/cleeng-list-response.model';
import VodOffer from './models/vod-offer.model';
import CustomerData from './models/customer-data.model';
import FlowDescription from './models/flow-description.model';
import PrepareRemoteAuthResult from './models/prepare-remote-auth-result.model';
import TokenResult from './models/token-result.model';
import BooleanResult from './models/boolean-result.model';
import GetAccessStatusResult from './models/get-access-status-result.model';
import GetAccessibleTagsResult from './models/get-accessible-tags-result.model';
import GetCustomerResult from './models/get-customer-response.model';
import VodOfferData from './models/vod-offer-data.model';
import VodOfferResult from './models/vod-offer-result.model';
import UrlResult from './models/url-result.model';
import ListOfferIdsByVideoIdResult from './models/list-offerids-by-videoid-result.model';
import GetAccessStatusForDeviceResult from './models/get-access-status-for-device-result.model';
import {inject, injectable} from 'inversify';
@injectable()
export default class CleengApiImpl implements CleengApi {
  constructor(@inject('platformUrl') private platformUrl: string,
              @inject('publisherToken') private publisherToken: string) {
  }

  public createSubscriptionOffer(offerData: SubscriptionOfferData): Promise<CleengResponse<OfferResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('createSubscriptionOffer', {offerData}))).promise();
  }


  public updateSubscriptionOffer(offerData: SubscriptionOfferData, offerId: string): Promise<CleengResponse<OfferResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('updateSubscriptionOffer', {offerData, offerId}))).promise();
  }

  public createSingleOffer(offerData: SingleOfferData): Promise<CleengResponse<SingleOfferResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('createSingleOffer', {offerData}))).promise();
  }

  public updateSingleOffer(offerId: string, offerData: SingleOfferData): Promise<CleengResponse<SingleOfferResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('updateSingleOffer', {offerId, offerData}))).promise();
  }

  public createEventOffer(offerData: EventOfferData): Promise<CleengResponse<EventOfferResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('createEventOffer', {offerData}))).promise();
  }

  public updateEventOffer(offerData: EventOfferData, offerId: string): Promise<CleengResponse<EventOfferResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('updateEventOffer', {offerData, offerId}))).promise();
  }

  public createRentalOffer(offerData: RentalOfferData): Promise<CleengResponse<RentalOfferResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('createRentalOffer', {offerData}))).promise();
  }

  public updateRentalOffer(offerData: RentalOfferData, offerId: string): Promise<CleengResponse<RentalOfferResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('updateRentalOffer', {offerData, offerId}))).promise();
  }

  public createPassOffer(offerData: PassOfferData): Promise<CleengResponse<PassOfferResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('createPassOffer', {offerData}))).promise();
  }

  public updatePassOffer(offerData: PassOfferData, offerId: string): Promise<CleengResponse<OfferResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('updatePassOffer', {offerData, offerId}))).promise();
  }

  public listSubscriptionOffers(criteria: OfferListCriteria, offset: number,
                                limit: number): Promise<CleengResponse<CleengListResponse<OfferResult>>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('listSubscriptionOffers', {criteria, offset, limit}))).promise();
  }

  public listSingleOffers(criteria: OfferListCriteria, offset: number,
                          limit: number): Promise<CleengResponse<CleengListResponse<SingleOfferResult>>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('listSingleOffers', {criteria, offset, limit}))).promise();
  }

  public listVodOffers(criteria: OfferListCriteria, offset: number, limit: number): Promise<CleengResponse<CleengListResponse<VodOffer>>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('listVodOffers', {criteria, offset, limit}))).promise();
  }

  public listPassOffers(criteria: OfferListCriteria, offset: number,
                        limit: number): Promise<CleengResponse<CleengListResponse<PassOfferResult>>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('listPassOffers', {criteria, offset, limit}))).promise();
  }

  public prepareRemoteAuth(customerData: CustomerData, flowDescription: FlowDescription): Promise<CleengResponse<PrepareRemoteAuthResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('prepareRemoteAuth', {customerData, flowDescription}))).promise();
  }

  public generateCustomerToken(customerEmail: string): Promise<CleengResponse<TokenResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('generateCustomerToken', {customerEmail}))).promise();
  }

  public requestPasswordReset(customerEmail: string): Promise<CleengResponse<BooleanResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('requestPasswordReset', {customerEmail}))).promise();
  }

  public updateCustomerPassword(customerEmail: string, resetPasswordToken: string,
                                newPassword: string): Promise<CleengResponse<BooleanResult>> {
    return rp.post(this.platformUrl, this.buildParam(
        new CleengRequest('updateCustomerPassword', {customerEmail, resetPasswordToken, newPassword}))).promise();
  }

  public generateCustomerTokenFromFacebook(facebookId: string): Promise<CleengResponse<TokenResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('generateCustomerTokenFromFacebook', {facebookId}))).promise();
  }

  public generateCustomerTokenFromPassword(password: string, customerEmail: string): Promise<CleengResponse<TokenResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('generateCustomerTokenFromFacebook', {
      customerEmail,
      password
    }))).promise();
  }

  public getAccessStatus(customerToken: string, offerId: string, ipAddress: string): Promise<CleengResponse<GetAccessStatusResult>> {
    return rp.post(this.platformUrl, this.buildParam(
        new CleengRequest('generateCustomerTokenFromFacebook', {customerToken, offerId, ipAddress}))).promise();
  }

  public getAccessibleTags(customerToken: string): Promise<CleengResponse<GetAccessibleTagsResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('getAccessibleTags', {customerToken}))).promise();
  }

  public getCustomer(customerToken: string): Promise<CleengResponse<GetCustomerResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('getCustomer', {customerToken}))).promise();
  }

  public createVodOffer(offerData: VodOfferData): Promise<CleengResponse<VodOfferResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('createVodOffer', {offerData}))).promise();
  }

  public getVodOffer(offerId: string): Promise<CleengResponse<VodOfferResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('getVodOffer', {offerId}))).promise();
  }

  public updateVodOffer(offerId: string, offerData: VodOfferData): Promise<CleengResponse<VodOfferResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('updateVodOffer', {offerId, offerData}))).promise();
  }

  public generateCheckoutUrl(customerEmail: string, flowDescription: FlowDescription): Promise<CleengResponse<UrlResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('generateCheckoutUrl', {
      customerEmail,
      flowDescription
    }))).promise();
  }

  public registerCustomer(customerData: CustomerData): Promise<CleengResponse<TokenResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('registerCustomer', {customerData}))).promise();
  }

  public generateMyAccountUrl(customerEmail: string, modules: string[]): Promise<CleengResponse<UrlResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('generateMyAccountUrl', {customerEmail, modules}))).promise();
  }

  public listOfferIdsByVideoId(videoId: string): Promise<CleengResponse<ListOfferIdsByVideoIdResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('listOfferIdsByVideoId', {videoId}))).promise();
  }

  public getAccessStatusForDevice(customerToken: string, offerId: string, deviceId: string,
                                  deviceType: string): Promise<CleengResponse<GetAccessStatusForDeviceResult>> {
    return rp.post(this.platformUrl, this.buildParam(
        new CleengRequest('getAccessStatusForDevice', {customerToken, offerId, deviceId, deviceType}))).promise();
  }

  private buildParam(body: CleengRequest): any {
    const param = {body: body as any, json: true};
    param.body.params.publisherToken = this.publisherToken;
    return param;
  }


}
