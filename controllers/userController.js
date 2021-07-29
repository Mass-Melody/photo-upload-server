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
      acl: 'public-read',
      metadata: function (req, file, cb) {
        cb(null, Object.assign({}, file));
      },
      key: function (req, file, cb) {

        cb(null, `${uuid()}.jpg`);
      },
    }),
  });
