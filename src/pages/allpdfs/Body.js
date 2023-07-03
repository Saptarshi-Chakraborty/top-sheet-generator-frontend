import React, { useEffect, useState } from 'react'
import AllPdfs from './AllPdfs';
import Link from 'next/link';
import getLocalStorageData from '../../../utility/localstorage';

const Body = () => {
    const [allPdFs, setAllPdFs] = useState([])

    useEffect(() => {
        return () => {
            let allPdfsArray = getLocalStorageData("allPdfs");
            console.log(allPdfsArray)
            setAllPdFs(() => allPdfsArray);
        }
    }, []);

    
    return (
        <div className='container my-2'>
            <h1 className='text-center my-3 fs-2'>All Your Top Sheets</h1>
            {
                (allPdFs.length > 0) ?
                    <AllPdfs allPdfs={allPdFs} />
                    :
                    <div className='text-center'>
                        <h3 >You haven't any generated PDF</h3>
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