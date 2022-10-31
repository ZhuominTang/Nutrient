import React, { useState, useRef } from 'react'
import SearchContent from './searchContent/searchContent';
import './searchPage.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useDownloadFileMutation } from '../../api/nutritionApi';





const SearchPage = () => {
    const searchWord = useRef<HTMLInputElement | null>(null)
    const [keyword, setKeyword] = useState("")
    const [downloadFile,{error}] = useDownloadFileMutation()
    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(searchWord.current && searchWord.current.value.trim().length!==0){
            setKeyword(searchWord.current.value.trim())
        }
         
    }
    const handleDownload = () => {
        let data = ["Milk, whole","Milk, whole"]
        downloadFile(data).then(r=> {
        })
    }

    return (
        <>
            <form className='searchForm' onSubmit={handleSubmit}>
                
                    <input type="text"  placeholder="Search for Food" className='searchInput' ref={searchWord} />
               


                <button className="submitButton" type="submit">
                <FontAwesomeIcon icon={faSearch} className="mr-2" />
                </button>
            </form>
            <button className="submitButton" onClick={handleDownload}>
                <FontAwesomeIcon icon={faSearch} className="mr-2" />
                </button>
            {keyword.length!==0 && <SearchContent keyword={keyword}></SearchContent>}
        </>

    )
}

export default SearchPage