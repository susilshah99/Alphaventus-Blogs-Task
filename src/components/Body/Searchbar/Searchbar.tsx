import React from 'react'
import {SearchOutlined} from '@ant-design/icons';
import styled from '@emotion/styled'

const Searchcontainer=styled.div({
    borderRadius:"13px",
    backgroundColor:"white",
    padding:"3px 12px",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    boxShadow:"0px 5px 4px -6px grey"
})

const SearchBar:React.FC=()=>{
    return(
        <Searchcontainer>
           <input placeholder="Search..." />
            <SearchOutlined />
        </Searchcontainer>
    )
}
export default SearchBar