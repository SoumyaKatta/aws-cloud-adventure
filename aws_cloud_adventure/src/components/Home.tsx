import { useState } from "react";
// import AWS from "aws-sdk";
// const s3 = new AWS.S3();

function Home() {
  const [image, setImage] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const handleImageChange = (event: any) => {
    const file = event.target.files && event.target.files[0]; // Check if a file is selected

    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file)); // Create a preview URL
    }
  };
  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //   const fileName = e.target.files;
  //   const params = {
  //     Bucket: "my-bucket",
  //     Key: fileName,
  //     Body: e.target.files,
  //     ACL: "public-read",
  //   };
  //   try {
  //     // const uploadedFile = await s3.upload(params).promise();
  //     console.log(uploadedFile);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     // TODO: Implement file upload logic
  //   };
  return (
    <>
      <h1>Welcome to the Home screen</h1>
      <label>
        firstname:{" "}
        <input
          value={firstname}
          name="myfirstname"
          onChange={(e) => setFirstname(e.target.value)}
        />
      </label>
      <hr />
      <label>
        Lastname:{" "}
        <input
          value={lastname}
          name="mylastname"
          onChange={(e) => setLastname(e.target.value)}
        />
      </label>
      <hr />
        <label>
          profile image:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        <button type="submit">Upload</button>
      {previewUrl && <img src={previewUrl} alt="Preview" />}
    </>
  );
}
export default Home;
