import SubscriptionOfferData from '../models/subscription-offer-data.model';
import SingleOfferData from '../models/single-offer-data.model';
import EventOfferData from '../models/event-offer-data.model';
import RentalOfferData from '../models/rental-offer-data.model';
import PassOfferData from '../models/pass-offer-data.model';
import OfferResult from '../models/offer-result.model';
import SingleOfferResult from '../models/single-offer-result.model';
import EventOfferResult from '../models/event-offer-result.model';
import CleengResponse from '../models/support/cleeng-response.model';
import RentalOfferResult from '../models/rental-offer-result.model';
import PassOfferResult from '../models/pass-offer-result.model';
import OfferListCriteria from '../models/offer-list-criteria.model';
import CleengListResponse from '../models/support/cleeng-list-response.model';
import VodOffer from '../models/vod-offer.model';
import CustomerData from '../models/customer-data.model';
import FlowDescription from '../models/flow-description.model';
import PrepareRemoteAuthResult from '../models/prepare-remote-auth-result.model';
import TokenResult from '../models/token-result.model';
import GetAccessStatusResult from '../models/get-access-status-result.model';
import GetAccessibleTagsResult from '../models/get-accessible-tags-result.model';
import GetCustomerResult from '../models/get-customer-response.model';
import BooleanResult from '../models/boolean-result.model';
import VodOfferData from '../models/vod-offer-data.model';
import VodOfferResult from '../models/vod-offer-result.model';
import UrlResult from '../models/url-result.model';
import ListOfferIdsByVideoIdResult from '../models/list-offerids-by-videoid-result.model';
import GetAccessStatusForDeviceResult from '../models/get-access-status-for-device-result.model';
export interface CleengApi {
  /**
   * Creates a subscription offer.<br/>
   * <br/>
   *
   * @param offerData domain object representing offer data
   * @return
   */
  createSubscriptionOffer(offerData: SubscriptionOfferData): Promise<CleengResponse<OfferResult>>;


  /**
   * Updates a subscription offer.<br/>
   * <br/>
   *
   * @param offerData domain object representing offer data
   * @param offerId offer id
   * @return
   */
  updateSubscriptionOffer(offerData: SubscriptionOfferData, offerId: string): Promise<CleengResponse<OfferResult>>;

  /**
   * Creates a single offer.<br/>
   * <br/>
   *
   * @param offerData domain object representing single offer data
   * @return
   */
  createSingleOffer(offerData: SingleOfferData): Promise<CleengResponse<SingleOfferResult>>;


  /**
   * Updates a single offer.<br/>
   * <br/>
   *
   * @param offerData domain object representing single offer data
   * @return
   */
  updateSingleOffer(offerId: string, offerData: SingleOfferData): Promise<CleengResponse<SingleOfferResult>>;

  /**
   * Creates an event offer.<br/>
   * <br/>
   *
   * @param offerData domain object representing event offer data
   * @return
   */
  createEventOffer(offerData: EventOfferData): Promise<CleengResponse<EventOfferResult>>;


  /**
   * Updates an event offer.<br/>
   * <br/>
   *
   * @param offerData domain object representing event offer data
   * @param offerId offer Id
   * @return
   */
  updateEventOffer(offerData: EventOfferData, offerId: string): Promise<CleengResponse<EventOfferResult>>;


  /**
   * Creates a rental offer.<br/>
   * <br/>
   *
   * @param offerData domain object representing rental offer data
   * @return
   */
  createRentalOffer(offerData: RentalOfferData): Promise<CleengResponse<RentalOfferResult>>;

  /**
   * Updates a rental offer.<br/>
   * <br/>
   *
   * @param offerData domain object representing rental offer data
   * @param offerId offer Id
   * @return
   */
  updateRentalOffer(offerData: RentalOfferData, offerId: string): Promise<CleengResponse<RentalOfferResult>>;


  /**
   * Creates a pass offer.<br/>
   * <br/>
   *
   * @param offerData domain object representing pass offer data
   * @return
   */
  createPassOffer(offerData: PassOfferData): Promise<CleengResponse<PassOfferResult>>;

  /**
   * Updates a pass offer.<br/>
   * <br/>
   *
   * @param offerData domain object representing pass offer data
   * @param offerId offer Id
   * @return
   */
  updatePassOffer(offerData: PassOfferData, offerId: string): Promise<CleengResponse<OfferResult>>;


  /**
   * Lists subscription offers.<br/>
   * <br/>
   *
   * @param criteria domain object representing search criteria
   * @param offset pagination offset
   * @param limit pagination's items per page
   * @return
   */
  listSubscriptionOffers(criteria: OfferListCriteria, offset: number,
                         limit: number): Promise<CleengResponse<CleengListResponse<OfferResult>>>;


  /**
   * Lists single offers.<br/>
   * <br/>
   *
   * @param criteria domain object representing search criteria
   * @param offset pagination offset
   * @param limit pagination's items per page
   * @return
   */
  listSingleOffers(criteria: OfferListCriteria, offset: number,
                   limit: number): Promise<CleengResponse<CleengListResponse<SingleOfferResult>>>;


