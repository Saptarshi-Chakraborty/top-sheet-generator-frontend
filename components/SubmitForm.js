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
import { API } from '../data/api';
import DownloadModal from './DownloadModal';

const SubmitForm = () => {
    'use client';

    // State Variables
    const [studentName, setStudentName] = useState("");
    const [makautRoll, setMakautRoll] = useState("");
    const [classRoll, setClassRoll] = useState("22-CSE-");
    const [includeClassRoll, setIncludeClassRoll] = useState(false)
    const [reportTitle, setReportTitle] = useState("");
    const [subject, setSubject] = useState("");
    const [semester, setSemester] = useState("");
    const [filename, setFilename] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [modalData, setModalData] = useState({ pdfName: "", downloadUrl: "" })



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
        setIsLoading(true);
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

        let subjectArray = subject.trim().split(",");

        // Prepare parameters for fetch
        let primaryFormData = {
            action: 'newPDF',
            name: studentName.trim(),
            makautRoll: makautRoll.trim(),
            classRoll: classRoll.trim().toUpperCase(),
            subjectName: subjectArray[0].trim(),
            subjectCode: subjectArray[1].trim(),
            semester: semester.trim(),
            includeClassRoll: "true",
            reportTitle: reportTitle.trim().toUpperCase(),
            customFileName: (filename === '' ? "" : filename)
        };
        console.table(primaryFormData);
        setIsLoading(false);
        return;
        let formData = new FormData();
        for (let key in primaryFormData)
            formData.append(key, primaryFormData[key]);

        let params = { method: "POST", body: formData };

        fetch(API.curentDeployment.url, params).then(res => res.text()).then((_rawData) => {
            // console.log(_rawData);
            const data = JSON.parse(_rawData);
            console.log(data)

            // Handle error status got from server
            if (data.status === "error") {
                console.log("error happened");
                let typeOfError = data.type;
                if (typeOfError === "wrong-request")
                    toast.error("A wrong request has been sent to server");
                else if (typeOfError === "invalid-parameter")
                    toast.error("Request with wrong parameter value was sent to server");
                setIsLoading(false);
                return;
            }

            if (data.status !== "success") {
                toast.error("An unexpected status got from server")
                setIsLoading(false);
                return;
            }

            const pdfFileName = data.pdfFileName;
            const previewUrl = data.previewUrl;
            const downloadUrl = data.downloadUrl;

            window.location.replace(downloadUrl); // auto download the pdf
            setModalData(() => { return { pdfName: pdfFileName, downloadUrl: downloadUrl } })
            setIsLoading(false);
            addToLocalStorage(pdfFileName, previewUrl, downloadUrl)

        }).catch((error) => {
            setIsLoading(false);
            console.table(error);
            if (String(error.stack).includes("SyntaxError"))
                toast.error("Unexpected response from server");
            else
                toast.error("Error during fetching data");
        });
    }

    const addToLocalStorage = (pdfFileName, previewUrl, downloadUrl) => {
        let jsonString = localStorage.getItem("allPdfs");
        let allPdfs = [];
        if (jsonString !== null) {
            allPdfs = JSON.parse(jsonString);
        }

        let subjectArray = subject.split(",");
        allPdfs.push({
            studentName,
            makautRoll,
            classRoll,
            reportTitle,
            subjectName: subjectArray[0],
            subjectCode: subjectArray[1],
            semester,
            pdfName: pdfFileName,
            previewUrl,
            downloadUrl,
            timeStamp: new Date().getTime()
        });

        jsonString = JSON.stringify(allPdfs);
        localStorage.setItem("allPdfs", jsonString);
    }


    return (<>
        {/* Download Modal */}
        <DownloadModal pdfName={modalData.pdfName} downloadUrl={modalData.downloadUrl} setModalData={setModalData} />

        {/* Submit Form */}
        <form id="form-ca2" onSubmit={submitForm}>
            {/* <!-- Semester Name --> */}
            <FormSemester semester={semester} setSemester={setSemester} />

            {/* <!-- Student Name --> */}
            <FormName name={studentName} setName={setStudentName} />

            {/* <!-- MAKAUT Roll --> */}
            <FormMakautRoll makautRoll={makautRoll} setMakautRoll={setMakautRoll} />

            {/* <!-- Class roll number --> */}
            <FormClassRoll classRoll={classRoll} setClassRoll={setClassRoll} semester={semester} includeClassRoll={includeClassRoll} setIncludeClassRoll={setIncludeClassRoll} />

            {/* <!-- Report Title --> */}
            <FormReportTitle reportTitle={reportTitle} setReportTitle={setReportTitle} />

            {/* <!-- Subject Name with Subject Code --> */}
            <FormSubject subject={subject} setSubject={setSubject} semester={semester} classRoll={classRoll} />

            {/* <!-- Optional File name --> */}
            <FormOptionalFilename filename={filename} setFilename={setFilename} />

            <span className="text-danger">*(Please re-check every field before submit)</span>

            {/* <!-- Submit Button --> */}
            <div className="my-3 text-center">
                {
                    (isLoading == false) ?
                        <button id="submitBtn" type="submit" className="btn btn-lg btn-outline-dark" onClick={submitForm}>SUBMIT</button>
                        :
                        <button className="btn btn-lg btn-outline-dark" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            &nbsp;
                            Loading...
                        </button>
                }
            </div>

        </form>
    </>)
}

export default SubmitForm