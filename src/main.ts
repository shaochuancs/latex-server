/**
 * Created by cshao on 2021/12/12
 */

'use strict';

import configure from "./configure";
import init from "./init";
import Logger from "./logger/Logger";
import launch from "./launch";

async function main() {
  configure();
  init();
  launch();
}

main().then(()=>{
  Logger.info('System booted successfully!');
}, (error)=>{
  Logger.error(error);
  Logger.fatal('System failed to boot!');
});

process.on('SIGINT', ()=>{
  Logger.shutdown();
  process.exit(1);
});
