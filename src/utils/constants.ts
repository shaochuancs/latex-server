/**
 * Created by cshao on 2022/1/13
 */

'use strict';

const multer  = require('multer');

const UPLOAD_FOLDER = process.env.UPLOAD_FOLDER ? process.env.UPLOAD_FOLDER : 'upload';

const MULTER_UPLOAD = multer({
  storage: multer.diskStorage({
    destination: UPLOAD_FOLDER + '/' + Date.now() + '-' + Math.round(Math.random() * 1E9),
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  })
});

export {
  MULTER_UPLOAD
};

