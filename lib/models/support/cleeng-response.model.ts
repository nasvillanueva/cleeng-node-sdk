import CleengMessage from './cleeng-message.model';
export default class CleengResponse<T> extends CleengMessage {
  public result: T;
}
