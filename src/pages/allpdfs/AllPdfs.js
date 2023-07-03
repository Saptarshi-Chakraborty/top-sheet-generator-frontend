import React from 'react'
import Item from './Item'

const AllPdfs = ({ allPdfs }) => {


    return (
        <div className="accordion" id="accordionExample">
            {
                allPdfs.map((item, index) => {
                    return <Item key={item.pdfId} data={item} index={index} />
                })
            }

        </div>
    )
}

export default AllPdfs