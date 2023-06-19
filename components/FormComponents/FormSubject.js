import React, { useEffect, useRef } from 'react'

const FormSubject = ({ subject, setSubject }) => {
    const inputRef = useRef(null);
    const elementId = "submitFormMakautRoll";
    const defaultValue = "Chemistry,BS-CH201";
    
    useEffect(() => {
        return () => {
            setSubject(defaultValue);
        }
    }, [])

    const onChange = () => {
        setSubject(() => {
            return inputRef.current.value
        })
    }

    return (
        <div className="my-3">
            <label htmlFor="subjectCode" className="form-label">Select Subject</label>
            <select ref={inputRef} onChange={onChange} className="form-select" id="subjectCode" defaultValue={defaultValue} required={true}>
                <option value="Physics,BS-PH201">Physics (BS-PH201)</option>
                <option value="Chemistry,BS-CH201">Chemistry (BS-CH201)</option>
                <option value="Mathematics-IIA,BS-M201">Mathematics - II A (BS-M201)</option>
                <option value="Mathematics-IIB,BS-M202">Mathematics - II B (BS-M202)</option>
                <option value="English,HM-HU201">English (HM-HU201)</option>
                <option value="Programming for Problem Solving,ES-CS201">Programming for Problem Solving (ES-CS201)</option>
                <option value="Basic Electrical Engineering,ES-EE201">Basic Electrical Engineering (ES-EE201)
                </option>
            </select>
        </div>
    )
}

export default FormSubject