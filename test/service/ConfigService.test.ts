/**
 * Created by cshao on 2021/12/12
 */

'use strict';

import ConfigService from "../../src/service/ConfigService";

describe('Test ConfigService', ()=>{
  test('can set config and then read value', ()=>{
    ConfigService.setConfig('SECRET', 'An unknown secret spread');
    expect(ConfigService.getConfig('SECRET')).toBe('An unknown secret spread');
  });
});
