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
    const {data,isSuccess,isLoading} = useSearchNutritionQuery(prop.data)
    return (
        <>
        {isLoading && <div>IsLoading</div>}
 
 
        {isSuccess && <SearchDetail data={data.list}></SearchDetail>}
        {(isSuccess && data.list.length!==0) && <Pager    
            buttonConst={3}
            contentPerPage={contentPerPage}
            siblingCount={2}
            totalPageCount={Math.ceil(data.length / contentPerPage)}
            getMessage={prop.getMessage}/>}
    </>
    )
        
    
 
    
}

export default SearchMessage;