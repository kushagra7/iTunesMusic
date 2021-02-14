import React from 'react'
import Card from 'react-bootstrap/Card'

//we receive the album as a prop and we have full object and we can use 

const SongItem = ({ album }) => {
    return (
        <Card border='primary' style={{ width: '15rem' }} key={album.id.attributes['im:id']}>
            <Card.Img variant="top" src={'https://i.guim.co.uk/img/media/59afa112361abd0310fa711ee450327213add50e/0_24_5184_3110/master/5184.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1409e373e34014a83c91e2ca80fabe48'} />
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
