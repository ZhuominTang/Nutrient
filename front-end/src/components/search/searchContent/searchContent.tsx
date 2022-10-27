import React from 'react'
import { useSearchNutritionQuery } from '../../../api/nutritionApi'
import SearchDetail from './searchDetail/searchDetail';


interface Props{
    keyword: string
}

const SearchContent = (props:Props) => {

    const message = {
        keyword: props.keyword,
        pageNo: 0,
        pageSize: 12
    }
    const {data,isSuccess} = useSearchNutritionQuery(message)

    return (
        <>
            {isSuccess && <SearchDetail data = {data}></SearchDetail>}
        </>

    )
}

export default SearchContent