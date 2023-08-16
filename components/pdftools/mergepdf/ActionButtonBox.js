import React from 'react'

const ActionButtonBox = ({ allPdfs, mergedPdfFile, mergePdfs, handleDownload, resetAll, fileName, setFileName }) => {

    function handleChange(e) {
        setFileName(e.target.value)
    }

    return (
        <>
            {
                (mergedPdfFile !== null) &&
                <div class="mb-3">
                    <label for="customFileName" class="form-label">Custom File Name (optional)</label>
                    <input type="text" autoComplete='off' class="form-control" value={fileName} onChange={handleChange} id="customFileName" aria-describedby="basic-addon3 basic-addon4" />
                </div>
            }

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
        </>
    )
}

export default ActionButtonBox