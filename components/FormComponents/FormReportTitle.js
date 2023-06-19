import React, { useRef } from 'react'

const FormReportTitle = ({ reportTitle, setReportTitle }) => {
    const inputRef = useRef(null);
    const elementId = "submitFormReportTitle";

    const onChange = () => {
        setReportTitle(() => {
            return inputRef.current.value
        })
    }

    return (
        <div className="my-3">
            <label htmlFor={elementId} className="form-label">Report Title</label>
            <input ref={inputRef} value={reportTitle} onChange={onChange} type="text" className="form-control text-uppercase" id={elementId} placeholder="Enter the title" required={true} />
        </div>
    )
}

export default FormReportTitle