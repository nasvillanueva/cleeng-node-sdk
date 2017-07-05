import CleengError from './cleeng-error.model';
export default class CleengMessage {
  constructor(public jsonrpc: string,
              public id: string,
              public error?: CleengError) {
    this.jsonrpc = jsonrpc;
    this.id = id;
    this.error = error;
  }
}
