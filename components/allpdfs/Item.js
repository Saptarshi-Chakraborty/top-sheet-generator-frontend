import React from 'react'

const Item = ({ data, index }) => {
    // console.log(data)
    let date = "";
    if (data != undefined)
        date = new Date(data?.timeStamp).toString();

    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#card${data?.pdfId}`} aria-expanded="true" aria-controls={`card${data?.pdfId}`}>
                    {data?.studentName} - {data?.subjectName}
                </button>
            </h2>
            {/* <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample"> */}
            <div id={`card${data?.pdfId}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body py-2">
                    <p className='my-0'>Class Roll : <strong>{data?.classRoll}</strong></p>
                    <p className='my-0'>Makaut Roll : <strong>{data?.makautRoll}</strong></p>
                    <p className='my-0'>Semester : <strong>{data?.semester} Semester</strong></p>
                    <p className='my-0'>department : <strong>{data?.department}</strong></p>
                    <p className='my-0'>Report Title : <strong>{data?.reportTitle}</strong></p>

                    <p className='my-2 d-flex flex-row align-items-center justify-content-evenly'>
                        <a className='btn btn-success' target='_blank' href={data?.downloadUrl}>Download PDF</a>
                        <a className='btn btn-primary' target='_blank' href={data?.previewUrl}>View PDF</a>
                    </p>

                    <p className='my-0 text-muted'>Generated at: {date}</p>
                </div>
            </div>
        </div>
    )
}

export default Item