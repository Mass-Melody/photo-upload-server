'use strict';

/*
  -- Documentation: https://aws.plainenglish.io/how-to-mock-aws-s3-in-a-jest-unit-test-9adf4ffe2401
*/

const AWS = require('aws-sdk');

// a function that returns a promise
function copyFileToS3() {

  // initialize AWS S3

  const s3 = new AWS.S3({
    accessKeyId: 'whatever',
    secretAccessKey: 'whatever',
    endpoint: 'http://localhost:4566',
    s3ForcePathStyle: true,
  });

  const copyObjectParams = {
    Bucket: 'some-bucket',
    CopySource: 'some-bucket/some/path/myfile.json',
    Key: 'some-bucket/some/other/path/myfile.json',
  }

  return s3.copyObject(copyObjectParams).promise();
}

module.exports = copyFileToS3;
