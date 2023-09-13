'use client';

import React, { useState } from 'react'
import Link from 'next/link';
import Footer from '../Footer'
import SubmitForm from './SubmitForm'
import LinkToAllPdfs from '../FormPages/LinkToAllPdfs';

const Body = () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <div className='notice'>
                <Link href="/pdftools/pdf-merger" className="alert alert-success alert-dismissible fw-bold fade show p-1 mt-1 mb-0 d-block text-center text-decoration-none" role="alert">
                    🎉 CLICK HERE TO MERGE UNLIMITED PDFs WITH OUR PDF MERGER 🤩
                </Link>
            </div>

            <div className="container my-3">
                <h3 className="text-center mb-3 main-heading">Enter below details to generate your top sheet for CA2 exam</h3>

                <SubmitForm isLoading={isLoading} setIsLoading={setIsLoading} />
                <LinkToAllPdfs isLoading={isLoading} />
                <Footer />
            </div>
        </>
    )
}

export default Body