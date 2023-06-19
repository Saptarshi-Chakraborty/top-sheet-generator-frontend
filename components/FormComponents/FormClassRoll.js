import React, { useRef, useState } from 'react'

const FormClassRoll = ({ classRoll, setClassRoll }) => {
    const classRoll1 = useRef(null);
    const classRoll2 = useRef(null);
    const classRoll3 = useRef(null);

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
                <select ref={classRoll2} onChange={updateRoll} className="form-select pe-0" aria-label="Default select example" defaultValue={"CSE"}>
                    <option value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                    <option value="IT">IT</option>
                    <option value="ME">ME</option>
                    <option value="CSDS">CSDS</option>
                    <option value="EE">EE</option>
                    <option value="AEIE">AEIE</option>
                </select>
                <span className="input-group-text fw-bold"> - </span>
                <input ref={classRoll3} onChange={updateRoll} type="number" id='cRoll3' className="form-control flex-grow-1"  placeholder="Roll" required={true} />
            </div>
        </div>
    )
}

export default FormClassRoll