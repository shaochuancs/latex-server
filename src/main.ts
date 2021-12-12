/**
 * Created by cshao on 2021/12/12
 */

'use strict';

import configure from "./configure";

async function main() {
  configure();
}

main().then(()=>{
  console.log('System successfully booted!');
}, (error)=>{
  console.log(error);
});
