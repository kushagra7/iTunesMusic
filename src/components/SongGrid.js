import React, { useState, useEffect } from 'react'
import { Container, Row, Form, Spinner } from 'react-bootstrap'
import SongItem from './SongItem'
import '../styles/styles.css';

//we have to catch the props that were passed in from app component but we are directly
//catching
const SongGrid = ({ albums, isLoading }) => {
    const [search, setSearch] = useState('')
    const [filteredAlbum, setFilteredAlbum] = useState([])
    const style = { position: "fixed", top: "40%", left: "50%" };

    useEffect(() => {
        setFilteredAlbum(
            albums.filter(album => {
                return album['im:name'].label.toString().toLowerCase().includes(search.toLowerCase())
            })
        )
    }, [search, albums]);

    return isLoading ? (<Spinner animation="border" style={style} variant="primary"/>) : (
        <Container fluid className='grid theme'>
            <Row className='search'>
                <Form.Control type="text" placeholder="Search Album"  onChange={e => setSearch(e.target.value)}/>
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
