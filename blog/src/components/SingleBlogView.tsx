import React from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import {API} from '../vars'
import { ElementProp } from "../Interface/Interface";
import Button from "../atoms/Button";

export default function SingleBlogView(prop: ElementProp) {
    const navigate = useNavigate();
    const handleUpdate = (event : React.MouseEvent)=>{
        navigate('/updateform', {state: prop});
    }

    const handleDelete = (event : React.MouseEvent) =>{
        axios.delete(`${API}/blog/${prop._id}`).then(data=>{
            console.log(data.data.message);
            navigate('/');
        }).catch(err =>{
            console.log(err);
        });
    }
  return (
    <div className="grid grid-flow-row">
      <div className='justify-self-start'>
        <h1>{prop.title}</h1>
      </div>

      <p className="justify-self-center">"{prop.description}"</p>
      <img src={prop.image} alt="IMAGE" />
      <div className="grid grid-flow-col">
        <Button color= 'green' onClick={handleUpdate}>Update</Button>
        <Button color= 'red' onClick={handleDelete}>Delete</Button>
      </div>
    </div>
  );
}
