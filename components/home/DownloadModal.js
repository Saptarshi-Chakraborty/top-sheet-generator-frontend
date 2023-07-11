import React, { useEffect, useRef, useState } from 'react'

const DownloadModal = ({ pdfName, downloadUrl, modalData, setModalData, isLoading }) => {
    const showModalButtonRef = useRef(null);

    const [disableButtons, setDisableButtons] = useState(true)

    useEffect(() => {
        console.log(`pdfName: (${pdfName})`)
        console.log(modalData);
        if (modalData.dataLoaded === false) {
            showModalButtonRef.current.click();
            setDisableButtons(() => true);
        } else if (modalData.dataLoaded === true)
            setDisableButtons(() => false);

    }, [modalData])

    useEffect(() => {
        return () => {
            afterModalClose();
        }
    }, []);


    const afterModalClose = () => {
        if (modalData.dataLoaded === true) {
            setModalData(() => { return { pdfName: "", downloadUrl: "", dataLoaded: false } })
            setDisableButtons(() => true);
        }
    }


    return (<>
        {/* // Modal trigger Button */}
        <button ref={showModalButtonRef} type="button" data-bs-toggle="modal" data-bs-target="#downloadModal" hidden={true}>Show Modal</button>

        {/* Modal Body */}
        <div className="modal fade" id="downloadModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        {
                            (modalData.dataLoaded === false) &&
                            <p className="modal-title fs-5" id="staticBackdropLabel">
                                <b>Generating PDF...</b>
                            </p>
                        }

                        {
                            (modalData.dataLoaded === true) &&
                            <p className="modal-title fs-5" id="staticBackdropLabel">
                                <b>Downloading Your PDF...</b>
                                <br />({pdfName}.pdf)
                            </p>
                        }


                        {
                            // Show close button only if data is loaded
                            (modalData.dataLoaded === true) &&
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" disabled={isLoading}></button>
                        }

                    </div>

                    <div className="modal-body">
                        <p className="text-center fw-bold fs-5">❤ Thank You for using this tool ❤</p>
                        {/* <p className="text-center fw-bold fs-5">❤ Thank You for using this tool 😀</p> */}
                        <p className="text-muted">As we use free server of Google, it takes 10-15 seconds to start downloading. Please wait for some time.</p>

                        <hr />
                        <p className="text-danger m-0">
                            *Note: No other data except your semester, subject and department is stored in our server.
                            <br />
                            Your PDF will automatically be deleted after 12 hour. Collect before it expires. Get all your generated pdfs from below All PDFs section.
                        </p>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" disabled={disableButtons}>Close</button>

                        {
                            (modalData.dataLoaded === false) &&
                            <a className="btn btn-success disabled" type="button" disabled={true}>
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                &nbsp;
                                Generating PDF...
                            </a>
                        }

                        {
                            (modalData.dataLoaded === true) &&
                            <a id="dAgainButton" target="_blank" type="button" href={downloadUrl} className="btn btn-success">Download again</a>
                        }
                    </div>
                </div>
            </div>
        </div>

    </>)
}

export default DownloadModal