import React from 'react'
import { useState , useContext} from "react";
import FavContext from "../pages/index";
import {Thumbnail} from './Thumbnail'

export const Results = ({results}) => {
  const star = useContext(FavContext);

    console.log(star)
    console.log('star')
  return (
    <div className="grid sm:grid-cols-2 mt-2 m-4 md:grid-cols-4 gap-4">
        {results && results.map(result => <Thumbnail key={result.id} result={result} /> )}
        
    </div>
    
  )
}
