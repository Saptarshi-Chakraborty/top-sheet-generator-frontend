import { useEffect, useRef, useState } from 'react';

const FormSemester = ({ semester, setSemester, allSubjects }) => {
    const inputRef = useRef(null);
    const elementId = "submitFormSemesterField";

    const [allSemester, setAllSemester] = useState([])
    const [_subjects, _setSubjects] = useState(null);

    const getAllSemester = () => {
        if (allSubjects === null) return;

        let semesterArray = [];

        for (let key in allSubjects) {
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
        if (allSubjects !== null)
            getAllSemester();

    }, [allSubjects])

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