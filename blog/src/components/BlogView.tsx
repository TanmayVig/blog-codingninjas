import React from 'react'
import axios from 'axios'
import {useNavigate, } from 'react-router-dom'
import { API } from "../vars";
import {ElementProp} from '../Interface/Interface'
import Button from '../atoms/Button'

export default function BlogView(element: ElementProp) {
  const navigate = useNavigate();
  const onClick = (event: React.MouseEvent) => {
    axios.get(`${API}/blog/${element._id}`).then((data) => {
      console.log(element._id)
      if(!!data)
        navigate("/blog", {state: data.data});
    }).catch(err=>{
      console.log(err);
    })
  }
  return (
  <div className='rounded-md shadow-lg shadow-blue-300 m-2 w-96 p-2 grid grid-flow-row'>
    <h2 className='font-medium'>{element.title}</h2>
    <p className='text-xs'>{element.description}</p>
    <div className='gird'>
      <Button color='blue' onClick={onClick}>
        open
      </Button>
    </div>
  </div>

  )
}
