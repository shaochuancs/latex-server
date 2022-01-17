[![CircleCI](https://circleci.com/gh/shaochuancs/latex-server/tree/master.svg?style=svg)](https://circleci.com/gh/shaochuancs/latex-server/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/shaochuancs/latex-server/badge.svg?branch=master)](https://coveralls.io/github/shaochuancs/latex-server?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/ac9b8f9a99b2434da8aa/maintainability)](https://codeclimate.com/github/shaochuancs/latex-server/maintainability)

# latex-server
Web application providing LaTeX typesetting service

## Install
1. Run `git clone https://github.com/shaochuancs/latex-server.git`, or download [release package](https://github.com/shaochuancs/latex-server/releases).
2. Run `npm install`
3. Run `npm run build`
4. Install [TeX Live](https://tug.org/texlive/) in server (if not yet)

## Usage
1. Run `npm start` to launch the server.
2.   Open `http://localhost:3000` in browser to test.

## API
| URL         | HTTP Method | HTTP Content-Type   | Parameter  | Description                                                 |
|-------------|-------------|---------------------|------------|-------------------------------------------------------------|
| /generate   | POST        | multipart/form-data | file       | Upload .tex file as name "file", and download generated PDF |

## Advanced usage
### Run server in cluster mode
1. Install pm2 globally (if not yet): `npm install -g pm2`
2. Install pm2-intercom to support logger in cluster mode: `pm2 install pm2-intercom`
3. Start app: `pm2 start dist/bundle.js --name app -i max`

## Customization Service
I'm also providing LaTeX Server customization service, please contact shaochuancs@gmail.com if you are interested.

## License
(The MIT License for LaTeX Server)

Copyright (c) 2021-2022 Chuan Shao &lt;shaochuancs@gmail.com&gt;
