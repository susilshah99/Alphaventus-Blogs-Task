import React from 'react'
import {useEffect,useState} from 'react'
import DisplayCard from '../DisplayCard/DisplayCard'

const Sports:React.FC=()=>{
    const[blogsdisplay,setBlogs]=useState([])

    
    useEffect(()=>{
        fetch(`http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=4f311b873caa4098b6fefb3dc896f9fe`)
        .then(response=>(response.json()))
        .then(data=>setBlogs(data.articles.slice(0,9)))

    },[])
    return(
        <div>
          <DisplayCard blogs={blogsdisplay}/>
        </div>
    )
}
export default Sports