import React, { useEffect, useState } from 'react'
import AllPdfs from './AllPdfs';
import Link from 'next/link';
import getLocalStorageData from '../../utility/localstorage';

const Body = () => {
    const [allPdFs, setAllPdFs] = useState([])

    useEffect(() => {
        if (allPdFs.length != 0) return;
        let allPdfsArray = getLocalStorageData("allPdfs");
        allPdfsArray.reverse();
        setAllPdFs(() => allPdfsArray);
    }, []);


    return (
        <div className='container my-2'>
            {
                (allPdFs.length > 0) ?
                    <>
                        <h1 className='text-center my-3 fs-2'>All Your Top Sheets</h1>
                        <AllPdfs allPdfs={allPdFs} />
                    </>
                    :
                    <div className='text-center'>
                        <h3 >You don't have any generated PDF</h3>
                        <p>Generate a Top Sheet at &nbsp;
                            <Link href='/' className=''>home page</Link>
                            &nbsp; to see it here
                        </p>
                    </div>
            }
        </div > // container end
    )
}

export default Body