import React, { useEffect, useRef, useState } from 'react'
import subjects from '../../data/subjects';

const FormClassRoll = ({ classRoll, setClassRoll, semester }) => {
    const classRoll1 = useRef(null);
    const classRoll2 = useRef(null);
    const classRoll3 = useRef(null);

    const [allDepartments, setAllDepartments] = useState([])

    const getDepartments = () => {
        if (semester == "") return;

        let semesterWiseDepartments = subjects[semester];
        let departmentList = [];
        for (let key in semesterWiseDepartments) {
            departmentList.push(key);
        }
        setAllDepartments(() => departmentList)
    }

    useEffect(() => {
        getDepartments();
    }, [semester])


    const updateRoll = () => {
        let part1 = String(classRoll1.current.value).trim();
        let part2 = String(classRoll2.current.value).trim();
        let part3 = String(classRoll3.current.value).trim();

        let classRoll = `${part1}-${part2}-${part3}`;
        classRoll = String(classRoll).toUpperCase();

        // console.log(`Class Roll: ${classRoll}`);

        setClassRoll(() => {
            return classRoll;
        })
    }


    return (
        <div className="my-3">
            <label htmlFor="cRoll3" className="form-label">Your Class Roll Number &nbsp; [ <span id="displayRoll">{classRoll}</span> ]</label>
            <div className="input-group mb-3">
                <select ref={classRoll1} onChange={updateRoll} className="form-select pe-0" aria-label="Default select example" defaultValue={"22"}>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                </select>
                <span className="input-group-text fw-bold"> - </span>
                <select ref={classRoll2} onChange={updateRoll} className="form-select pe-0" aria-label="Department" defaultValue={(allDepartments.length == 0) ? "null" : allDepartments[0]} required={true}>
                    {
                        (allDepartments.length == 0) &&
                        <option value="null" disabled={true}>None</option>
                    }

                    {
                        allDepartments.map((item) => {
                            return <option key={item} value={item}>{item}</option>
                        })
                    }
                    {/* <option value="CSE">CSE</option> */}

                </select>
                <span className="input-group-text fw-bold"> - </span>
                <input ref={classRoll3} onChange={updateRoll} type="number" id='cRoll3' className="form-control flex-grow-1" placeholder="Roll" required={true} />
            </div>
        </div>
    )
}

export default FormClassRoll