import React, { useEffect, useRef, useState } from 'react'
import subjects from '../../public/data/subjects';

const FormSubject = ({ subject, setSubject, semester, classRoll }) => {
    const inputRef = useRef(null);
    const elementId = "submitFormMakautRoll";

    const [allSubjects, setAllSubjects] = useState([]);
    const [department, setDepartment] = useState("")

    const getAllSubjects = () => {
        if (department == "") return;
        let semesterWiseSubjects = subjects[semester];
        let departmentWiseSubjects = semesterWiseSubjects[department];

        setAllSubjects(() => { return departmentWiseSubjects });

        let fullSubject = `${departmentWiseSubjects[0].name},${departmentWiseSubjects[0].code}`
        setSubject(() => fullSubject)
    }

    const extractDepartment = () => {
        let arr = classRoll.split("-");
        setDepartment(() => { return arr[1] });
        // getAllSubjects();
    }

    useEffect(() => {
        if (department !== "") {
            getAllSubjects();
        }
    }, [department])

    useEffect(() => {
        if (department !== "") {
            extractDepartment();
        }
    }, [classRoll])

    useEffect(() => {
        if (semester !== "") {
            getAllSubjects();
        }
    }, [semester])

    useEffect(() => {
        if (subject == "" && allSubjects.length != 0)
            setSubject(() => `${allSubjects[0].name},${allSubjects[0].code}`)
    }, [subject])


    useEffect(() => {
        return () => {
            extractDepartment();
            getAllSubjects();
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
            <select ref={inputRef} onChange={onChange} className="form-select" id="subjectCode" value={(allSubjects.length == 0) ? "null" : subject} required={true}>
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