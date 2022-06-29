#! /usr/bin/env node

const utils = require("@tg-cli-dev/utils")
utils()
console.log("hello core")

// const importLocal = require('import-local');

// if (importLocal(__filename)) {
//   require('npmlog').info('cli', '正在使用 imooc-cli 本地版本');
// } else {
//   require('../lib')(process.argv.slice(2));
// }
