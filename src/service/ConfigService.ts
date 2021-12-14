/**
 * Created by cshao on 2021/12/12
 */

'use strict';

import Configuration from "../model/Configuration";

class ConfigService {
  private static config:Configuration = {
    PORT: 3000,
    SECRET: 'default_secret'
  };

  static setConfig(key:string, value:any) {
    if (value) {
      this.config[key] = value;
    }
  }

  static getConfig(key:string) {
    return this.config[key];
  }
}

export default ConfigService;
