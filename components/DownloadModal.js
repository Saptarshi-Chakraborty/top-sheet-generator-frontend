import React from 'react'

const DownloadModal = () => {
    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Downloading PDF...</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className="text-center fw-bold fs-5">❤ Thank You for using this tool 😀</p>
                        <small className="text-muted">As we use free server of Google, it takes 10-15 seconds to start downloading<br />Please be patient.</small>

                        <hr />
                        <p className="text-danger m-0">**Note: We don't store any of your information in our server.
                            <br />
                            Your PDF will automatically be deleted after 1 hour. Please collect it before expire.
                        </p>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <a id="dAgainButton" target="_blank" type="button" href="#" className="btn btn-success">Download again</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DownloadModal