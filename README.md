# photo-upload-server

## Purpose of This App

This is a backend application implemented as an API for [Melodi](https://github.com/Mass-Melody/Melodi). When a user uploads a profile photo, it is sent to this server. The server then posts the user's photo to an Amazon S3 Bucket, and the bucket returns the response to this server. The server then returns the URL of the profile to the front-end app. Upon confirming that the user wants to save all updated profile information (including the profile photo), this url is added to the user's record in Melodi's MongoDB database, which is handled by the [Melodi-db server](https://github.com/Mass-Melody/Melodi-db).

## Tools Needed / Setup

- Packages:
  Before installing the below packages, you need to set up your your terminal environment if you have not already done so. Use [these instructions](https://github.com/codefellows/setup-guide/blob/main/system-setup/1-environment.md) as a suggested guide.

  - `nodemon`: Runs the server during development.
  - `dotenv`: Protects sensitive variables being used in the application. Variables stored in a `.env` file won't be published.
  - `aws-sdk`, `multer`, and `multer-s3`: Frameworks/libraries being used for accessing AWS services
  - `cors`: Middleware that allows a client to access the API.
  - `express`: Framework being used to build our API
  - `uuid`: Package being used for making file names stored in S3 bucket unique

- Amazon S3 Bucket:
  - First, create an account at [aws.amazon.com](https://aws.amazon.com) and sign in to the console. Set up your bucket using [these instructions](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-bucket.html), and make sure to edit permissions so that your bucket has public access (this is important so that the frontend app can access the bucket to display the user's profile photo).

- Environment file (`.env`):
  - Store the following variables in your `.env` file, as they contain sensitive information:
    - S3_ACCESS_KEY
    - S3_SECRET
    - S3_BUCKET_REGION
    - S3_BUCKET_NAME
