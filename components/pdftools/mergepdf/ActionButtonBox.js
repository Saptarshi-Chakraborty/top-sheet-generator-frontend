import React from 'react'

const ActionButtonBox = ({ allPdfs, mergedPdfFile, mergePdfs, handleDownload, resetAll }) => {
    return (
        <div className="mb-3 d-flex flex-row justify-content-start align-items-center gap-3">
            {
                (mergedPdfFile !== null) &&
                <button className="btn btn-success" onClick={handleDownload}>Download Merged PDF</button>
            }

            {
                (mergedPdfFile === null && allPdfs.length > 1) &&
                <button className="btn btn-primary" onClick={mergePdfs}>Merge PDFs</button>
            }

            {
                (allPdfs.length > 1) &&
                <button onClick={resetAll} className="btn btn-danger">Reset</button>
            }
        </div>
    )
}

export default ActionButtonBox