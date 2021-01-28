import React from 'react'
import { Pagination } from 'antd';
import styled from '@emotion/styled'

const PaginationContainer=styled.div({
    marginTop:"7px",
    textAlign:"center",
    paddingTop:"8px",
    marginBottom:"20px"
})

const StyledPagination=styled(Pagination)`
.ant-pagination-item-active a {
    background-color:#ff7b54;
    color:black;
}

.ant-pagination-item-active{
    border-color:white;
} 
`
const Paginations:React.FC=()=>{
    return(
        <PaginationContainer>
           <StyledPagination  defaultCurrent={1} total={50} />
        </PaginationContainer>
    )
}
export default Paginations