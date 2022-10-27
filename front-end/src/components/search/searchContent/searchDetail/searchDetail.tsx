import React from 'react'
import { Food } from '../../../../model/food';
import SearchElement from './searchElement';


interface Props {
  data: Array<Food>
}
const SearchDetail = (prop: Props) => {
  const data = prop.data
  return (
    <div>
      {data.map((item:Food) =>
        <SearchElement key={item.fdcId} detail = {item}/>
      )}
    </div>
  )
}

export default SearchDetail