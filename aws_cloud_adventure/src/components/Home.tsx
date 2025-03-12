import { useState } from "react";

function Home() {
  const [image, setImage] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const handleImageChange = (event:any) => {
    const file = event.target.files && event.target.files[0]; // Check if a file is selected

    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file)); // Create a preview URL
    }
  };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // TODO: Implement file upload logic
//   };
  return (
    <>
      <h1>Welcome to the Home screen</h1>
      <label>
        firstname: <input value={firstname} name="myfirstname" onChange={(e)=> setFirstname(e.target.value)} />
      </label>
      <hr />
      <label>
        Lastname: <input value={lastname} name="mylastname" onChange={(e)=> setLastname(e.target.value)} />
     </label>
      <hr />
      <label>
        profile image: <input type="file" accept="image/*"  onChange={handleImageChange} />
     </label>
     {previewUrl && <img src={previewUrl} alt="Preview" />}

    </>
  );
}
export default Home;
