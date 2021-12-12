/**
 * Created by cshao on 2021/12/12
 */

'use strict';

import ConfigService from "./service/ConfigService";
import {parsePort} from "./utils/network";

const path = require('path');
const log4js = require('log4js');

function configure() {
  ConfigService.setConfig('PORT', parsePort(process.env.PORT));
  ConfigService.setConfig('SECRET', process.env.SECRET);
  log4js.configure(path.resolve(__dirname, '../config/log4js.json'));
}

export default configure;
