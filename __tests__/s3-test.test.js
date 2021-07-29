'use strict';

/*
  -- Documentation: https://aws.plainenglish.io/how-to-mock-aws-s3-in-a-jest-unit-test-9adf4ffe2401
*/

const s3 = require('../s3.js');

const mockS3Instance = {
  copyObject: jest.fn().mockReturnThis(),
  promise: jest.fn().mockReturnThis(),
  catch: jest.fn(),
}

jest.mock('aws-sdk', () => {
  return { S3: jest.fn(() => mockS3Instance) }
});

describe('S3', () => {
  it('calls aws-sdk copyObject method with correct parameters', async () => {

    await s3();

    expect(mockS3Instance.copyObject).toHaveBeenCalledWith({
      Bucket: 'some-bucket',
      CopySource: 'some-bucket/some/path/myfile.json',
      Key: 'some-bucket/some/other/path/myfile.json',
    });

    expect(mockS3Instance.copyObject).toHaveBeenCalledTimes(1);
  });
});
