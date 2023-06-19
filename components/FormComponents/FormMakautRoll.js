'use client';

import React, { useRef } from 'react'

const FormMakautRoll = ({ makautRoll, setMakautRoll }) => {
    const inputRef = useRef(null);
    const elementId = "submitFormMakautRoll";

    const onChange = () => {
        setMakautRoll(() => {
            return inputRef.current.value
        })
    }

    return (
        <div className="my-3">
            <label htmlFor={elementId} className="form-label">MAKAUT Roll</label>
            <input ref={inputRef} value={makautRoll} onChange={onChange} id={elementId} type="number" autoComplete="off" className="form-control text-uppercase" placeholder="Enter your MAKAUT roll" required={true} />
        </div>
    )
}

export default FormMakautRoll