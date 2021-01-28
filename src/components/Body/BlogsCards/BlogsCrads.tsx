import React from 'react'
import {useState,useEffect} from 'react'
import DisplayCard from '../DisplayCard/DisplayCard'

const BlogsCard:React.FC=()=>{
    const[blogsdisplay,setBlogs]=useState([])

    
    useEffect(()=>{
        fetch(`http://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=4f311b873caa4098b6fefb3dc896f9fe`)
        .then(response=>(response.json()))
        .then(data=>setBlogs(data.articles.slice(0,6)))

    },[])
    return(
        <div>
          <DisplayCard blogs={blogsdisplay}/>
        </div>
    )
}
export default BlogsCard