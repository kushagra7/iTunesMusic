import React from 'react'
import { Card, Button } from 'react-bootstrap/'

//we receive the album as a prop and we have full object and we can use 

const SongItem = ({ album }) => {
    console.log(album)
    return (
            <Card className="box songItem" style ={{width:'12rem'}} border='primary' key={album.id.attributes['im:id']}>
                <Card.Img variant="top" src={album['im:image'][2].label} />
                <Card.Body>
                    <Card.Title>{album.title.label}</Card.Title>

                    <Card.Text> 
                        Artist : {album['im:artist'].label}
                    </Card.Text>
                    <blockquote className="blockquote mb-0">
                        <footer className="blockquote-footer">
                            Price : <cite title="Source Title">{album['im:price'].label}</cite>
                        </footer>
                    </blockquote>
                    <Button variant="primary" href={album.link.attributes.href} target="_blank">Album Link</Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{album.rights.label}</small>
                </Card.Footer>
            </Card >
    )
}

export default SongItem
