import React from 'react'
import { Container } from 'react-bootstrap'
import SongItem from './SongItem'
import '../styles/styles.css';

//we have to catch the props that were passed in from app component but we are directly
//catching
const songGrid = ({ albums, isLoading }) => {
    return isLoading ? (<h1> Loading </h1>) : <Container fluid className='grid theme'> 
 
        {albums.map(album => (
            <SongItem key={album.id.attributes['im:id']} album={album} />
        ))}
    </Container>
}

export default songGrid
