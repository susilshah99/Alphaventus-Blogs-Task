import React from 'react'
import {useState,useEffect} from 'react'
import { Card } from 'antd'
import DisplayCard from '../DisplayCard/DisplayCard'

const { Meta } = Card;

const Science:React.FC=()=>{
    const[blogsdisplay,setBlogs]=useState([])

    
    useEffect(()=>{
        fetch(`http://newsapi.org/v2/top-headlines?country=us&apiKey=4f311b873caa4098b6fefb3dc896f9fe`)
        .then(response=>(response.json()))
        .then(data=>setBlogs(data.articles.slice(0,5)))

    },[])
    return(
        <div>
          <DisplayCard blogs={blogsdisplay}/>
        </div>
    )
}
export default Science