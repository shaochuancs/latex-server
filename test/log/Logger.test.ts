/**
 * Created by cshao on 2020-03-23.
 */

'use strict';

const log4js = require('log4js');

import Logger from '../../src/logger/Logger';

const exampleLogMessage = 'example logger message';

const messageObject = {message: 'example message'};
const messageObjectString = JSON.stringify(messageObject);

const errorObject = new TypeError('example type error');
const stackText = 'TypeError: example type error\nmock stack';
errorObject.stack = stackText;

const exampleSupplementary = {
  supplementary_message: 'example supplementary information'
};

test('Should be able to visit category', () => {
  expect(Logger.CATEGORY.DEFAULT).toBe('default');
  expect(Logger.CATEGORY.CRASH).toBe('crash');
});

test('Should be able to shutdown log4js', () => {
  const spyShutdown = jest.spyOn(log4js, 'shutdown');
  Logger.shutdown();
  expect(spyShutdown).toHaveBeenCalled();
});

test('Should be able to logger trace text', () => {
  const spyDefault = jest.spyOn(Logger['loggerOfCategory']['default'], 'trace');
  Logger.trace(exampleLogMessage);
  expect(spyDefault).toHaveBeenCalledWith(exampleLogMessage);
});

test('Should be able to logger debug text', () => {
  const spyDefault = jest.spyOn(Logger['loggerOfCategory']['default'], 'debug');
  Logger.debug(exampleLogMessage);
  expect(spyDefault).toHaveBeenCalledWith(exampleLogMessage);
});

test('Should be able to logger info text', () => {
  const spyDefault = jest.spyOn(Logger['loggerOfCategory']['default'], 'info');
  Logger.info(exampleLogMessage);
  expect(spyDefault).toHaveBeenCalledWith(exampleLogMessage);
});

test('Should be able to logger warn text', () => {
  const spyDefault = jest.spyOn(Logger['loggerOfCategory']['default'], 'warn');
  Logger.warn(exampleLogMessage);
  expect(spyDefault).toHaveBeenCalledWith(exampleLogMessage);
});

test('Should be able to logger error text', () => {
  const spyDefault = jest.spyOn(Logger['loggerOfCategory']['default'], 'error');
  Logger.error(exampleLogMessage);
  expect(spyDefault).toHaveBeenCalledWith(exampleLogMessage);
});

test('Should be able to logger fatal text', () => {
  const spyDefault = jest.spyOn(Logger['loggerOfCategory']['default'], 'fatal');
  Logger.fatal(exampleLogMessage);
  expect(spyDefault).toHaveBeenCalledWith(exampleLogMessage);

  const spyLaTeX = jest.spyOn(Logger['loggerOfCategory']['crash'], 'fatal');
  Logger.fatal(exampleLogMessage, Logger.CATEGORY.CRASH);
  expect(spyLaTeX).toHaveBeenCalledWith(exampleLogMessage);
});


test('Should be able to logger trace object', () => {
  const spyDefault = jest.spyOn(Logger['loggerOfCategory']['default'], 'trace');
  Logger.trace(messageObject);
  expect(spyDefault).toHaveBeenCalledWith(messageObjectString);
});

test('Should be able to logger debug object', () => {
  const spyDefault = jest.spyOn(Logger['loggerOfCategory']['default'], 'debug');
  Logger.debug(messageObject);
  expect(spyDefault).toHaveBeenCalledWith(messageObjectString);
});

test('Should be able to logger warn object', () => {
  const spyDefault = jest.spyOn(Logger['loggerOfCategory']['default'], 'warn');
  Logger.warn(errorObject);
  expect(spyDefault).toHaveBeenCalledWith(stackText);
});

test('Should be able to logger error object', () => {
  const spyDefault = jest.spyOn(Logger['loggerOfCategory']['default'], 'error');
  Logger.error(errorObject);
  expect(spyDefault).toHaveBeenCalledWith(stackText);
});

test('Should be able to logger fatal object', () => {
  const spyDefault = jest.spyOn(Logger['loggerOfCategory']['default'], 'fatal');
  Logger.fatal(errorObject);
  expect(spyDefault).toHaveBeenCalledWith(stackText);

  const spyLaTeX = jest.spyOn(Logger['loggerOfCategory']['crash'], 'fatal');
  Logger.fatal(errorObject, Logger.CATEGORY.CRASH);
  expect(spyLaTeX).toHaveBeenCalledWith(stackText);
});

test('Should be able to logger error text with supplementary information', () => {
  const spyLaTeX = jest.spyOn(Logger['loggerOfCategory']['default'], 'error');
  Logger.error(exampleLogMessage, Logger.CATEGORY.DEFAULT, exampleSupplementary);
  expect(spyLaTeX).toHaveBeenCalledWith(exampleLogMessage + '\nsupplementary:\n{"supplementary_message":"example supplementary information"}');
});
