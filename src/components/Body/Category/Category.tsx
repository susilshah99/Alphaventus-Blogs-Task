import React from 'react'
import { Typography } from 'antd';
import styled from '@emotion/styled'
import {Link} from 'react-router-dom'

const { Title } = Typography;


const Categorycontainer=styled.div({
      marginTop:"19px",
      backgroundColor:"#fcf8e8",
      padding:"19px",
      boxShadow:"0px 5px 4px -6px grey",
      borderRadius:"7px"
})    


const CategoryItem=styled.div({
  borderBottom:"0.2px solid #ecb390",
})              

const CategoryList:React.FC=()=>{
    return(
        <Categorycontainer>
                <Title level={4}>Categories</Title>
                <CategoryItem><Link to="/science"><h4>Science</h4></Link></CategoryItem>
                <CategoryItem><Link to="/technology"><h4>Technology</h4></Link></CategoryItem>
                <CategoryItem><Link to="/sports"><h4>Sports</h4></Link></CategoryItem>
                <CategoryItem><Link to="/politics"><h4>Politics</h4></Link></CategoryItem>
               <h4>Music</h4>
        </Categorycontainer>
    )
}
export default CategoryList