import React from 'react'
import { useState ,useEffect } from 'react'
import{useLoaderData} from 'react-router-dom'

export default function Github() {
    const data = useLoaderData()
// const [data , setData] = useState([])
// useEffect(()=>{
//     fetch("https://api.github.com/users/UzairAhmed87")
//     .then(res => res.json())
//     .then(data =>{
        
//         setData(data)
//     })
// })

    return (
        <div className='bg-gray-700 text-white text-3xl p-4 m-4 text-center'>
            Github Followers: {data.followers}
            <img src='https://avatars.githubusercontent.com/u/157643346?v=4' alt="Git-Picture" width={300}/>
        </div>
    )
}
export const githubInfoLoader = async() =>{
    const response = await fetch("https://api.github.com/users/UzairAhmed87")
    return response
} 