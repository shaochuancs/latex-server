/**
 * Created by cshao on 2021/12/12
 */

'use strict';

import {Request, Response, Router} from "express";
import {MULTER_UPLOAD} from "../utils/constants";

const router = Router();

router.post('/generate', MULTER_UPLOAD.single('file'), (req: Request, res: Response) => {
  res.json({
    message: 'Hello, world'
  });
});

export default router;
