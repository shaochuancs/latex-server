/**
 * Created by cshao on 2021/12/12
 */

'use strict';

import {Request, Response, Router} from "express";
import {getFilenameWithoutExtension} from "../utils/text";
import {MULTER_UPLOAD} from "../utils/constants";
import Logger from "../logger/Logger";

const {spawn} = require('child_process');

const router = Router();

router.post('/generate', MULTER_UPLOAD.single('file'), (req: Request, res: Response) => {
  const xelatex = spawn('xelatex', [req.file.originalname], {
    cwd: req.file.destination
  });
  xelatex.stderr.on('data', (data) => {
    Logger.error(data);
  });
  xelatex.on('close', (code) => {
    if (code !== 0) {
      res.status(500).json({
        message: 'Failed to generate PDF'
      });
      return;
    }

    res.download(`${req.file.destination}/${getFilenameWithoutExtension(req.file.originalname)}.pdf`);
  });
});

export default router;
