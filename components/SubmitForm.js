'use client';

import React, { useEffect, useRef, useState } from 'react'
import FormName from './FormComponents/FormName';
import FormMakautRoll from './FormComponents/FormMakautRoll';
import FormClassRoll from './FormComponents/FormClassRoll';
import FormReportTitle from './FormComponents/FormReportTitle';
import FormOptionalFilename from './FormComponents/FormOptionalFileName';
import FormSemester from './FormComponents/FormSemester';
import FormSubject from './FormComponents/FormSubject';
import { toast } from 'react-toastify';

const SubmitForm = () => {
    'use client';

    // Ref variables
    const isLoading = useRef(false);

    // State Variables
    const [studentName, setStudentName] = useState("");
    const [makautRoll, setMakautRoll] = useState("");
    const [classRoll, setClassRoll] = useState("22-CSE-");
    const [reportTitle, setReportTitle] = useState("");
    const [subject, setSubject] = useState("");
    const [semester, setSemester] = useState("2nd");
    const [filename, setFilename] = useState("");


    // Data variables
    // Version 5 on Mar 8, 10:30 PM
    // const SUBMIT_API = "https://script.google.com/macros/s/AKfycbwbOMO3PuiOpQCKra95q3cHLJKp3R1AxuUsQTaCnOJjOTgtk4Vj32i-HRB6ItYhW6kQKg/exec";
    const SUBMIT_API = "https://www.google.com";

    useEffect(() => {
        return () => {
            setStudentName(() => {
                return "Jhon HELLO"
            });

            setMakautRoll(() => {
                return "1234567890"
            })

            setClassRoll(() => {
                return "22-CSE-000";
            })

            setReportTitle(() => {
                return "This is a Demo Title"
            })

            if (isLoading.current == true)
                isLoading.current = false;
        }
    }, [])


    function submitForm(e) {
        e.preventDefault();
        console.log("Submitting Form...");
        // toast.error("Hello Dosto",{
        //     autoClose: 4000
        // });

        // check custom filename conditions
        if (filename !== '' && String(filename).length <= 3) {
            toast.error("Please give a valid name");
            return;
        } else if (filename === "null") {
            toast.error("Filename can not be 'null'");
            return;
        }

        // Prepare parameters for fetch
        let primaryFormData = {
            sName: studentName.trim(),
            mRoll: makautRoll.trim(),
            sRoll: classRoll.trim(),
            title: reportTitle.trim(),
            subject: subject.trim(),
            sem: semester.trim(),
            cName: (filename === '' ? "null" : filename)
        };
        console.table(primaryFormData);

        let formData = new FormData();
        for (let key in primaryFormData)
            formData.append(key, primaryFormData[key]);

        let params = { method: "POST", body: formData };

        fetch("./", params).then(res => res.text()).then((_rawData) => {

            console.log(_rawData);
            toast.success("Got data Successfully");

            
        }).catch((error) => {
            toast.error("Error during fetching data");
        });

    }

    return (
        <form id="form-ca2" onSubmit={submitForm}>
            {/* <!-- Student Name --> */}
            <FormName name={studentName} setName={setStudentName} />

            {/* <!-- MAKAUT Roll --> */}
            <FormMakautRoll makautRoll={makautRoll} setMakautRoll={setMakautRoll} />

            {/* <!-- Class roll number --> */}
            <FormClassRoll classRoll={classRoll} setClassRoll={setClassRoll} />

            {/* <!-- Report Title --> */}
            <FormReportTitle reportTitle={reportTitle} setReportTitle={setReportTitle} />

            {/* <!-- Subject Name with Subject Code --> */}
            <FormSubject subject={subject} setSubject={setSubject} />

            {/* <!-- Semester Name --> */}
            <FormSemester semester={semester} setSemester={setSemester} />

            {/* <!-- Optional File name --> */}
            <FormOptionalFilename filename={filename} setFilename={setFilename} />

            <span className="text-danger">*(Please re-check every field before submit)</span>

            {/* <!-- Submit Button --> */}
            <div className="my-3 text-center">
                <button id="submitBtn" type="submit" className="btn btn-lg btn-outline-dark" onClick={submitForm} disabled={isLoading.current}>SUBMIT</button>
            </div>
        </form>
    )
}

export default SubmitForm