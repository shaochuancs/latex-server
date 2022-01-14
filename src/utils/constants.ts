/**
 * Created by cshao on 2022/1/13
 */

'use strict';

import { mkdir } from 'fs';

const multer  = require('multer');

const UPLOAD_FOLDER = process.env.UPLOAD_FOLDER ? process.env.UPLOAD_FOLDER : 'upload';

const MULTER_UPLOAD = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      const folder = UPLOAD_FOLDER + '/' + Date.now() + '-' + Math.round(Math.random() * 1E9);
      mkdir(folder, (err) => {
        if (err) {
          throw err;
        }
        cb(null, folder);
      });
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  })
});

export {
  MULTER_UPLOAD
};

