let fs = require('fs');  
let babelConfig = JSON.parse(fs.readFileSync('./.babelrc'));  
require('babel-register')(babelConfig);  
require('./index.js');  