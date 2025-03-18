const AWS = require('aws-sdk');
const crypto = require('crypto') 
const  randomBytes = require('crypto');
const promisify = require('util');

const region = "Asia Pacific (Mumbai) ap-south-1"
const bucketName = "original-images-bucket2"
const accessKeyId = "AKIA6ELKOA7CY23SG4FN"
const secretAccessKey = "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"

const s3 = new AWS.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion:'v4'
})

export async function generateUrl(){
    const rawBytes = await randomBytes(16)
    const imageName = rawBytes.toString('hex')

    const params = ({
        Bucket: bucketName,
        Key: imageName,
        Expires:60
    })

    const uploaUrl = await s3.getSignedUrlPromise('putObject', params)
    console.log("uplaof",uploaUrl);
    return uploaUrl
}
generateUrl()