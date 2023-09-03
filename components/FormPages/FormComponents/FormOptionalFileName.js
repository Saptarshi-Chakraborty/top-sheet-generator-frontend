import React, { useRef } from 'react'

const FormOptionalFilename = ({ filename, setFilename }) => {
    const inputRef = useRef(null);
    const elementId = "submitFormOptionalFileNameField";

    const onChange = () => {
        setFilename(() => {
            return inputRef.current.value
        })
    }

    return (
        <div className="my-3">
            <label htmlFor="cName" className="form-label">Custom PDF File Name <span className="text-muted">(optional)</span></label>
            <input ref={inputRef} onChange={onChange} value={filename} type="text" className="form-control" id="cName" required={false} />
        </div>
    )
}

export default FormOptionalFilename