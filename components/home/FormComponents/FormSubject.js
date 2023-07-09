import React, { useEffect, useRef, useState } from 'react'

const FormSubject = ({ subject, setSubject, semester, classRoll, _allSubjects }) => {
    const inputRef = useRef(null);
    const elementId = "submitFormMakautRoll";

    const [allSubjects, setAllSubjects] = useState([]);

    const getSubjects = () => {
        if (semester == "") return;

        let allDataForThisSemester = _allSubjects[semester];
        let _department = String(classRoll).split("-")[1];
        let subjectsForThisDepartment = allDataForThisSemester[_department];

        if (subjectsForThisDepartment === undefined) {
            let firstDepartment = "";
            for (let item in allDataForThisSemester) {
                firstDepartment = `${item}`;
                break;
            }

            subjectsForThisDepartment = allDataForThisSemester[firstDepartment];
        }

        setAllSubjects(() => subjectsForThisDepartment);

        let firstSubject = `${subjectsForThisDepartment[0]?.name},${subjectsForThisDepartment[0]?.code}`;
        setSubject(() => firstSubject);
    }


    useEffect(() => {
        if (semester == "" || String(classRoll).includes("-") === false || _allSubjects === null) return;

        getSubjects();

    }, [semester, classRoll])

    const onChange = () => {
        setSubject(() => {
            return inputRef.current.value
        })
    }

    return (
        <div className="my-3">
            <label htmlFor="subjectCode" className="form-label">Select Subject</label>
            <select ref={inputRef} onChange={onChange} className="form-select" id="subjectCode" value={(allSubjects.length == 0) ? "null" : subject} required={true} readOnly>
                {
                    (allSubjects.length == 0) &&
                    <option value="null" disabled={true}>No Subject Found</option>
                }

                {
                    allSubjects.map((item) => {
                        // console.log(item);
                        return (<option key={item.code} value={`${item.name},${item.code}`}>{item.name} ({item.code})</option>);
                    })
                }
                {/* <option value="Physics,BS-PH201">Physics (BS-PH201)</option> */}

            </select>
        </div>
    )
}

export default FormSubject