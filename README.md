[![CircleCI](https://circleci.com/gh/shaochuancs/latex-server/tree/master.svg?style=svg)](https://circleci.com/gh/shaochuancs/latex-server/tree/master)
[![Maintainability](https://api.codeclimate.com/v1/badges/ac9b8f9a99b2434da8aa/maintainability)](https://codeclimate.com/github/shaochuancs/latex-server/maintainability)

# latex-server
Web application providing LaTeX typesetting service

## Launch
1. Install pm2 globally (if not yet): `npm install -g pm2`
2. Install pm2-intercom to support logger in cluster mode: `pm2 install pm2-intercom`
3. Start app: `pm2 start dist/bundle.js --name app -i max`
