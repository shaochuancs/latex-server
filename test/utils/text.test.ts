/**
 * Created by cshao on 2022/1/17
 */

'use strict';

import {getFilenameWithoutExtension} from '../../src/utils/text';

describe('Test text utils', ()=>{
  test('Can get filename without extension', ()=>{
    const filename = 'example.tex';
    expect(getFilenameWithoutExtension(filename)).toBe('example');
  });
});
