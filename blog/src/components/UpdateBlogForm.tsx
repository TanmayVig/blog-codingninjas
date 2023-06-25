import React from "react";
import Button from "../atoms/Button";
import axios from "axios";
import { API } from "../vars";
import { useLocation } from "react-router-dom";

export default function CreateBlogForm() {
  const location = useLocation();
  const data = location.state;
  // console.log(data);
  const [title, setTitle] = React.useState<string>(data.title);
  const [description, setDescription] = React.useState<string>(
    data.description
  );
  const [image, setImage] = React.useState<any>(null);
  const [url, setUrl] = React.useState<string>(data.image);

  const handleSubmit = (e: React.MouseEvent) => {
    if (image !== null) {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "insta-clone");
      data.append("cloud_name", "tanmay-vig");
      axios
        .post("https://api.cloudinary.com/v1_1/tanmay-vig/image/upload", data)
        .then((res) => {
          console.log(res.data.url);
          setUrl(res.data.url);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    axios.put(`${API}/blog/update`,{
      title,
      description,
      image:url,
      id:data._id
    }).then(res=> console.log(res)).catch(err => console.log(err));
  };
  return (
    <>
      <div>
        <label>
          Title:
          <input
            className="border-2"
            type="text"
            name="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Description:
          <input
            className="border-2"
            type="text"
            name="description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Image:
          <input
            className="block w-full text-sm text-slate-500"
            type="file"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>
      </div>
      <div>
        <Button color="blue" onClick={handleSubmit}>
          Update Form
        </Button>
      </div>
    </>
  );
}
