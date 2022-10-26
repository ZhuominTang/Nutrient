import React, { useState, useRef } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SearchContent from './searchContent/searchContent';




const searchPage = () => {
    const searchWord = useRef<HTMLInputElement | null>(null)
    const [keyword, setKeyword] = useState("")

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(searchWord.current && searchWord.current.value.trim().length!==0){
            setKeyword(searchWord.current.value.trim())
        }
         
    }
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="" required ref={searchWord} />
                </Form.Group>


                <Button className="submitButton" variant="primary" type="submit">
                    Search
                </Button>
            </Form>
            {keyword.length!==0 && <SearchContent keyword={keyword}></SearchContent>}
        </>

    )
}

export default searchPage