import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { PDFDocument } from 'pdf-lib'
import ShowPdfs from './ShowPdfs'
import ActionButtonBox from './ActionButtonBox'

const Body = () => {

    const fileInputRef = useRef(null)
    const showContainerRef = useRef(null)

    const [allPdfs, setAllPdfs] = useState([])
    const [mergedPdfFile, setMergedPdfFile] = useState(null)
    const [customFileName, setCustomFileName] = useState("")



    async function copyPages(e) {
        let allSelectedFiles = await e.target.files;
        const numberOfFiles = allSelectedFiles.length;

        if (!allSelectedFiles) {
            toast.error("No File Choosen");
            return
        }


        const firstPdfFile = allSelectedFiles[0];
        const secondPdfFile = allSelectedFiles[1];

        // PDF Documets are ready, now start processing with pdf-lib

        // Create a new PDFDocument
        const mergedPdf = await PDFDocument.create();

        // These should be Uint8Arrays or ArrayBuffers
        // This data can be obtained in a number of different ways
        const firstDonorPdfBytes = await getAsByteArray(firstPdfFile);
        const secondDonorPdfBytes = await getAsByteArray(secondPdfFile);

        // Load a PDFDocument from each of the existing PDFs
        const pdf1 = await PDFDocument.load(firstDonorPdfBytes)
        const pdf2 = await PDFDocument.load(secondDonorPdfBytes)

        const copiedPagesA = await mergedPdf.copyPages(pdf1, pdf1.getPageIndices());
        copiedPagesA.forEach((page) => mergedPdf.addPage(page));

        const copiedPagesB = await mergedPdf.copyPages(pdf2, pdf2.getPageIndices());
        copiedPagesB.forEach((page) => mergedPdf.addPage(page));


        // Serialize the PDFDocument to bytes (a Uint8Array)
        const mergedPdfFile = await mergedPdf.save();


        download(mergedPdfFile, "pdf-lib_page_copying_example.pdf", "application/pdf");
    }

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

    async function mergePdfs(e) {
        const numberOfFiles = allPdfs.length;

        if (numberOfFiles <= 0) {
            toast.warn("Please select your files before merging", { autoClose: 4000 });
            return;
        }
        else if (numberOfFiles <= 1) {
            toast.error("Please select at least 2 pdf files to merge", { autoClose: 3000 });
            return;
        }

        // Create a new empty PDFDocument
        let mergedPdf = await PDFDocument.create();


        // copy each pdf into blank mergedPdf file
        for (let i = 0; i < numberOfFiles; i++) {
            let item = allPdfs[i]

            const byteArrayOfPdf = await getAsByteArray(item);

            // detect if each file is a pdf file before merging 
            if (item.type !== "application/pdf") {
                toast.error(`Not a PDF File : ${item.name}`)
                return;
            }

            const pdfFile = await PDFDocument.load(byteArrayOfPdf);

            // now copy pages to mergedPdf
            const copiedPages = await mergedPdf.copyPages(pdfFile, pdfFile.getPageIndices());

            copiedPages.forEach((page) => mergedPdf.addPage(page));
        }

        const tempFile = await mergedPdf.save()
        setMergedPdfFile(() => tempFile);
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
            <h3 className="text-center mb-3 main-heading">Select your pdf files below to merge in one pdf</h3>

            <div id="upload-box">

                <div className="mb-3">
                    <label htmlFor="fileInput" className="form-label">Click here to upload your PDF files</label>
                    <input ref={fileInputRef} onChange={handleChange} type="file" accept='application/pdf' className="form-control" id="fileInput" aria-describedby="emailHelp" multiple={true} />
                </div>


                {/* Action Buttons */}
                <ActionButtonBox allPdfs={allPdfs} mergedPdfFile={mergedPdfFile} mergePdfs={mergePdfs} handleDownload={handleDownload} resetAll={resetAll} fileName={customFileName} setFileName={setCustomFileName} />

            </div>

            <div id="show-pdf-box">
                {
                    (allPdfs.length === 0) ?
                        <h4 className='my-4'>No PDF File is selected</h4>
                        :
                        <ShowPdfs allPdfs={allPdfs} setAllPdfs={setAllPdfs} resetInputField={resetFileInput} />
                }
            </div>

        </div> // container end
    )
}

export default Body