import * as rp from 'request-promise-native';
import {CleengApi} from '../cleeng-api';
import {SubscriptionOfferData,
  SingleOfferData,
  EventOfferData,
  RentalOfferData,
  PassOfferData,
  OfferResult,
  SingleOfferResult,
  EventOfferResult,
  CleengResponse,
  RentalOfferResult,
  PassOfferResult,
  OfferListCriteria,
  CleengListResponse,
  VodOffer,
  CustomerData,
  FlowDescription,
  PrepareRemoteAuthResult,
  TokenResult,
  GetAccessStatusResult,
  GetAccessibleTagsResult,
  GetCustomerResult,
  BooleanResult,
  VodOfferData,
  VodOfferResult,
  UrlResult,
  ListOfferIdsByVideoIdResult,
  GetAccessStatusForDeviceResult,
  CleengRequest
} from '../models';

export default class CleengApiImpl implements CleengApi {
  constructor(private platformUrl: string,
              private publisherToken: string) {
  }

  public createSubscriptionOffer(offerData: SubscriptionOfferData): Promise<CleengResponse<OfferResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('createSubscriptionOffer', {offerData}))).promise()
      .then(this.handleResponse);
  }


  public updateSubscriptionOffer(offerData: SubscriptionOfferData, offerId: string): Promise<CleengResponse<OfferResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('updateSubscriptionOffer', {
      offerData,
      offerId
    }))).promise()
      .then(this.handleResponse);
  }

  public createSingleOffer(offerData: SingleOfferData): Promise<CleengResponse<SingleOfferResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('createSingleOffer', {offerData}))).promise()
      .then(this.handleResponse);
  }

  public updateSingleOffer(offerId: string, offerData: SingleOfferData): Promise<CleengResponse<SingleOfferResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('updateSingleOffer', {
      offerData,
      offerId
    }))).promise()
      .then(this.handleResponse);
  }

  public createEventOffer(offerData: EventOfferData): Promise<CleengResponse<EventOfferResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('createEventOffer', {offerData}))).promise()
      .then(this.handleResponse);
  }

  public updateEventOffer(offerData: EventOfferData, offerId: string): Promise<CleengResponse<EventOfferResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('updateEventOffer', {
      offerData,
      offerId
    }))).promise()
      .then(this.handleResponse);
  }

  public createRentalOffer(offerData: RentalOfferData): Promise<CleengResponse<RentalOfferResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('createRentalOffer', {offerData}))).promise()
      .then(this.handleResponse);
  }

  public updateRentalOffer(offerData: RentalOfferData, offerId: string): Promise<CleengResponse<RentalOfferResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('updateRentalOffer', {
      offerData,
      offerId
    }))).promise()
      .then(this.handleResponse);
  }

  public createPassOffer(offerData: PassOfferData): Promise<CleengResponse<PassOfferResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('createPassOffer', {offerData}))).promise()
      .then(this.handleResponse);
  }

  public updatePassOffer(offerData: PassOfferData, offerId: string): Promise<CleengResponse<OfferResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('updatePassOffer', {
      offerData,
      offerId
    }))).promise()
      .then(this.handleResponse);
  }

  public listSubscriptionOffers(criteria: OfferListCriteria, offset: number,
                                limit: number): Promise<CleengResponse<CleengListResponse<OfferResult>>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('listSubscriptionOffers', {
      criteria,
      limit,
      offset
    }))).promise()
      .then(this.handleResponse);
  }

  public listSingleOffers(criteria: OfferListCriteria, offset: number,
                          limit: number): Promise<CleengResponse<CleengListResponse<SingleOfferResult>>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('listSingleOffers', {
      criteria,
      limit,
      offset
    }))).promise()
      .then(this.handleResponse);
  }

  public listVodOffers(criteria: OfferListCriteria, offset: number, limit: number): Promise<CleengResponse<CleengListResponse<VodOffer>>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('listVodOffers', {
      criteria,
      limit,
      offset
    }))).promise()
      .then(this.handleResponse);
  }

  public listPassOffers(criteria: OfferListCriteria, offset: number,
                        limit: number): Promise<CleengResponse<CleengListResponse<PassOfferResult>>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('listPassOffers', {
      criteria,
      limit,
      offset
    }))).promise()
      .then(this.handleResponse);
  }

  public prepareRemoteAuth(customerData: CustomerData, flowDescription: FlowDescription): Promise<CleengResponse<PrepareRemoteAuthResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('prepareRemoteAuth', {
      customerData,
      flowDescription
    }))).promise()
      .then(this.handleResponse);
  }

  public generateCustomerToken(customerEmail: string): Promise<CleengResponse<TokenResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('generateCustomerToken', {customerEmail}))).promise()
      .then(this.handleResponse);
  }

  public requestPasswordReset(customerEmail: string): Promise<CleengResponse<BooleanResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('requestPasswordReset', {customerEmail}))).promise()
      .then(this.handleResponse);
  }

  public updateCustomerPassword(customerEmail: string, resetPasswordToken: string,
                                newPassword: string): Promise<CleengResponse<BooleanResult>> {
    return rp.post(this.platformUrl, this.buildParam(
      new CleengRequest('updateCustomerPassword', {customerEmail, resetPasswordToken, newPassword}))).promise()
      .then(this.handleResponse);
  }

  public generateCustomerTokenFromFacebook(facebookId: string): Promise<CleengResponse<TokenResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('generateCustomerTokenFromFacebook', {facebookId}))).promise()
      .then(this.handleResponse);
  }

  public generateCustomerTokenFromPassword(password: string, customerEmail: string): Promise<CleengResponse<TokenResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('generateCustomerTokenFromPassword', {
      customerEmail,
      password
    }))).promise()
      .then(this.handleResponse);
  }

  public getAccessStatus(customerToken: string, offerId: string, ipAddress: string): Promise<CleengResponse<GetAccessStatusResult>> {
    return rp.post(this.platformUrl, this.buildParam(
      new CleengRequest('getAccessStatus', {customerToken, offerId, ipAddress}))).promise()
      .then(this.handleResponse);
  }

  public getAccessibleTags(customerToken: string): Promise<CleengResponse<GetAccessibleTagsResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('getAccessibleTags', {customerToken}))).promise()
      .then(this.handleResponse);
  }

  public getCustomer(customerToken: string): Promise<CleengResponse<GetCustomerResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('getCustomer', {customerToken}))).promise()
      .then(this.handleResponse);
  }

  public createVodOffer(offerData: VodOfferData): Promise<CleengResponse<VodOfferResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('createVodOffer', {offerData}))).promise()
      .then(this.handleResponse);
  }

  public getVodOffer(offerId: string): Promise<CleengResponse<VodOfferResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('getVodOffer', {offerId}))).promise()
      .then(this.handleResponse);
  }

  public updateVodOffer(offerId: string, offerData: VodOfferData): Promise<CleengResponse<VodOfferResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('updateVodOffer', {
      offerData,
      offerId
    }))).promise()
      .then(this.handleResponse);
  }

  public generateCheckoutUrl(customerEmail: string, flowDescription: FlowDescription): Promise<CleengResponse<UrlResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('generateCheckoutUrl', {
      customerEmail,
      flowDescription
    }))).promise()
      .then(this.handleResponse);
  }

  public registerCustomer(customerData: CustomerData): Promise<CleengResponse<TokenResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('registerCustomer', {customerData}))).promise()
      .then(this.handleResponse);
  }

  public generateMyAccountUrl(customerEmail: string, modules: string[]): Promise<CleengResponse<UrlResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('generateMyAccountUrl', {
      customerEmail,
      modules
    }))).promise()
      .then(this.handleResponse);
  }

  public listOfferIdsByVideoId(videoId: string): Promise<CleengResponse<ListOfferIdsByVideoIdResult>> {
    return rp.post(this.platformUrl, this.buildParam(new CleengRequest('listOfferIdsByVideoId', {videoId}))).promise()
      .then(this.handleResponse);
  }

  public getAccessStatusForDevice(customerToken: string, offerId: string, deviceId: string,
                                  deviceType: string): Promise<CleengResponse<GetAccessStatusForDeviceResult>> {
    return rp.post(this.platformUrl, this.buildParam(
      new CleengRequest('getAccessStatusForDevice', {customerToken, offerId, deviceId, deviceType}))).promise()
      .then(this.handleResponse);
  }

  private buildParam(body: CleengRequest): any {
    const param = {body: body as any, json: true};
    param.body.params.publisherToken = this.publisherToken;
    return param;
  }

  private handleResponse(response: CleengResponse<any>): Promise<CleengResponse<any>> {
    if (response.error) {
      return Promise.reject(response.error);
    } else {
      return Promise.resolve(response);
    }
  }


}
