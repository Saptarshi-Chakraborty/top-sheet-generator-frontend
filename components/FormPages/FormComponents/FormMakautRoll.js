'use client';

import React, { useRef } from 'react'

const FormMakautRoll = ({ makautRoll, setMakautRoll, semester }) => {
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
            <input ref={inputRef} value={makautRoll} onChange={onChange} id={elementId} type="number" autoComplete="off" className="form-control text-uppercase" placeholder="Enter your MAKAUT roll" required={(semester !== "1st")} />
            {
                (semester == "1st") &&
                <p className="text-muted">If you have not got your MAKAUT Roll yet, leave it blank</p>
            }
        </div>
    )
}

export default FormMakautRoll