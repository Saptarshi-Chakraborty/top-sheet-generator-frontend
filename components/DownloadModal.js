import React, { useEffect, useRef } from 'react'

const DownloadModal = ({ pdfName, downloadUrl, setModalData }) => {
    const showModalButtonRef = useRef(null);

    useEffect(() => {
        if ((pdfName !== "") && (downloadUrl !== "")) {
            showModalButtonRef.current.click();
        }
    }, [pdfName, downloadUrl])




    return (<>
        {/* // Modal trigger Button */}
        <button ref={showModalButtonRef} type="button" data-bs-toggle="modal" data-bs-target="#downloadModal" hidden={true}>Show Modal</button>

        {/* Modal Body */}
        <div className="modal fade" id="downloadModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <p className="modal-title fs-5" id="staticBackdropLabel">
                            <b>Downloading Your PDF...</b>
                            <br />({pdfName}.pdf)
                        </p>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className="text-center fw-bold fs-5">❤ Thank You for using this tool ❤</p>
                        {/* <p className="text-center fw-bold fs-5">❤ Thank You for using this tool 😀</p> */}
                        <p className="text-muted">As we use free server of Google, it takes 10-15 seconds to start downloading. Please wait for some time.</p>

                        <hr />
                        <p className="text-danger m-0">
                            *Note: No other data except your semester, subject and department is stored in our server.
                            <br />
                            Your PDF will automatically be deleted after 12 hour. Collect it before expire. Get all your generated pdfs from below All PDFs section.
                        </p>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <a id="dAgainButton" target="_blank" type="button" href={downloadUrl} className="btn btn-success">Download again</a>
                    </div>
                </div>
            </div>
        </div>

    </>)
}

export default DownloadModal