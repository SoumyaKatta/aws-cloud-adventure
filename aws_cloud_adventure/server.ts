require("dotenv").config();

const express = require("express");
const cors = require("cors");

const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

// Initialize express app
const app = express();

// User cors to allow incoming requests
app.use(cors());

// Converts incoming JSON data to objects
app.use(express.json({ limit: "5mb" }));

// Basic route to test that the server is working
app.get("/health", (req, res) => {
  res.status(200).send("Working");
});

app.post("/upload-picture", async (req, res, next) => {
  try {
    const { imageName, imageData } = req.body;

    // Initialize S3
    const s3Client = new S3Client({
      region: process.env.awsRegion, // Specify the AWS region from environment variables
      credentials: {
        accessKeyId: "AKIA6ELKOA7CY23SG4FN", // Access key ID from environment variables
        secretAccessKey: "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", // Secret access key from environment variables
      },
    });
    // Check file format
    // if (!imageData.includes("data:image")) {
    //     throw new Error("Image format not supported");
    //   }
  
      // Create buffer from file data
      const buf = Buffer.from(
        imageData.replace(/^data:image\/\w+;base64,/, ""),
        "base64",
      );
  
      // Uplaod data information
      const uploadData = {
        Key: imageName,
        Body: buf,
        Bucket: "original-images-bucket2",
        ContentEncoding: "base64",
        ContentType: "image/jpeg",
        ResponseCacheControl: "no-cache",
      };
  
      // Upload file
      await s3Client.send(new PutObjectCommand(uploadData));
  
      // File will be available at https://{uploadData.Bucket}.s3.amazonaws.com/{uploadData.Key}
  
      res.status(200).send({ msg: "Success" });
    } catch (e) {
      console.log(e);
      res.status(500).send({ msg: `Server error: ${e}` });
    }
  });

  const port = process.env.PORT || 3015;

/**
 * Listen on port 3015
 */
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});

  
  export default app;