import React from 'react'
import { uuid } from 'uuidv4';

const Favourites = () => {
    let favorites = ['starr']
  return (
    <div>
        {favorites.map(favorite=> <div key={uuid()}>{favorite}</div>)}
    </div>
  )
}

export default Favourites