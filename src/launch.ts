/**
 * Created by cshao on 2020-03-02.
 */

'use strict';

import Logger from './logger/Logger';
import ConfigService from "./service/ConfigService";
import router from "./routes";

const express = require('express');

/**
 * Launch server
 */
function launch(): void {
  const app = express();
  const port = ConfigService.getConfig('PORT');

  app.use(()=>{
    // TODO implement access log from request object. Refer to https://github.com/expressjs/morgan
  });

  app.use('/', router);

  app.use(function (err, req, res, next) { // eslint-disable-line @typescript-eslint/no-unused-vars
    Logger.error(err);
    res.status(500).send(err.message);
  });

  app.listen(port, ()=>{
    Logger.info(`Application listening on port: ${port}`);
  }).on('close', Logger.shutdown);
}

export default launch;
