const q = require('q');
const fs = require('fs');

var exports = module.exports = {
  readFile: (path, encoding = 'utf-8') => {
    let d = q.defer();
    fs.readFile(path, encoding, (error, contents) => {
      if (error) {
        d.reject(error);
      } else {
        d.resolve(contents);
      }
    });
    return d.promise;
  }
};

