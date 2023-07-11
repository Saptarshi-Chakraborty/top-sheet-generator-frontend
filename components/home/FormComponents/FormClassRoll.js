import React, { useEffect, useRef, useState } from 'react'

const FormClassRoll = ({ classRoll, setClassRoll, semester, includeClassRoll, setIncludeClassRoll, allSubjects }) => {
    const classRoll1 = useRef(null);
    const classRoll2 = useRef(null);
    const classRoll3 = useRef(null);
    const checkBoxRef = useRef(null);
    const defaultValueFilled = useRef(false);

    const [allDepartments, setAllDepartments] = useState([])
    const [rollNumber, setRollNumber] = useState("");

    const getDepartments = () => {
        if (semester == "" || allSubjects == null) return;

        let semesterWiseDepartments = allSubjects[semester];
        let departmentList = [];
        for (let key in semesterWiseDepartments) {
            departmentList.push(key);
        }
        setAllDepartments(() => departmentList)
    }

    useEffect(() => {
        getDepartments();
    }, [semester, allSubjects])


    useEffect(() => {
        if (classRoll.split("-")[2] == "") {
            setRollNumber("");
            setDefaultClassRoll();
        }
    }, [classRoll])


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

        setRollNumber(() => part3);
    }

    const updateCheckBox = () => {
        setIncludeClassRoll((oldValue) => !oldValue)
    }

    useEffect(() => {
        setDefaultClassRoll();
    }, [allDepartments])


    const setDefaultClassRoll = () => {
        if (defaultValueFilled.current == true) return;

        const localJsonData = localStorage.getItem("allPdfs");
        if (localJsonData === null) return;
        // console.log(`localStorage: (${localJsonData})`);
        if (allSubjects == null) return;
        if (allDepartments.length == 0) return;
        if (String(classRoll).split("-")[2] !== "") return;

        let localData;
        try {
            localData = JSON.parse(localJsonData);
            let firstData = localData[0];
            const classRollArray = String(firstData.classRoll).split("-");
            const newDefaultClassRoll = `${classRollArray[0]}-${classRollArray[1]}-`;
            
            if (allDepartments.includes(classRollArray[1]) === false) return;

            classRoll1.current.value = classRollArray[0];
            classRoll2.current.value = classRollArray[1];
            setClassRoll(() => newDefaultClassRoll);
            defaultValueFilled.current = true;

        } catch (error) {
            return;
        }

    }


    return (
        <div className="my-3">
            <label htmlFor="cRoll3" className="form-label">Your Class Roll Number &nbsp; [ <span id="displayRoll">{classRoll}</span> ]</label>

            <div className="input-group my-3">
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
                <input ref={classRoll3} onChange={updateRoll} value={rollNumber} type="number" id='cRoll3' className="form-control flex-grow-1" placeholder="Roll" maxLength={3} required={true} />
            </div>

            <div className="form-check">
                <input ref={checkBoxRef} onChange={updateCheckBox} className="form-check-input" type="checkbox" id="includeClassRollCheckbox" checked={includeClassRoll} />
                <label className="form-check-label" htmlFor="includeClassRollCheckbox">Add class roll in the Top Sheet</label>
            </div>
        </div>
    )
}

export default FormClassRoll