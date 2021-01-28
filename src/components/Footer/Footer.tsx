import React from 'react'
import { Row, Col } from 'antd'
import { Typography } from 'antd';
import styled from '@emotion/styled'

const { Title } = Typography;

const FooterContainer=styled.div({
    marginTop:"20px",
    paddingTop:"20px",
    backgroundColor:"white",
})
const FooterItems=styled.div({
    width:"70%",
    margin:"auto"
})

const Footer:React.FC=()=>{
    return(
        <FooterContainer>
            <FooterItems>
            <Row>
                <Col span={6}> 
                     <Title level={5}>Sada.</Title>
                     <h3><i className='bx bx-copyright' ></i>2018 Energetic Themes</h3>
                </Col>
                <Col span={4} offset={2}>
                    <Title level={5}>About us</Title>
                     <h3>Template</h3>
                     <h3>Product</h3>
                     <h3>Wix Playground</h3>
                     <h3>Website Builder</h3>
                </Col>
                <Col span={4} offset={2}>
                    <Title level={5}>Product</Title>
                    <h3>Design Assets</h3>
                     <h3>Terms of Use</h3>
                     <h3>Privacy Policy</h3>
                     <h3>Website Builder</h3>
                </Col>
                <Col span={4} offset={2}>
                    <Title level={5}>Contact us</Title>
                    <h3>alphaventus@gmail.com</h3>
                     <h3>01-55667788</h3>
                     <span><i className='bx bxl-facebook'></i><i className='bx bxl-instagram' ></i><i className='bx bxl-twitter' ></i></span>
                </Col>
               
            </Row>
            </FooterItems>

        </FooterContainer>
    )
}
export default Footer