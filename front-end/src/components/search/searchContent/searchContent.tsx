import React from 'react'
import { useSearchNutritionQuery } from '../../../api/nutritionApi'

interface Props{
    keyword: string
}

const searchContent = (props:Props) => {

    const message = {
        keyword: "cheese",
        pageNo: 1,
        pageSize: 20
    }
    const {data,isSuccess} = useSearchNutritionQuery(message)
    if(isSuccess){
        console.log(data)
    }

    return (
        <>
            
        </>

    )
}

export default searchContent