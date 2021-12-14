/**
 * Created by cshao on 2021/12/14
 */

'use strict';

import {
  generateAccessRecord,
  parsePort
} from "../../src/utils/network";

describe('Test network utils', ()=>{
  test('Should generate access record successfully', ()=>{
    const reqMock = {
      ip: '127.0.0.1',
      method: 'GET',
      url: '/api/v1/info',
      httpVersion: '1.1',
      header: (name)=>{
        if (name === 'user-agent') {
          return 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36';
        }
      }
    };
    const resMock = {
      statusCode: 200
    };
    const dateMock = new Date('2012-06-19T15:12:29Z');
    expect(generateAccessRecord(reqMock, resMock, dateMock)).toBe('127.0.0.1 - - [19/Jun/2012:23:12:29 +0800] "GET /api/v1/info HTTP/1.1" 200 - "undefined" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36"');
  });

  test('Should parse port correctly', ()=>{
    expect(parsePort('3000')).toBe(3000);
    expect(parsePort(3100)).toBe(3100);
    expect(parsePort('invalid')).toBe(null);
  });
});
