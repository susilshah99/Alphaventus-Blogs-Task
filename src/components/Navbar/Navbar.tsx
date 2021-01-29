import React from 'react'
import { Typography } from 'antd';
import styled from '@emotion/styled'

const { Title } = Typography;

const Nav=styled.div({
    padding:"16px 0px",
})


const NavContainer=styled.div({
    width:"70%",
    margin:"auto",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
})
const Navmenu=styled.div({
    display:"flex",
})

const NavmenuItem=styled.div({
 paddingLeft:"35px"
})

const Navbar:React.FunctionComponent=()=>{
    return(
        <Nav>
           <NavContainer>
              <Title level={4}>Sada.</Title>
              <Navmenu>
                  <NavmenuItem><Title level={3}>Home</Title></NavmenuItem>
                  <NavmenuItem><Title level={3}>Pages</Title></NavmenuItem>
                  <NavmenuItem><Title level={3}>Portfolio</Title></NavmenuItem>
                  <NavmenuItem><Title level={3}>Blog</Title></NavmenuItem>
                  <NavmenuItem><Title level={3}>Shop</Title></NavmenuItem>
                  <NavmenuItem><Title level={3}>Elements</Title></NavmenuItem>
              </Navmenu>
              </NavContainer>
        </Nav>
    )
}
export default Navbar