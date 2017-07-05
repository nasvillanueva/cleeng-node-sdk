# Cleeng Node.js SDK

This is a Node.js version of [Cleeng's Java SDK](https://github.com/Cleeng/cleeng-java-sdk/)

This was intended to use with [InversifyJS](https://github.com/inversify/InversifyJS) and [node-config](https://github.com/lorenwest/node-config)

## Peer Dependencies
1. [InversifyJS](https://github.com/inversify/InversifyJS)
2. [node-config](https://github.com/lorenwest/node-config)
3. [request](https://github.com/request/request) and [request-promise-native](https://github.com/request/request-promise-native)

<small>Please see [package.json](package.json)</small>
## Usage

Please see [InversifyJS](https://github.com/inversify/InversifyJS)'s usage first.

Bind the CleengApi to your Inversify container:
```typescript

import {Container, interfaces} from 'inversify';
import * as config from 'config';
import {CleengApi, CleengApiImpl} from 'cleeng-node-sdk';


const container = new Container();

container.bind<interfaces.Newable<string>>('platformUrl').toConstructor<string>(config.get<string>('cleeng.platformUrl'));
container.bind<interfaces.Newable<string>>('publisherToken').toConstructor<string>(config.get<string>('cleeng.publisherToken'));
container.bind<CleengApi>(Symbol('CleengApi')).to(CleengApiImpl);
```