[![CircleCI](https://circleci.com/gh/shaochuancs/latex-server/tree/master.svg?style=svg)](https://circleci.com/gh/shaochuancs/latex-server/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/shaochuancs/latex-server/badge.svg?branch=master)](https://coveralls.io/github/shaochuancs/latex-server?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/ac9b8f9a99b2434da8aa/maintainability)](https://codeclimate.com/github/shaochuancs/latex-server/maintainability)

# latex-server
Web application providing LaTeX typesetting service

## Run in Docker

The easiest way to run latex-server is through Docker image:

`docker run -d -p 3000:3000 shaochuancs/latex-server`

## Run in server

You can also build from source code and run latex-server on your own server.

1. Run `git clone https://github.com/shaochuancs/latex-server.git`, or download [release package](https://github.com/shaochuancs/latex-server/releases).
2. Run `npm install`
3. Run `npm run build`
4. Install [TeX Live](https://tug.org/texlive/) on server (if not yet)
5. Run `npm start` to launch the server.

## Usage

Open `http://localhost:3000` in browser. Upload .tex file and get PDF downloaded.

## API
| URL         | HTTP Method | HTTP Content-Type   | Parameter  | Description                                                 |
|-------------|-------------|---------------------|------------|-------------------------------------------------------------|
| /generate   | POST        | multipart/form-data | file       | Upload .tex file as name "file", and download generated PDF |

## Customization Service
I'm also providing LaTeX Server customization service, please contact shaochuancs@gmail.com if you are interested.

## License
(The MIT License for LaTeX Server)

Copyright (c) 2021-2022 Chuan Shao &lt;shaochuancs@gmail.com&gt;
