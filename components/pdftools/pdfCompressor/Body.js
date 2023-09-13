import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { PDFDocument } from 'pdf-lib'

const Body = () => {

    const fileInputRef = useRef(null)

    const [allPdfs, setAllPdfs] = useState([])
    const [mergedPdfFile, setMergedPdfFile] = useState(null)
    const [customFileName, setCustomFileName] = useState("")




    function download(data, filename, contentType = "application/pdf") {
        const blob = new Blob([data], { type: contentType });

        if (navigator.msSaveBlob) { // For Internet Explorer
            navigator.msSaveBlob(blob, filename);
        } else {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = filename;

            // Append the link to the body and trigger the download
            document.body.appendChild(link);
            link.click();

            // Clean up resources
            document.body.removeChild(link);
            URL.revokeObjectURL(link.href);
        }
    }

    async function getAsByteArray(file) {
        return new Uint8Array(await readFile(file))
    }

    function readFile(file) {
        return new Promise((resolve, reject) => {
            // Create file reader
            let reader = new FileReader()
            // Register event listeners
            reader.addEventListener("loadend", e => resolve(e.target.result))
            reader.addEventListener("error", reject)
            // Read file
            reader.readAsArrayBuffer(file)
        })
    }

    function resetFileInput() {
        // reset the input field after use
        fileInputRef.current.value = "";

        setCustomFileName("");
        setAllPdfs(() => []);
    }

    function resetAll() {
        setMergedPdfFile(null)
        resetFileInput();
    }

    function handleChange(e) {
        if (mergedPdfFile !== null) setMergedPdfFile(null)

        const fileList = e.target.files;

        if (fileList.length <= 1) {
            toast.error("Please select at least 2 pdf files to merge", { autoClose: 3000 });
            return;
        }

        let allPdfs = new Array()
        for (let i = 0; i < fileList.length; i++) {
            allPdfs.push(fileList[i]);
        }

        setAllPdfs(() => allPdfs);
    }

    function handleDownload() {
        if (mergedPdfFile === null) return;
        const fileName = `merged - ${new Date().getTime()}`

        if (customFileName.length <= 3)
            download(mergedPdfFile, fileName);
        else
            download(mergedPdfFile, customFileName);

        setTimeout(() => {
            resetFileInput();
        }, 2500);
    }


    return (
        <div className="container my-3">
            {/* <h3 className="text-center mb-3 main-heading">Compress your pdf files in smaller size</h3>

            <div id="upload-box">

                <div className="mb-3">
                    <label htmlFor="fileInput" className="form-label">Click here to upload your PDF files</label>
                    <input ref={fileInputRef} onChange={handleChange} type="file" accept='application/pdf' className="form-control" id="fileInput" aria-describedby="emailHelp" multiple={true} />
                </div>


            </div>

            <div id="show-pdf-box">

            </div> */}

            <h2 className='text-center'>Comming Soon...</h2>

        </div> // container end
    )
}


export default Body