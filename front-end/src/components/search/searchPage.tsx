import React, { useState, useRef } from 'react'
import SearchContent from './searchContent/searchContent';
import './searchPage.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faMinus
} from "@fortawesome/free-solid-svg-icons";
import { useDownloadFileMutation } from '../../api/nutritionApi';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';

import {deleteAllItem, deleteOneItem} from '../../api/selectSlice'
import { initPage } from '../../api/pageSlice';


const SearchPage = () => {
    
    const select = useSelector((state: RootState) => state.select)
    const searchWord = useRef<HTMLInputElement | null>(null)
    const [keyword, setKeyword] = useState("")

    const [selectArray, setSelectArray] = useState<string[]>([])
    const dispatch = useDispatch()
    useEffect(() => {
        setSelectArray(select.selectionArray)
    },[select])
    const [downloadFile] = useDownloadFileMutation()
    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(searchWord.current && searchWord.current.value.trim().length!==0){
            setKeyword(searchWord.current.value.trim())
            dispatch(initPage({}))
        }
         
    }
    const handleDownload = () => {
        let data = select.selectionArray
        downloadFile(data).then(r=> {
            dispatch(deleteAllItem({
            }))
        })

    }
    const clearItem = () => {
        dispatch(deleteAllItem({
        }))
    }
    const deleteOneElement = (item:any) => {
        dispatch(deleteOneItem({
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
                <Button variant="outline-primary" onClick={handleDownload} className="button">Download</Button>
                <Button variant="outline-primary" onClick={clearItem} className="button">Clear</Button>
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