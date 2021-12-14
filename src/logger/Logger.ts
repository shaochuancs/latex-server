/**
 * Created by cshao on 2020-03-21.
 */

'use strict';

import { getLogger, shutdown } from 'log4js';

const ESSerializer = require('esserializer');

enum Category {
  CRASH = 'crash',
  DB = 'DB',
  DEFAULT = 'default',
  HTTP = 'http'
}

/**
 * A logger, which is used to record logger message of various levels.
 */
class Logger {
  private static loggerOfCategory = initLoggerOfCategory(Category);

  /**
   * Category of logger, such as default and crash etc.
   */
  static CATEGORY = Category;

  /**
   * Shutdown logger once the application is closed. This is necessary because we need to release file lock, close socket etc.
   */
  static shutdown() {
    shutdown();
  }

  /**
   * trace object or text
   * @param t Target
   * @param category Category of logger
   */
  static trace(t: object | string, category: Category = Category.DEFAULT) {
    t = getLogMessageFromObject(t);
    Logger.loggerOfCategory[category].trace(t);
  }

  /**
   * debug object or text
   * @param t Target
   * @param category Category of logger
   */
  static debug(t: object | string, category: Category = Category.DEFAULT) {
    t = getLogMessageFromObject(t);
    Logger.loggerOfCategory[category].debug(t);
  }

  /**
   * logger message
   * @param m Message
   * @param category Category of logger
   */
  static info(m: string, category: Category = Category.DEFAULT) {
    Logger.loggerOfCategory[category].info(m);
  }

  /**
   * logger object or text warning
   * @param e Error object or warning message
   * @param category Category of logger
   * @param supplementary Supplementary information of warning
   */
  static warn(e: Error | string, category: Category = Category.DEFAULT, supplementary?: object) {
    e = getLogMessageFromError(e, supplementary);
    Logger.loggerOfCategory[category].warn(e);
  }

  /**
   * logger object or text error
   * @param e Error object or error message
   * @param category Category of logger
   * @param supplementary Supplementary information of error
   */
  static error(e: Error | string, category: Category = Category.DEFAULT, supplementary?: object) {
    e = getLogMessageFromError(e, supplementary);
    Logger.loggerOfCategory[category].error(e);
  }

  /**
   * logger object or text fatal error
   * @param e Error object or error message
   * @param category Category of logger
   * @param supplementary Supplementary information of fatal error
   */
  static fatal(e: Error | string, category: Category = Category.DEFAULT, supplementary?: object) {
    e = getLogMessageFromError(e, supplementary);
    Logger.loggerOfCategory[category].fatal(e);
  }
}

function initLoggerOfCategory(category: object): object {
  const keys = Object.keys(category);
  const loggerOfCategory = {};
  for (let i=0; i<keys.length; i++) {
    const val = category[keys[i]];
    loggerOfCategory[val] = getLogger(val);
  }
  return loggerOfCategory;
}

function getLogMessageFromObject(t: object | string): string {
  if (t instanceof Object) {
    return ESSerializer.serialize(t);
  }
  return t;
}

function getLogMessageFromError(e: Error | string, supplementary?: object): string {
  let logMessage: string;
  if (e instanceof Error) {
    logMessage = e.stack ? e.stack : e.message;
  } else {
    logMessage = (typeof e === 'string') ? e : ESSerializer.serialize(e);
  }
  if (supplementary) {
    logMessage += `\nsupplementary:\n${ESSerializer.serialize(supplementary)}`;
  }
  return logMessage;
}

export default Logger;
