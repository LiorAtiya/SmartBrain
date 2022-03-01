import React from "react";
import './ImageLinkForm.css'

const ImageLinkForm = ( {onInputChange, onClickButton} ) => {
    return (
        <div>
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures. Git it a try'}
            </p>
            <div className='center'>
                <div className='form pa4 br4 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                    <button 
                    onClick={onClickButton}
                    className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm