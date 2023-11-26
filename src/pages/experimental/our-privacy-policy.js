"use client";

import Navbar from '@components/NavBar'
import PrivacyPolicyBody from '@components/ExperimentalComponents/PrivacyPolicyBody'
import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="robots" content="index" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Generate CA2 assignment top sheets quickly for FIEM with our Top Sheet Generator. Create professional-looking front pages in just 10 seconds. Absoulately Free !" />
                <meta name="keywords" content="Top Sheet Generator, CA2 assignment front page, FIEM assignment, easy assignment generator, FIEM Top Sheet Generator, MAKAUT CA2 Top Sheet Generator, CA2 Assignmet Top Sheet" />

                <title>Privacy Policy - Top Sheet Generator</title>
            </Head>

            <Navbar />

            <PrivacyPolicyBody />


        </>
    )
}
