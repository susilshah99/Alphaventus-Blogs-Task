import React from 'react'
import { Typography } from 'antd';
import styled from '@emotion/styled'

const { Title } = Typography;

const Nav=styled.div({
    display:"flex",
    justifyContent:"space-between",
    marginLeft:"50px",
    alignItems:"center",
    padding:"9px 0px",
})

const Navmenu=styled.div({
    display:"flex",
    marginRight:"30px",
    paddingRight:"20px"
})

const NavmenuItem=styled.div({
   padding:"0px 20px"
})

const Navbar:React.FunctionComponent=()=>{
    return(
        <Nav>
              <Title level={4}>Sada.</Title>
              <Navmenu>
                  <NavmenuItem><Title level={3}>Home</Title></NavmenuItem>
                  <NavmenuItem><Title level={3}>Pages</Title></NavmenuItem>
                  <NavmenuItem><Title level={3}>Portfolio</Title></NavmenuItem>
                  <NavmenuItem><Title level={3}>Blog</Title></NavmenuItem>
                  <NavmenuItem><Title level={3}>Shop</Title></NavmenuItem>
                  <NavmenuItem><Title level={3}>Elements</Title></NavmenuItem>
              </Navmenu>
        </Nav>
    )
}
export default Navbar