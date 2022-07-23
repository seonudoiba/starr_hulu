import React from 'react'
import {Thumbnail} from './Thumbnail'

export const Results = ({results}) => {

    console.log(results)
  return (
    <div className="grid sm:grid-cols-2 mt-2 m-4 md:grid-cols-4 gap-4">
        {results.map(result => <Thumbnail key={result.id} result={result} /> )}
        
    </div>
    
  )
}
