import React, { useState } from 'react'
import CreateImg from '../CreateImg';


function ShowImg({ resim }) {
    const cevap = resim.cevap;
    return (
        <>
            <div className='listedImg'>
                {
                    cevap.map((data, index) => {
                        return <CreateImg key={index} resimler={data.urls.small} />
                    })
                }
            </div>

        </>
    )
}

export default ShowImg