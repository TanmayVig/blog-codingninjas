import React from 'react'
import {useLocation} from 'react-router-dom'
import SingleBlogView from '../components/SingleBlogView';
export default function SingleBlog() {
  const location = useLocation();
  const data = location.state;
  return (
    <>
      <SingleBlogView {...data.blog}>
        
      </SingleBlogView>
    </>
  )
}
