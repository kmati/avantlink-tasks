import { Injectable }    from '@angular/core';

import { Config } from '../models/config';

@Injectable()
export class ConfigService {
  private config: Config = {
    // serviceBaseUrl: 'http://localhost:4001/v1',
    serviceBaseUrl: 'http://homework.avantlink.com',
    applicationId: '40e811f2-0b33-11e7-91b6-0ed54c19ffda'
  }

  constructor() {
    
  }

  get configuration() {
    return this.config;
  }
}
