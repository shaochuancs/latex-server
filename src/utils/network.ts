/**
 * Created by cshao on 2021/12/12
 */

'use strict';

import {Request, Response} from "express";

const moment = require('moment');

/**
 * Get access log record from request object, in Apache combined format.
 */
function getAccessRecordFromRequest(req: Request, res: Response, payloadSize: number, date: Date) {
  return `${req.ip} - - [${moment(date).format('DD/MMM/YYYY:HH:mm:ss ZZ')}] "${req.method} ${req.url} HTTP/${req.httpVersion}" ${res.statusCode} ${payloadSize} "${req.header('referer')}" "${req.header('user-agent')}"`;
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
