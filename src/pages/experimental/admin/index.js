import React from 'react'
import { useRouter } from 'next/router'
import { useLayoutEffect } from 'react';

const index = () => {
    const router = useRouter();

    useLayoutEffect(() => {
        router.replace('/experimental/admin/login')
    
        return () => {
            // cleanup
        }
    }, [])

    return (
        <div>404 Page Not Found</div>
    )
}

export default index