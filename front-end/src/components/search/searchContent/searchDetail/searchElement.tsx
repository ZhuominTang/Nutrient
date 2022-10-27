import React, { FC } from 'react'
import { Food } from '../../../../model/food'
import Accordion from 'react-bootstrap/Accordion';
import './searchElement.scss'

interface Prop {
    detail: Food
}
const SearchElement = (prop: Prop) => {
    const { description, foodNutrients,fdcId } = prop.detail
    const energyAmount = (foodNutrients.filter(item => item.nutrient.name === "Energy"))[0]
    const { amount, nutrient } = energyAmount
    const { name, unitName } = nutrient
    return (
      
                <Accordion.Item eventKey={description}>
                    <Accordion.Header><span>{description}</span>
                    <span className='energy'>{amount} {unitName}</span></Accordion.Header>
                    <Accordion.Body>
                        Details
                    </Accordion.Body>
                </Accordion.Item>
 
    )
}

export default SearchElement