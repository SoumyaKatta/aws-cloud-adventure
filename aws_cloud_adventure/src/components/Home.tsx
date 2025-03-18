import  { useState } from 'react';
import AWS from 'aws-sdk'; // Import entire SDK (optional)
import S3 from 'aws-sdk/clients/s3'; // Import only the S3 client
import ponyfill from 'web-streams-polyfill';


// import './App.css';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

function Home() {
  const [userImage, setUser] = useState<File | null>(null);

  const uploadFile = async () => {
    if (!userImage) {
      alert("choose the image file.");
      return;
    }

    const S3_BUCKET = "original-images-bucket2";
    const REGION = "ap-south-1";
    const s3 = new S3Client({
      region: REGION,
      credentials: {
        accessKeyId: "AKIA6ELKOA7CY23SG4FN",
        secretAccessKey: "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",
      },
      requestChecksumCalculation: "WHEN_REQUIRED"
    });

    const params = {
      Bucket: S3_BUCKET,
      Key: userImage.name, 
      Body: userImage,
    };

    try {
      const csvParam = new PutObjectCommand(params);
      const data = await s3.send(csvParam);
      console.log("Response obtained", data);
    } catch (err) {
      console.log("Error in uploading to S3 bucket", err);
      throw err;
    }
  };


  const handleFileChange = (e:any) => {
    const file = e.target.files?.[0];
    console.log(file)
    if (file) {
      setUser(file);
    }
  };

  return (
    <>
      <div className="">
        <input type="file" required onChange={handleFileChange} />
        <button onClick={uploadFile}>Upload File</button>
      </div>
    </>
  );
}

export default Home;
