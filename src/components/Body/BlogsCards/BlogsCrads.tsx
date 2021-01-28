import React from 'react'
import {useState,useEffect} from 'react'
import DisplayCard from '../DisplayCard/DisplayCard'

const BlogsCard:React.FC=()=>{
    const[blogsdisplay,setBlogs]=useState([])
    console.log(blogsdisplay)

    
    useEffect(()=>{
        fetch(`http://newsapi.org/v2/top-headlines?country=us&category=general&pageSize=6&apiKey=b19cbbc893114e809520aa1c21648464`)
        .then(response=>(response.json()))
        .then(data=>setBlogs(data.articles))

    },[])
    return(
        <div>
          <DisplayCard blogs={blogsdisplay}/>
        </div>
    )
}
export default BlogsCard