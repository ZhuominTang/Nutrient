import React,{FC} from 'react'
import { Food } from '../../../../model/food'

interface Prop{
    detail: Food
}
const SearchElement  = (prop : Prop)=> {
    const {description,foodNutrients} = prop.detail
    const energyAmount = (foodNutrients.filter(item => item.nutrient.name === "Energy"))[0]
    const {amount,nutrient} = energyAmount
    const {name,unitName} = nutrient
  return (
    <div>{description}</div>
  )
}

export default SearchElement