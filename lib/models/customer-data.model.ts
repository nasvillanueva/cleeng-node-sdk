export default class CustomerData {
  constructor(public email: string,
              public locale: string,
              public currency: string,
              public country: string,
              public password ?: string,
              public facebookId ?: string) {
  }
}