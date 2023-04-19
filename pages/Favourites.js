import React from 'react'

const Favourites = () => {
    let favorites = ['starr']
  return (
    <div>
        {favorites.map(favorite=> <div key={favorite}>{favorite}</div>)}
    </div>
  )
}

export default Favourites