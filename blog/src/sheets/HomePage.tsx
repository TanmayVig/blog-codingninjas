import { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import { API } from "../vars";
import { ElementProp } from "../Interface/Interface";
import Button from "../atoms/Button";
import BlogView from "../components/BlogView";

export default function HomePage() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<ElementProp[]>([]);
  useEffect(() => {
    axios
      .get(`${API}/blog/all`)
      .then((response) => {
        console.log(response);
        if (response.status !== 500) {
          setBlogs(response.data.blogs);
        } else {
          console.log("INTERNAL SERVER ERROR");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className='grid grid-flow-row justify-center justify-items-center'>
      <div>
      <h1 className='underline '>BLOGS</h1>
      </div>

      {blogs.map((element: ElementProp, id: number) => {
        return (
          <div key = {id}>
            <BlogView {...element} />
          </div>
        );
      })}
      <Button color='blue' onClick={(e)=>{navigate('/createform');}}>
        CREATE BLOG
      </Button>
    </div>
  );
}
