import React from 'react'
import { Typography } from 'antd';
import styled from '@emotion/styled'
import {useState,useEffect} from 'react'
import { Row, Col } from 'antd'

const { Title } = Typography;

const Trendingcontainer=styled.div({
    marginTop:"19px",
    backgroundColor:"#fcf8e8",
    padding:"19px",
    boxShadow:"0px 5px 4px -6px grey",
    borderRadius:"7px"
})  
const TrendingItem=styled.div({
      marginBottom:"12px",
      paddingBottom:"10px",
      paddingTop:"10px"
})  

const Trending:React.FC=()=>{
    const[blogs,setBlogs]=useState([])
    console.log(blogs)

    useEffect(()=>{
        fetch(`http://newsapi.org/v2/top-headlines?country=us&apiKey=4f311b873caa4098b6fefb3dc896f9fe`)
        .then(response=>(response.json()))
        .then(data=>setBlogs(data.articles.slice(0,4)))

    },[])
    return(
        <Trendingcontainer>
              <Title level={4}>Top Posts</Title>
              {
                  blogs && blogs.map((item:any,index:number)=>(
                      
                      <TrendingItem>
                        <Row>
                            <Col span={4}> <Title level={2}>{index+1}</Title></Col>
                            <Col span={20}>
                                <h4>{item.title}</h4>
                                <span>{item.author}-{item.publishedAt}</span>
                            </Col>
                        </Row>
                      </TrendingItem>
                      
                  ))
              }
        </Trendingcontainer>
    )
}

export default Trending