import { useEffect, useRef, useState } from 'react';

const FormSemester = ({ semester, setSemester, allSubjects }) => {
    const inputRef = useRef(null);
    const defaultValueFilled = useRef(false);

    const [allSemester, setAllSemester] = useState([])
    const [_subjects, _setSubjects] = useState(null);

    const elementId = "submitFormSemesterField";

    
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
        if (allSubjects !== null) {
            getAllSemester();
            setDefaultSemester();
        }

    }, [allSubjects])

    const onChange = () => {
        setSemester(() => {
            return inputRef.current.value
        })
    }

    const setDefaultSemester = () => {
        if (defaultValueFilled.current == true) return;

        const localJsonData = localStorage.getItem("allPdfs");
        if (localJsonData === null) return;
        if (allSubjects == null) return;
        if (allSemester.length == 0) return;

        let localData;
        try {
            localData = JSON.parse(localJsonData);
            let firstData = localData[0];

            if (allSemester.includes(firstData.semester) === false) return;

            setSemester(() => firstData.semester);
            defaultValueFilled.current = true;
        } catch (error) {
            return;
        }
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