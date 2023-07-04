import React from 'react'
import Item from './Item'

const AllPdfs = ({ allPdfs }) => {


    return (<>
        <div className="accordion" id="accordionExample">
            {
                (allPdfs != undefined) &&
                allPdfs.map((item, index) => {
                    return <Item key={item?.pdfId} data={item} index={index} />
                })
            }
        </div>

        <p className='text-muted my-3'>*Note: All of the above information is stored locally in your device.</p>
    </>)
}

export default AllPdfs