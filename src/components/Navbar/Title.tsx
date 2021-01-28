import React from 'react'
import { Typography } from 'antd';
import styled from '@emotion/styled'
import { Breadcrumb } from 'antd';

const { Title } = Typography;

const Nav=styled.div({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    backgroundColor:"white",
    padding:"9px 0px",
    marginBottom:"8px"
})

const Header=styled.div({
    marginLeft:"50px"
})

const Titlemenu=styled.div({
    display:"flex",
    marginRight:"30px",
    paddingRight:"20px"
})

const BlogTitle:React.FunctionComponent=()=>{
    return(
        <Nav>
              <Header><Title level={4}>Blog</Title></Header>
                <Titlemenu>
                    <Breadcrumb>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>Blog</Breadcrumb.Item>
                            <Breadcrumb.Item>Left Sidebar</Breadcrumb.Item>
                         
                    </Breadcrumb>
              </Titlemenu>
        </Nav>
    )
}
export default BlogTitle