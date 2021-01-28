import React from 'react'
import { Typography } from 'antd';
import styled from '@emotion/styled'
import {Link} from 'react-router-dom'

const { Title } = Typography;


const Categorycontainer=styled.div({
      marginTop:"19px",
      backgroundColor:"white",
      padding:"19px",
      boxShadow:"0px 5px 4px -6px grey",
      borderRadius:"7px"
})    


const CategoryItem=styled.div({
  borderBottom:"0.2px solid #ecb390",
  paddingTop:"8px",
  paddingBottom:"5px"
})              

const CategoryList:React.FC=()=>{
    return(
        <Categorycontainer>
                <Title level={4}>Categories</Title>
                <CategoryItem><Link to="/science"><h4>Science</h4></Link></CategoryItem>
                <CategoryItem><Link to="/technology"><h4>Technology</h4></Link></CategoryItem>
                <CategoryItem><Link to="/sports"><h4>Sports</h4></Link></CategoryItem>
                <CategoryItem><Link to="/politics"><h4>Entertainment</h4></Link></CategoryItem>
               <Link to="/business"><h4 style={{padding:"8px 0px"}}>Business</h4></Link>
        </Categorycontainer>
    )
}
export default CategoryList