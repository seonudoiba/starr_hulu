import React from 'react'
const Favourites = () => {
    let favorites = ['starr']
  return (
    <div>
        {favorites.map(favorite=> <div key={Math.random()}>{favorite}</div>)}
    </div>
  )
}

export default Favourites