import React from 'react'
import {useParams} from 'react-router-dom'

export default function User() {
    const {userid} = useParams()

    return (
        <>
            <div className='text-center mx-auto max-w-md bg-gray-700 text-white text-3xl p-3'>User:{userid}</div>
        </>
    )
}
