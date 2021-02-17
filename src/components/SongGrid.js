import React, { useState, useEffect } from 'react'
import { Container, Row, Form } from 'react-bootstrap'
import '../styles/styles.css';
import SongItem from './SongItem'
import LoadingScreen from '../components/LoadingScreen';

//we have to catch the props that were passed in from app component but we are directly
//catching
const SongGrid = ({ albums, isLoading }) => {
    const [search, setSearch] = useState('')
    const [filteredAlbum, setFilteredAlbum] = useState([])

    useEffect(() => {
        setFilteredAlbum(
            albums.filter(album => {
                return album['im:name'].label.toString().toLowerCase().includes(search.toLowerCase())
            })
        )
    }, [search, albums]);

    return isLoading ? (<LoadingScreen />) : (
        <Container fluid className='grid theme'>
            <Row className='searchBar'>
                <Form.Control type="text" placeholder="Search Album" onChange={e => setSearch(e.target.value)} />
            </Row>
            <Row>
                {filteredAlbum.map(album => (
                    <SongItem key={album.id.attributes['im:id']} album={album} />
                ))}
            </Row>
        </Container>
    )
}

export default SongGrid
