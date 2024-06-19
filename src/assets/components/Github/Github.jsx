import React from 'react'

import{useLoaderData} from 'react-router-dom'

export default function Github() {
    const data = useLoaderData()
    console.log(data);
// const [data , setData] = useState([])
// useEffect(()=>{
//     fetch("https://api.github.com/users/UzairAhmed87")
//     .then(res => res.json())
//     .then(data =>{
        
//         setData(data)
//     })
// })

    return (
        <div className='bg-gray-700 text-white text-3xl p-4 m-4 text-center flex items-center justify-center gap-5'>
             <img  src='https://avatars.githubusercontent.com/u/157643346?v=4' alt="Git-Picture" width={300}/>
             Username : {data.login}
            <br /> 
            Github Followers: {data.followers}
            
        </div>
    )
}
export const githubInfoLoader = async() =>{
    const response = await fetch("https://api.github.com/users/UzairAhmed87")
    return response
} 