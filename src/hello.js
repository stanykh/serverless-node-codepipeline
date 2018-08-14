'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    message: 'Serverless: Hello World!'
  };

  callback(null, response);
};