import React from 'react'
import { useGetAllNutritionQuery } from '../../api/nutritionApi'
const searchPage = () => {
    useGetAllNutritionQuery({}) 
    return (
        <div>search</div>
    )
}

export default searchPage