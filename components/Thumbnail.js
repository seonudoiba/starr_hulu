import React from 'react'
import Image from 'next/image'
import { SearchIcon, StarIcon } from '@heroicons/react/solid'

export const Thumbnail = ({result}) => {
    let base = 'https://image.tmdb.org/t/p/original/'
    let rating = result.vote_average
    let rate = Math. round(rating/2)
    

  return (
    
    <div  className=" group ">
        <div className="group-hover:scale-105  transition transform ">
        <Image 
        height= {220}
        width= {320} 
        layout="responsive"
        src={`${base}${result.backdrop_path}`} />
        </div>
         <div>
            <p className="truncate px-1 py-1 text-sm cursor-pointer">{result.overview}</p>
            <p className="truncate  px-1 py-1 font-bold cursor-pointer">{result.title}</p>
        </div>
        <div  className="flex px-1 items-center opacity-0 group-hover:opacity-100">
            <p className="font-bold text-sm">
                Rating: {rating}
            </p>
            <div className="flex px-1" >
                {[...Array(rate)].map(rate => <StarIcon className="rate fill-yellow-400 w-4 h-4"/>)}
            </div>
            {/* <p className=" pl-2 font-bold text-sm">{result.release_date}</p> */}
        </div>
        
        
    </div>
    
  )
}
