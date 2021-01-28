import React from 'react'
import { Typography } from 'antd';
import styled from '@emotion/styled'
import { Breadcrumb } from 'antd';

const { Title } = Typography;

const Nav=styled.div({
    backgroundColor:"white",
    padding:"9px 0px",
    marginBottom:"8px"
})

const TitleContainer=styled.div({
    width:"70%",
    margin:"auto",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
})

const Titlemenu=styled.div({
    display:"flex",
})

const BlogTitle:React.FunctionComponent=()=>{
    return(
        <Nav>
          <TitleContainer>
              <Title level={4}>Blog</Title>
                <Titlemenu>
                    <Breadcrumb>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>Blog</Breadcrumb.Item>
                            <Breadcrumb.Item>Left Sidebar</Breadcrumb.Item>
                         
                    </Breadcrumb>
              </Titlemenu>
              </TitleContainer>
        </Nav>
    )
}
export default BlogTitle