/**
 * Created by cshao on 2021/12/12
 */

'use strict';

import {Request} from "express";

const moment = require('moment');

/**
 * Get access log record from request object, in Apache combined format.
 */
function getAccessRecordFromRequest(req: Request) {
  const record = `${req.ip} - - [${moment().format('DD/MMM/YYYY:HH:mm:ss ZZ')}]`;
  return record;
}

function parsePort(val) {
  const port = parseInt(val);
  if (isNaN(port)) {
    return null;
  }
  return port;
}

export {
  getAccessRecordFromRequest,
  parsePort
}
