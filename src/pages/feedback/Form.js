import React from 'react'

const Form = () => {
    return (
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Your Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">How to contact you back</label>
                <select class="form-select mb-3" aria-label=".form-select-lg example">
                    <option value="1">Email</option>
                    <option value="2">Phone (SMS/WhatsApp)</option>
                    <option value="3">Physically (In College Premises)</option>
                </select>
                <div id="emailHelp" class="form-text">We'll never share your contact details with anyone else.</div>
            </div>

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Your Email Address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>

            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <div className="my-3 text-center">
                <button id="submitBtn" type="submit" className="btn btn-lg btn-outline-dark">SUBMIT</button>
            </div>
        </form>
    )
}

export default Form