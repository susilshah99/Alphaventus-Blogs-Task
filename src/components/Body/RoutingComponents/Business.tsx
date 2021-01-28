import React from 'react'
import {useEffect,useState} from 'react'
import DisplayCard from '../DisplayCard/DisplayCard'

const Business:React.FC=()=>{
  const[blogsdisplay,setBlogs]=useState([])

    
  useEffect(()=>{
      fetch(`http://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=6&apiKey=b19cbbc893114e809520aa1c21648464`)
      .then(response=>(response.json()))
      .then(data=>setBlogs(data.articles))

  },[])
  return(
      <div>
        <DisplayCard blogs={blogsdisplay}/>
      </div>
  )
}
export default Business