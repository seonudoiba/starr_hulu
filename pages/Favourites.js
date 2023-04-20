import React from 'react'
const Favourites = () => {
    let favorites = ['starr']
  return (
    <div>
        {favorites.map((favorite, index)=> <div key={index} >{favorite}</div>)}
    </div>
  )
}

export default Favourites