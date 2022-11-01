import React, { useState, useRef } from 'react'
import SearchContent from './searchContent/searchContent';
import './searchPage.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faMinus
} from "@fortawesome/free-solid-svg-icons";
import { useDownloadFileMutation } from '../../api/nutritionApi';
import SearchCart from './searchCart/searchCart';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useDispatch } from 'react-redux';

import {deleteAllItem, deleteOneItem} from '../../api/selectSlice'



const SearchPage = () => {
    const select = useSelector((state: RootState) => state.select)
    const searchWord = useRef<HTMLInputElement | null>(null)
    const [keyword, setKeyword] = useState("")

    const [selectArray, setSelectArray] = useState<string[]>([])
    const sliceDispatch = useDispatch()
    useEffect(() => {
        setSelectArray(select.selectionArray)
    },[select])
    const [downloadFile,{error}] = useDownloadFileMutation()
    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(searchWord.current && searchWord.current.value.trim().length!==0){
            setKeyword(searchWord.current.value.trim())
        }
         
    }
    const handleDownload = () => {
        let data = select.selectionArray
        downloadFile(data).then(r=> {
        })
    }
    const clearItem = () => {
        sliceDispatch(deleteAllItem({
        }))
    }
    const deleteOneElement = (item:any) => {
        sliceDispatch(deleteOneItem({
            name : item
        }))
    }
    return (
        <>
        <div className='layout'>
            <div className='searchContent'>
            <form className='searchForm' onSubmit={handleSubmit}>
                
                    <input type="text"  placeholder="Search for Food" className='searchInput' ref={searchWord} />
               


                <button className="submitButton" type="submit">
                <FontAwesomeIcon icon={faSearch} className="mr-2" />
                </button>
            </form>
            {keyword.length!==0 && <SearchContent keyword={keyword}></SearchContent>}
            </div>
            <div className='cartContent'>
                <div className='buttonBar'>
                    <button onClick={handleDownload} className="button">Download</button>
                    <button onClick={clearItem} className="button">Clear</button>
                </div>
                {selectArray.map(item => 
                        <div key={item} className='element'>
                            <FontAwesomeIcon icon={faMinus} onClick={() => deleteOneElement({item})} className='minus'/>
                            <div >{item}</div>
                        </div>
                         
                    
                )}
            </div>

            </div>

        </>

    )
}

export default SearchPage