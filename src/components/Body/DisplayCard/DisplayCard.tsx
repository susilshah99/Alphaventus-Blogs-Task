import React from 'react'
import { Card } from 'antd'

const { Meta } = Card;

type DisplayCardProps = {
    blogs: any
} 

const DisplayCard:React.FC<DisplayCardProps>=({blogs})=>{
   // console.log(blogs);
    return(
        <div>
             {
                 blogs && blogs.map((item:any)=>(
                    <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={item.urlToImage} />}
                  >
                    <Meta title={item.title} description={item.description} />
                  </Card>

                 ))
             }
        </div>
    )
}
export default DisplayCard