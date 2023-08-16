import React from 'react'
import { toast } from 'react-toastify';



const ShowPdfs = ({ allPdfs, setAllPdfs, resetInputField }) => {

    function deletePdf(name) {
        console.log("Deleting Pdf File : ");
        console.log(name);

        if (confirm(`Are you sure you want to remove ( ${name} ) from merging ?`) === false) return;

        let filteredPdf = allPdfs.filter(item => item.name !== name);
        setAllPdfs(() => filteredPdf);

        if (filteredPdf.length <= 0) {
            resetInputField();
        }
    }

    function moveElementBy(index, changeBy = 0) {

        let tempArray = allPdfs;
        const fromIndex = index, toIndex = fromIndex + changeBy;

        // console.log(`fromIndex: ${fromIndex}  ->  toIndex: ${toIndex}`)
        if (fromIndex >= 0 && fromIndex < tempArray.length &&
            toIndex >= 0 && toIndex < tempArray.length) {

            const elementToMove = tempArray.splice(fromIndex, 1)[0]; // Remove the element

            if (toIndex === 0) {
                tempArray.unshift(elementToMove); // Insert at the beginning
            } else {
                tempArray.splice(toIndex, 0, elementToMove); // Insert at the new index
            }

            console.log(tempArray);
            setAllPdfs(() => { return [...tempArray] });

        } else {
            return;
        }
    }

    return (
        <div className='my-3 py-2'>
            <h4 className='mb-0'>Your PDF Files</h4>
            <p className='text-mute mb-3'>( You can drag and rearrange your pdfs)</p>

            <div className="card-container d-flex flex-column gap-2">
                {
                    allPdfs.map((item, index) => {
                        return (
                            <div key={item.name} id={`item-${index}`} data-index={index} className="card p-2 d-flex align-items-center flex-row justify-content-between">


                                <span data-index={index} style={{ flex: 2 }}>
                                    <b>{index + 1}.</b> {item.name}
                                </span>


                                <div>
                                    <img onClick={() => moveElementBy(index, -1)} src="/img/up-arrow.svg" alt="Up" style={{ cursor: "pointer" }} />
                                    <img onClick={() => moveElementBy(index, 1)} src="/img/down-arrow.svg" alt="Down" style={{ cursor: "pointer" }} />
                                </div>

                                <img onClick={() => deletePdf(item.name)} src="/img/delete.svg" alt="delete" style={{ cursor: "pointer" }} />

                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default ShowPdfs