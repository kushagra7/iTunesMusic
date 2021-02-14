import React from 'react'
import Card from 'react-bootstrap/Card'

//we receive the album as a prop and we have full object and we can use 

const SongItem = ({ album }) => {
    console.log(album)
    return (
        <Card border='primary' style={{ width: '15rem' }} key={album.id.attributes['im:id']}>
            <Card.Img variant="top" src={album['im:image'][2].label} />
            <Card.Body>
                <Card.Title>{album.title.label}</Card.Title>
                <Card.Text>
                    {album.title.label}
                </Card.Text>
            </Card.Body>
        </Card >
    )
}

export default SongItem
