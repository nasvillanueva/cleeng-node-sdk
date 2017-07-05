import CleengMessage from './cleeng-message.model';

export default class CleengRequest extends CleengMessage {
  constructor(public method: string,
              public params: any) {
    super('2.0', '1');
    this.method = method;
    this.params = params;
  }
}
