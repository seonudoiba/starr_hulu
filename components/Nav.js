import requests from '../utils/request'
import  {useRouter}  from 'next/router'
export const Nav = () => {
    let router = useRouter();
  return (
    <div className="flex whitespace-nowrap justify-around overflow-x-scroll scrollbar-hide items-center px-8">
        {Object.entries(requests).map(([key, {title, value}]) =>
        <h2 className="hover:border-b-8 focus:border-b-8 
        border-pink-500 font-bold font-sm md:font-3xl p-2
         text-gray-700 hover:scale-125 
         cursor-pointer transition transform "
            onClick={() => router.push(`/?genre=${key}`)}
        key={key}>{title}</h2>
        )}
    </div>
  )
}
