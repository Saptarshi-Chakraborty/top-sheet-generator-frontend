import React from 'react'

const Form = () => {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">How to contact you back</label>
                <select className="form-select mb-3" aria-label=".form-select-lg example">
                    <option value="1">Email</option>
                    <option value="2">Phone (SMS/WhatsApp)</option>
                    <option value="3">Physically (In College Premises)</option>
                </select>
                <div id="emailHelp" className="form-text">We'll never share your contact details with anyone else.</div>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Your Email Address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <div className="my-3 text-center">
                <button id="submitBtn" type="submit" className="btn btn-lg btn-outline-dark">SUBMIT</button>
            </div>
        </form>
    )
}

export default Form