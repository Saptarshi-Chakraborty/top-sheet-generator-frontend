'use client';

import React, { useEffect, useState } from 'react'
import FormName from './FormComponents/FormName';
import FormMakautRoll from './FormComponents/FormMakautRoll';
import FormClassRoll from './FormComponents/FormClassRoll';
import FormReportTitle from './FormComponents/FormReportTitle';
import FormOptionalFilename from './FormComponents/FormOptionalFileName';
import FormSemester from './FormComponents/FormSemester';
import FormSubject from './FormComponents/FormSubject';
import { toast } from 'react-toastify';
import { API } from '../../public/data/api';
import DownloadModal from './DownloadModal';
import getUserAgentDetails from '../../utility/userAgent';

const SubmitForm = ({ isLoading, setIsLoading }) => {
    'use client';

    // State Variables
    const [studentName, setStudentName] = useState("");
    const [makautRoll, setMakautRoll] = useState("");
    const [classRoll, setClassRoll] = useState("22-CSE-");
    const [includeClassRoll, setIncludeClassRoll] = useState(true)
    const [reportTitle, setReportTitle] = useState("");
    const [subject, setSubject] = useState("");
    const [semester, setSemester] = useState("");
    const [filename, setFilename] = useState("");
    const [modalData, setModalData] = useState({ pdfName: "", downloadUrl: "", dataLoaded: null })
    const [allSubjects, setAllSubjects] = useState(null)


    useEffect(() => {
        getSubjectData();
        return () => {
            // getSubjectData();
            if (isLoading.current == true)
                isLoading.current = false;
        }
    }, [])


    function submitForm(e) {
        e.preventDefault();
        setIsLoading(true);
        console.log("Submitting Form...");
        setModalData((oldvalues) => { return { ...oldvalues, dataLoaded: false } });

        // check custom filename conditions
        if (filename !== '' && String(filename)?.length <= 3) {
            toast.error("Please give a valid name");
            return;
        } else if (filename === "null") {
            toast.error("Filename can not be 'null'");
            return;
        }

        let subjectArray = subject?.trim().split(",");
        let userAgent = getUserAgentDetails();

        // Prepare parameters for fetch
        let primaryFormData = {
            action: 'newPDF',
            name: studentName?.trim(),
            makautRoll: makautRoll?.trim(),
            classRoll: classRoll?.trim().toUpperCase(),
            subjectName: subjectArray[0]?.trim(),
            subjectCode: subjectArray[1]?.trim(),
            semester: semester?.trim(),
            includeClassRoll: `${includeClassRoll}`,
            reportTitle: reportTitle?.trim().toUpperCase(),
            customFileName: (filename === '' ? "" : filename),
            deviceType: userAgent?.deviceType,
            browserName: userAgent?.browserName,
            osName: userAgent?.osName,
        };
        console.table(primaryFormData);

        let formData = new FormData();
        for (let key in primaryFormData)
            formData.append(key, primaryFormData[key]);

        let params = { method: "POST", body: formData };

        fetch(API.curentDeployment.url, params).then(res => res.text()).then((_rawData) => {
            // console.log(_rawData);
            const data = JSON.parse(_rawData);
            // console.log(data)

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
            const pdfId = data.pdfId;

            window.location.replace(downloadUrl); // auto download the pdf
            setModalData(() => { return { pdfName: pdfFileName, downloadUrl: downloadUrl, dataLoaded: true } })
            setIsLoading(false);
            addToLocalStorage(data.params, downloadUrl, previewUrl, pdfFileName, pdfId);
            resetForm();

            localStorage.setItem("lastServerResponse", _rawData);// save lastServerResponse for feedback purpose

        }).catch((error) => {
            setIsLoading(false);
            console.table(error);
            if (String(error.stack).includes("SyntaxError"))
                toast.error("Unexpected response from server");
            else
                toast.error("Error during fetching data");
        });
    }

    function resetForm() {
        setSemester(semester);
        setStudentName("");
        setMakautRoll("");

        //set previous settings for class roll
        let classRollArray = classRoll.split("-");
        setClassRoll(`${classRollArray[0]}-${classRollArray[1]}-`);

        setIncludeClassRoll(true);
        setReportTitle("");
        setSubject("");
        setFilename("");
    }

    const addToLocalStorage = (studentDetails, downloadUrl, previewUrl, pdfName, pdfId) => {
        let jsonString = localStorage.getItem("allPdfs");
        let allPdfs = [];
        if (jsonString !== null) {
            allPdfs = JSON.parse(jsonString);
        }

        let department = studentDetails.classRoll.split("-")[1];


        allPdfs.push({
            studentName: studentDetails.name.toUpperCase(),
            makautRoll: studentDetails.makautRoll,
            classRoll: studentDetails.classRoll,
            reportTitle: studentDetails.reportTitle,
            subjectName: studentDetails.subjectName,
            subjectCode: studentDetails.subjectCode,
            semester: studentDetails.semester,
            department,
            pdfId,
            pdfName,
            previewUrl,
            downloadUrl,
            timeStamp: new Date().getTime()
        });

        jsonString = JSON.stringify(allPdfs);
        localStorage.setItem("allPdfs", jsonString);
    }

    const getSubjectData = () => {
        if (allSubjects != null) return null;
        setIsLoading(() => true);
        fetch("./data/subjects.json").then(res => res.text()).then((_rawData) => {
            let data = JSON.parse(_rawData);
            // console.log(data);
            setAllSubjects(() => { return data.subjects });
            setIsLoading(() => false);
        })
    }


    return (<>
        {/* Download Modal */}
        <DownloadModal pdfName={modalData.pdfName} downloadUrl={modalData.downloadUrl} modalData={modalData} setModalData={setModalData} isLoading={isLoading} />

        {/* Submit Form */}
        <form id="form-ca2" onSubmit={submitForm}>
            {/* <!-- Semester Name --> */}
            <FormSemester semester={semester} setSemester={setSemester} allSubjects={allSubjects} />

            {/* <!-- Student Name --> */}
            <FormName name={studentName} setName={setStudentName} />

            {/* <!-- MAKAUT Roll --> */}
            <FormMakautRoll makautRoll={makautRoll} setMakautRoll={setMakautRoll} />

            {/* <!-- Class roll number --> */}
            <FormClassRoll classRoll={classRoll} setClassRoll={setClassRoll} semester={semester} includeClassRoll={includeClassRoll} setIncludeClassRoll={setIncludeClassRoll} allSubjects={allSubjects} />

            {/* <!-- Report Title --> */}
            <FormReportTitle reportTitle={reportTitle} setReportTitle={setReportTitle} />

            {/* <!-- Subject Name with Subject Code --> */}
            <FormSubject subject={subject} setSubject={setSubject} semester={semester} classRoll={classRoll} _allSubjects={allSubjects} />

            {/* <!-- Optional File name --> */}
            <FormOptionalFilename filename={filename} setFilename={setFilename} />

            <span className="text-danger">*(Please recheck every field before submit)</span>

            {/* <!-- Submit Button --> */}
            <div className="my-3 text-center">
                {
                    (isLoading == false) ?
                        <button id="submitBtn" type="submit" className="btn btn-lg btn-outline-dark">SUBMIT</button>
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