import React from 'react'
import {SearchOutlined} from '@ant-design/icons';
import styled from '@emotion/styled'

const Searchcontainer=styled.div({
    borderRadius:"25px",
    backgroundColor:"white",
    position:"relative",
    boxShadow:"0px 5px 4px -6px grey",
    padding:"4px 8px"
})

const SearchBar:React.FC=()=>{
    return(
        <Searchcontainer>
           <input placeholder="Search..." />
            <SearchOutlined  className="search__icon"/>
        </Searchcontainer>
    )
}
export default SearchBar