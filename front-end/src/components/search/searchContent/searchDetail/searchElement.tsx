import React, { FC } from 'react'
import { Food } from '../../../../model/food'
import Accordion from 'react-bootstrap/Accordion';
import './searchElement.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlus
  } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux';
import {addOneItem} from '../../../../api/selectSlice'


interface Prop {
    detail: Food
}
const SearchElement = (prop: Prop) => {
    const { description, foodNutrients,fdcId } = prop.detail
    const energyAmount = (foodNutrients.filter(item => item.nutrient.name === "Energy"))[0]
    const { amount, nutrient } = energyAmount
    const { name, unitName } = nutrient
    const sliceDispatch = useDispatch()
    const addItem =  (event:React.MouseEvent) => {
        event.stopPropagation()
       sliceDispatch(addOneItem({
            name:description
        }))
    }
    return (
      
                <Accordion.Item eventKey={description}>
                    <Accordion.Header>
                        <a onClick={addItem}><FontAwesomeIcon icon={faPlus} className="icon"  /></a>
                        <span>{description}</span>
                    <span className='energy'>{amount} {unitName}</span></Accordion.Header>
                    <Accordion.Body>
                        Details
                    </Accordion.Body>
                </Accordion.Item>
 
    )
}

export default SearchElement