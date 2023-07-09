import React, { useRef } from 'react'
import { v4 as uuid } from 'uuid';

const FormName = ({ name, setName }) => {
    const nameRef = useRef(null);
    const nameId = "submitFormStudentName";

    const onChange = () => {
        setName(() => {
            return nameRef.current.value
        })
    }

    return (
        <div className="my-3">
            <label htmlFor={nameId}
                className="form-label">
                Student Name
            </label>

            <input type="text"
                autoComplete="name"
                className="form-control text-uppercase"
                ref={nameRef}
                value={name}
                id={nameId}
                onChange={onChange}
                placeholder="Enter your name here"
                required={true} />
        </div>
    )
}

export default FormName