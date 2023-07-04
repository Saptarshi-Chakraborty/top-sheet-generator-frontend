import React, { useEffect, useRef, useState } from 'react'
import subjects from '../../public/data/subjects';

const FormSemester = ({ semester, setSemester }) => {
    const inputRef = useRef(null);
    const elementId = "submitFormSemesterField";

    const [allSemester, setAllSemester] = useState([])


    const getAllSemester = () => {
        let semesterArray = [];
        for (let key in subjects) {
            semesterArray.push(key);
        }

        setAllSemester(() => {
            return semesterArray;
        })

        if (semesterArray.length !== 0) {
            setSemester(() => {
                return semesterArray[0]
            })
        }
    }

    useEffect(() => {
        return () => {
            getAllSemester();
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
            <select ref={inputRef} onChange={onChange} className="form-select" id={elementId} value={(allSemester.length == 0) ? "null" : semester} required={true}>
                {
                    (allSemester.length == 0) &&
                    <option value="null" disabled={true}>No Semester Found</option>
                }

                {
                    allSemester.map((item) => {
                        return <option key={item} value={item}>{item} Semester</option>
                    })
                }

            </select>
        </div>
    )
}

export default FormSemester