/**
 * Created by cshao on 2022/1/14
 */

'use strict';

function getFilenameWithoutExtension(filename) {
  return filename.replace(/\.[^/.]+$/, "");
}

export {
  getFilenameWithoutExtension
}
