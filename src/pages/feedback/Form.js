import React, { useRef, useState } from 'react'
import { API } from '../../../public/data/api'
import getLocalStorageData from '../../../utility/localstorage'
import getUserAgentDetails from '../../../utility/userAgent'
import { toast } from 'react-toastify'

const Form = () => {
    const typeOfResponseRef = useRef(null)

    const [data, setData] = useState({ name: "", typeOfResponse: "email", responseAddress: "", message: "" })
    const [responseInput, setResponseInput] = useState({ label: "Your Email Address", inputType: "email" })
    const [isLoading, setIsLoading] = useState(false)

    const submitForm = (e) => {
        e.preventDefault();
        setIsLoading(true);

        let lastServerResponse = localStorage.getItem("lastServerResponse");
        let allGeneratedPDFData = getLocalStorageData("allPdfs", false);
        let userAgent = getUserAgentDetails();

        // Prepare parameters for fetch
        let primaryFormData = {
            action: 'feedback',
            name: data.name.trim(),
            typeOfResponse: data.typeOfResponse.trim(),
            responseValue: data.responseAddress.trim(),
            message: data.message.trim(),
            lastServerResponse: lastServerResponse ? lastServerResponse : "",
            allPdfs: allGeneratedPDFData,
            deviceType: userAgent.deviceType,
            browserName: userAgent.browserName,
            osName: userAgent.osName,
        };

        // console.table(primaryFormData);

        let formData = new FormData();
        for (let key in primaryFormData)
            formData.append(key, primaryFormData[key]);

        let params = { method: "POST", body: formData };

        fetch(API.curentDeployment.url, params).then(res => res.text()).then((_rawData) => {

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
                else if (typeOfError === "internal-server-error")
                    toast.error("An Internal Server Error occured");
                setIsLoading(false);
                return;
            }

            if (data.status !== "success") {
                toast.error("An unexpected status got from server. Please try later")
                setIsLoading(false);
                return;
            }

            toast.success("Your feedback is submitted successfully. Thank You 😀")

            setIsLoading(false);
            resetForm();
        }).catch((error) => {
            setIsLoading(false);
            console.table(error);
            if (String(error.stack).includes("SyntaxError"))
                toast.error("Unexpected response from server");
            else
                toast.error("Error during fetching data");
        });
    }


    const resetForm = () => {
        setData(() => {
            return {
                name: "",
                typeOfResponse: "email",
                responseAddress: "",
                message: "",
            }
        })
    }


    const onChange = (e) => {
        setData((oldvalue) => {
            return {
                ...oldvalue,
                [e.target.name]: e.target.value
            }
        })

        changeInputType();
    }


    const changeInputType = () => {
        let typeOfResponse = typeOfResponseRef.current.value;
        console.log(typeOfResponse);

        if (typeOfResponse === "email") {
            setResponseInput(() => {
                return { label: "Your Email Address", inputType: "email" }
            })
        } else if (typeOfResponse === "phone") {
            setResponseInput(() => {
                return { label: "Your Phone Number", inputType: "tel" }
            })
        } else if (typeOfResponse === "physically") {
            setResponseInput(() => {
                return { label: "Your Class Roll [Example. 22-CSE-068]", inputType: "text" }
            })
        }
    }

    return (
        <form onSubmit={submitForm}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Your Name</label>
                <input onChange={onChange} value={data.name} name='name' type='text' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required={true} />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">How to contact you back</label>
                <select onChange={onChange} value={data.typeOfResponse} name='typeOfResponse' ref={typeOfResponseRef} className="form-select mb-3" aria-label=".form-select-lg example" required={true}>
                    <option value="email">Email</option>
                    <option value="phone">Phone (SMS/WhatsApp)</option>
                    <option value="physically">Physically (In College Premises)</option>
                </select>
                <div id="emailHelp" className="form-text">We'll never share your contact details with anyone else.</div>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">{responseInput.label}</label>
                <input onChange={onChange} value={data.responseAddress} name='responseAddress' type={responseInput.inputType} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required={true} />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Message</label>
                <textarea onChange={onChange} value={data.message} name='message' className="form-control" id="exampleFormControlTextarea1" rows="3" required={true}></textarea>
            </div>

            {/* <!-- Submit Button --> */}
            <div className="my-3 text-center">
                {
                    (isLoading == false) ?
                        <button id="submitBtn" type="submit" className="btn btn-lg btn-outline-dark">SUBMIT FEEDBACK</button>
                        :
                        <button className="btn btn-lg btn-outline-dark" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            &nbsp;
                            Loading...
                        </button>
                }
            </div>
        </form>
    )
}

export default Form