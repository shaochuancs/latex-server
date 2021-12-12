/**
 * Created by cshao on 2021/12/12
 */

'use strict';

function parsePort(val) {
  const port = parseInt(val);
  if (isNaN(port)) {
    return null;
  }
  return port;
}

export {
  parsePort
}
