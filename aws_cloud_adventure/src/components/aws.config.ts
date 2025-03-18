import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: "AKIA6ELKOA7CY23SG4FN",
  secretAccessKey: "16cMcxnwr2aJG8Zcfbfdtw7do6oevv4klDNdSQQ7",
  region: 'YOUR_REGION',
});

const s3 = new AWS.S3();

export default s3;
