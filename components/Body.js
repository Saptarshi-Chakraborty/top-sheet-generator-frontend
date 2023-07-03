'use client';

import React, { useState } from 'react'
import Footer from './Footer'
import SubmitForm from './SubmitForm'
import LinkToAllPdfs from './LinkToAllPdfs';

const Body = () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="container my-3">
            <h3 className="text-decoration-underline mb-0">Enter below details to generate your top sheet for CA2 exam (1st Year)</h3>
            <small className="text-muted text-decoration-none mb-2">*(No information will be stored on the server)</small>

            <SubmitForm isLoading={isLoading} setIsLoading={setIsLoading} />
            <LinkToAllPdfs isLoading={isLoading} />
            <Footer />
        </div>
    )
}

export default Body