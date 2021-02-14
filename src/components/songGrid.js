import React from 'react'

//we have to catch the props that were passed in from app component but we are directly
//catching
const songGrid = ({albums, isLoading}) => {
    return isLoading?(<h1> Loading </h1>) : <section>

        {albums.map(album => (
            <h1> {album.title.label}</h1>
        ))}
        </section>
} 

export default songGrid
