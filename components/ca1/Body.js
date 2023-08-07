'use client';

import React, { useState } from 'react'
import Footer from '../Footer'
import SubmitForm from './SubmitForm'
import LinkToAllPdfs from '../FormPages/LinkToAllPdfs';

const Body = () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="container my-3">
            <h3 className="text-center mb-3 main-heading">CA1 Top Sheet Generator</h3>

            <SubmitForm isLoading={isLoading} setIsLoading={setIsLoading} />
            <LinkToAllPdfs isLoading={isLoading} />
            <Footer />
        </div>
    )
}

export default Body