  /**
   * Lists vod offers.<br/>
   * <br/>
   *
   * @param criteria domain object representing search criteria
   * @param offset pagination offset
   * @param limit pagination's items per page
   * @return
   */
  listVodOffers(criteria: OfferListCriteria, offset: number, limit: number): Promise<CleengResponse<CleengListResponse<VodOffer>>>;

  /**
   * Lists pass offers.<br/>
   * <br/>
   *
   * @param criteria domain object representing search criteria
   * @param offset pagination offset
   * @param limit pagination's limit
   * @return
   */
  listPassOffers(criteria: OfferListCriteria, offset: number, limit: number): Promise<CleengResponse<CleengListResponse<PassOfferResult>>>;


  /**
   * Prepares a remote auth.<br/>
   * <br/>
   *
   * @param customerData domain object representing customer's data
   * @param flowDescription domain object representing flow description
   * @return
   */
  prepareRemoteAuth(customerData: CustomerData, flowDescription: FlowDescription): Promise<CleengResponse<PrepareRemoteAuthResult>>;



  /**
   * Generates a customer token.<br/>
   * <br/>
   *
   * @param customerEmail customer's email
   * @return
   */
  generateCustomerToken(customerEmail: string): Promise<CleengResponse<TokenResult>>;


  /**
   * Requests user's password reset.<br/>
   * <br/>
   *
   * @param customerEmail customer's email
   * @return
   */
  requestPasswordReset(customerEmail: string): Promise<CleengResponse<BooleanResult>>;



  /**
   * Updates user's password.<br/>
   * <br/>
   *
   * @param customerEmail customer's email
   * @param resetPasswordToken token received on email
   * @param newPassword new password
   * @return
   */
  updateCustomerPassword(customerEmail: string, resetPasswordToken: string, newPassword: string): Promise<CleengResponse<BooleanResult>>;


  /**
   * Generates a customer token from facebook.<br/>
   * <br/>
   *
   * @param facebookId facebook login
   * @return
   */
  generateCustomerTokenFromFacebook(facebookId: string): Promise<CleengResponse<TokenResult>>;


  /**
   * Generates a customer token from password.<br/>
   * <br/>
   *
   * @param password password
   * @return
   */
  generateCustomerTokenFromPassword(password: string, customerEmail: string): Promise<CleengResponse<TokenResult>>;


  /**
   * Gets access status.<br/>
   * <br/>
   *
   * @param customerToken customer token
   * @param offerId offer Id
   * @param ipAddress IP address
   * @return
   */
  getAccessStatus(customerToken: string, offerId: string, ipAddress: string): Promise<CleengResponse<GetAccessStatusResult>>;


  /**
   * Get accessible tags.<br/>
   * <br/>
   *
   * @param customerToken customer's token
   * @return
   */
  getAccessibleTags(customerToken: string): Promise<CleengResponse<GetAccessibleTagsResult>>;



  /**
   * Get customer<br/>
   * <br/>
   *
   * @param customerToken customer's token
   * @return
   */
  getCustomer(customerToken: string): Promise<CleengResponse<GetCustomerResult>>;



  /**
   * Creates Vod offer<br/>
   * <br/>
   *
   * @param offerData vod offer data
   * @return
   */
  createVodOffer(offerData: VodOfferData): Promise<CleengResponse<VodOfferResult>>;


  /**
   * Gets Vod offer<br/>
   * <br/>
   *
   * @param offerId an id of an offer
   * @return
   */
  getVodOffer(offerId: string): Promise<CleengResponse<VodOfferResult>>;


  /**
   * Updates Vod offer<br/>
   * <br/>
   *
   * @param offerId offer id
   * @param offerData vod offer data
   * @return
   */
  updateVodOffer(offerId: string, offerData: VodOfferData): Promise<CleengResponse<VodOfferResult>>;



  /**
   * Generates a checkout url
   *
   * @param customerEmail vod offer data
   *
   * @return
   * @throws IOException
   */
  generateCheckoutUrl(customerEmail: string, flowDescription: FlowDescription): Promise<CleengResponse<UrlResult>>;



  /**
   * Registers a customer
   *
   * @param customerData customer data
   *
   * @return
   * @throws IOException
   */
  registerCustomer(customerData: CustomerData): Promise<CleengResponse<TokenResult>>;

  /**
   * Generates my account url<br/>
   * <br/>
   *
   * @param customerEmail customer email
   * @param modules lis of modules
   * @return
   */
  generateMyAccountUrl(customerEmail: string, modules: string[]): Promise<CleengResponse<UrlResult>>;



  /**
   * Gets offerIds by video id<br/>
   * <br/>
   *
   * @param videoId video Id
   * @return
   */
  listOfferIdsByVideoId(videoId: string): Promise<CleengResponse<ListOfferIdsByVideoIdResult>>;


  /**
   * Checks whether access to offer is granted<br/>
   * <br/>
   *
   * @param customerToken customer token
   * @param offerId offer id
   * @param deviceId device id
   * @param deviceType device type
   * @return
   */
  getAccessStatusForDevice(customerToken: string, offerId: string,
                           deviceId: string, deviceType: string): Promise<CleengResponse<GetAccessStatusForDeviceResult>>;

}
