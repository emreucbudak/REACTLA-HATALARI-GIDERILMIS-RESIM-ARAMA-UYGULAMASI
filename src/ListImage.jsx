import React from 'react'
import ShowImg from './ShowImg'

function ListImage({ imgList }) {

    return (
        <>
            <div>
                {
                    imgList.map((data, index) => {
                        return <ShowImg key={index} resim={data} />
                    })
                }
            </div>
        </>
    )
}

export default ListImage