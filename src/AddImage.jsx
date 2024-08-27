import React, { useState } from 'react'

function AddImage({searchImage}) {
    const [inputValue,setInputValue] = useState("")
    const onInputChange = (e) => {
        setInputValue(e.target.value);
        
    }
    const onSubmit = (e) => {
        e.preventDefault();
        searchImage(inputValue);
        setInputValue("")

    }
    return (
        <div>
            <div className='form'>
                <form action="" className='formdiv'>
                    <p className='paragraf'>Aramak İstediğiniz Kelimeyi yazın</p>
                    <input type="text" onChange={onInputChange} value={inputValue}/>
                    <button type='submit' className='button' onClick={onSubmit}>Gönder</button>
                </form>
            </div>
        </div>
    )
}

export default AddImage