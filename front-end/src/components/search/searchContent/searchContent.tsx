import React,{useState} from 'react'

import SearchMessage from './searchDetail/searchMessage';
import { useEffect } from 'react';



interface Props{
    keyword: string
}


const SearchContent = (props:Props) => {
    const [message,setMessage] = useState({
        
            keyword: props.keyword,
            pageNo: 0,
            pageSize: 10
        
    });
    useEffect(()=>{
        let newMessage = Object.assign({},message,{keyword:props.keyword,pageNo:0})
        setMessage(newMessage)
    },[props.keyword,message])

    const getMessage = (pageNumber : number) =>{
        let newMessage = Object.assign({},message,{pageNo:(pageNumber-1)*10})
        setMessage(newMessage)
    }

    return (
        <>
                <SearchMessage getMessage={getMessage} data={message}></SearchMessage>
        </>

    )
}

export default SearchContent