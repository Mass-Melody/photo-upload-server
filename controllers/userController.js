const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const uuid = require('uuid');
const s3 = new aws.S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET,
  region: process.env.S3_BUCKET_REGION,
});

exports.upload = (bucketName) => 

  multer({
    storage: multerS3({
      s3: s3,
      bucket: bucketName,
      metadata: function (req, file, cb) {
        console.log('req', req);
        console.log('file', file);
        cb(null, Object.assign({}, file));
      },
      key: function (req, file, cb) {

        // file name is for testing purposes only. This will need to be a template literal wired up so that the logged in user's username is associated with the file name. 
        cb(null, `${uuid()}.jpeg`);
      },
    }),
  });
