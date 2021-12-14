# latex-server
Web application providing LaTeX typesetting service

## Launch
1. Install pm2 globally (if not yet): `npm install -g pm2`
2. Install pm2-intercom to support logger in cluster mode: `pm2 install pm2-intercom`
3. Start app: `pm2 start dist/bundle.js --name app -i max`
