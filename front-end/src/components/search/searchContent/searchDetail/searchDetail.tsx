import React from 'react'
import Accordion from 'react-bootstrap/esm/Accordion';
import { Food } from '../../../../model/food';
import SearchElement from './searchElement';


interface Props {
  data: Array<Food>
}
const SearchDetail = (prop: Props) => {
  const data = prop.data
  return (
    <Accordion>
      {data.map((item:Food) =>
        <SearchElement key={item.fdcId} detail = {item}/>
      )}
    </Accordion>
  )
}

export default SearchDetail