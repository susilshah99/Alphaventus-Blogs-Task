import React from 'react'
import { Card } from 'antd'
import { Row, Col} from 'antd';
import styled from '@emotion/styled'

import {useState,useEffect} from 'react'

const { Meta } = Card;

const StyleMeta=styled(Meta)`
  .ant-card-meta-description{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
  }
`

type DisplayCardProps = {
    blogs: any
} 

const DisplayCard:React.FC<DisplayCardProps>=({blogs})=>{

    return(
        <div>
          <Row gutter={[16, 16]}>
             {
                   blogs && blogs.map((item:any)=>(
                    <Col span={8}>
                      <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={<img alt="example" className="displaycard__image" src={item.urlToImage} />}
                      >
                      <StyleMeta title={item.title} description={item.content} />
                    </Card>
                  </Col>

                 ))
             }
             </Row>
        </div>
    )
}
export default DisplayCard