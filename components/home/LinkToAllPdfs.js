import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import getLocalStorageData from '../../utility/localstorage';

const LinkToAllPdfs = ({ isLoading }) => {
    const [allPdfs, setAllPdfs] = useState([])

    useEffect(() => {
        setAllPdfs(() => getLocalStorageData("allPdfs"))
    }, [isLoading])

    return (<>
        {
            (allPdfs.length > 0) &&
            <div className='text-center'>
                <Link className='link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fs-4 ' href='/allpdfs'>
                    See Your Previous Sheets ({allPdfs.length})
                </Link>
            </div>
        }
    </>)
}

export default LinkToAllPdfs