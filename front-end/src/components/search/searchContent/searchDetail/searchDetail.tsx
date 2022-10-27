import React from 'react'
import Accordion from 'react-bootstrap/esm/Accordion';
import { Food } from '../../../../model/food';
import SearchElement from './searchElement';
import "./searchDetail.scss"


interface Props {
  data: Array<Food>
}
const SearchDetail = (prop: Props) => {
  const data = prop.data
  return (
    <div>
      {data.length === 0 && <div className='nothing'>Nothing Found!</div>}
      {data.length !== 0 && <Accordion>
        {data.map((item: Food) =>
          <SearchElement key={item.fdcId} detail={item} />
        )}
      </Accordion>}

    </div>
  )
}

export default SearchDetail