import React from 'react'
import { Row, Col} from 'antd';
import styled from '@emotion/styled'
import { Typography } from 'antd';
const { Title } = Typography;

const Photocontainer=styled.div({
    marginTop:"29px",
})  

const Photoheader=styled.div({
    marginBottom:"19px",
})  
const PhotoGallery:React.FC=()=>{
    return(
        <Photocontainer>
            <Photoheader><Title level={4}>Instagram</Title></Photoheader>
         <Row gutter={[10, 10]}>
            <Col span={8}><img src="/photo1.jpg"/></Col>
            <Col span={8}><img src="/photo2.jpg"/></Col>
            <Col span={8}><img src="/photo3.jpg"/></Col>
         </Row>
         <Row gutter={[10, 10]}>
            <Col span={8}><img src="/photo4.jpg"/></Col>
            <Col span={8}><img src="/photo5.jpg"/></Col>
            <Col span={8}><img src="/photo6.jpg"/></Col>
         </Row>
        </Photocontainer>
    )
}
export default PhotoGallery