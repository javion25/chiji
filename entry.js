// let fs = require('fs');  
// let babelConfig = JSON.parse(fs.readFileSync('./.babelrc'));  
// require('babel-register')(babelConfig);  
require('babel-register')({ babelrc: 'false', ignore: /(.css|.scss)$/ });
require('./server/app.js');