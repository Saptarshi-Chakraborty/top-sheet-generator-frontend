import React, { useEffect, useRef } from 'react'

const FormSemester = ({ semester, setSemester }) => {
    const inputRef = useRef(null);
    const elementId = "submitFormSemesterField";

    useEffect(() => {
        return () => {
            setSemester("2nd");
        }
    }, [])

    const onChange = () => {
        setSemester(() => {
            return inputRef.current.value
        })
    }
    
    return (
        <div className="my-3">
            <label htmlFor={elementId} className="form-label">Select Semester</label>
            <select ref={inputRef} onChange={onChange} className="form-select" id={elementId} defaultValue={"2nd"} required={true}>
                <option value="1st">1st Semester</option>
                <option value="2nd">2nd Semester</option>
            </select>
        </div>
    )
}

export default FormSemester