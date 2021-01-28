import React from 'react'
import { Row, Col, Button } from 'antd';
import SearchBar from './Searchbar/Searchbar'
import styled from '@emotion/styled'
import CategoryList from './Category/Category'
import Trending from './Trending/Trending'
import PhotoGallery from './PhotoGallery/PhotoGallery'
import BlogsCard from './BlogsCards/BlogsCrads'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Technology from './RoutingComponents/Technology'
import Sports from './RoutingComponents/Sports'
import Politics from './RoutingComponents/Politics'
import Science from './RoutingComponents/Science'
import Business from './RoutingComponents/Business'

const Bodywrapper=styled.div({
    width:"85vw",
    margin:"30px auto"
})

const Body: React.FunctionComponent = () => {
    return (
    <BrowserRouter>
        <Bodywrapper>
            <Row gutter={16}>
                <Col span={8}>
                        <SearchBar/>
                        <CategoryList/>
                        <Trending/>
                    <PhotoGallery/>
                </Col>
                <Col span={16}>
                    <Switch>
                        <Route exact path="/" component={BlogsCard}/>
                        <Route path="/science" component={Science}/>
                        <Route path="/technology" component={Technology}/>
                        <Route path="/sports" component={Sports}/>
                        <Route path="/politics" component={Politics}/>
                        <Route path="/business" component={Business}/>
                    </Switch>
                </Col>
            </Row>

        </Bodywrapper>
    </BrowserRouter>

    )
}
export default Body