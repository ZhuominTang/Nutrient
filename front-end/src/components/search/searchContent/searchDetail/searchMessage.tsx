import React from 'react'
import SearchDetail from './searchDetail';
import { useSearchNutritionQuery } from '../../../../api/nutritionApi'
import Pager from '../../../pager/pager'
interface Props {
    data:{
        keyword: string
        pageNo: number
        pageSize: number
    },
    getMessage: Function

}
const SearchMessage = (prop: Props) => {
    let contentPerPage = 10
    const {data,isSuccess} = useSearchNutritionQuery(prop.data)
    return (
        <>
        {!isSuccess && <div>Error!</div>}
 
        {isSuccess && <SearchDetail data={data.list}></SearchDetail>}
        {(isSuccess && data.list.length!==0) && <Pager    
            buttonConst={3}
            contentPerPage={contentPerPage}
            siblingCount={1}
            totalPageCount={Math.ceil(data.length / contentPerPage)}
            getMessage={prop.getMessage}/>}
    </>
    )
        
    
 
    
}

export default SearchMessage;