Password Checker
===================

1. Description
--------------


2. About the stack
--------------
HTML:
- Slim (http://slim-lang.com/)

CSS:
- Sass (http://sass-lang.com/)
- Compass (compass-style.org)
- Susy (http://susy.oddbird.net/)
- Breakpoint (http://breakpoint-sass.com/)

Sass is a transpiler, then compass & co are librairies of mixins for CSS3, Responsive grids, Media queries, and more...

Other:
- Fb-flo (https://github.com/facebook/fb-flo)

It's a live reload tool (which injects CSS rather than reload).


3. Install the dependencies
--------------
You need to have:
- Ruby & Bundler
- Node & NPM
- Gulp (npm install -g gulp)

Then you can simply execute
> ./install.sh

It will install:
- Ruby gems you need (locally with Bundler, specified in Gemfile)
- Node packages you need (locally with NPM, specified in package.json)

Last, but not mandatory, install the fb-flo chrome extension to benefit of Live Reload:
https://github.com/facebook/fb-flo


4. How to work locally
--------------
Simply run the following command:
> gulp

It will run the default gulp task which will:
- Watch and compile your files
- Run a local webserver (http://localhost:8080)
- Run a local fb-flo server

Open your browser on
http://localhost:8080

Don't forget to open the Chrome Dev Tools to benefit of fb-flo

Then work on your files in src/, each time you save your page will be actualized
(if it really doesn't, restart gulp and/or refresh your page manually)

Files are served with sourcemaps so you can see coffeescript / sass in your chrome dev tools.


7. Build production files
--------------
To build minified files without sourcemaps, run
> gulp build-prod

It will output the files in build/production

/!\ THERE IS CURRENTLY AN ISSUE with css minification, please don't use build/production/css/build.css /!\
(instead, use staging file)
