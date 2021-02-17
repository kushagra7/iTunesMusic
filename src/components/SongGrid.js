import React, { useState, useEffect } from 'react'
import { Button, Container, Row, Col, Form, Dropdown, DropdownButton } from 'react-bootstrap'
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

    //sortBy Function
    function clickHandler(str) {
        setFilteredAlbum(
            albums.filter(album => {
                return album.category.attributes.term.toString().toLowerCase() == (str)
            })
        )
    }

    const refreshPage = ()=>{
        window.location.reload();
     }

    return isLoading ? (<LoadingScreen />) : (
        <Container fluid className='grid theme'>
            <Row className='searchBar'>
                <Col sm={8}>
                    <Form.Control type="text" placeholder="Search Album" onChange={e => setSearch(e.target.value)} />
                </Col>
                <Col sm={2}>
                    <DropdownButton id="dropdown-basic-button" title="Filter">
                        <Dropdown.Item onClick={() => clickHandler('pop')}>Pop</Dropdown.Item>
                        <Dropdown.Item onClick={() => clickHandler('rock')}>Rock</Dropdown.Item>
                        <Dropdown.Item onClick={() => clickHandler('country')}>Country</Dropdown.Item>
                    </DropdownButton>
                </Col>
                <Col sm={2}>
                <Button onClick={refreshPage} variant="outline-primary">Clear</Button>
                </Col>
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
