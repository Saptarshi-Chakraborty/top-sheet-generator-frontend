import React from 'react'

const OldClassRoll = ({id}) => {
    return (
        <div className="my-3">
            <label htmlFor="sRoll" className="form-label">Class Roll Number</label>
            <input type="text" className="form-control" id="sRoll" placeholder="eg. 22-CSE-012" required={true} />
        </div>
    )
}

export default OldClassRoll