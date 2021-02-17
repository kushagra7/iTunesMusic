import React from 'react'
import { Card, Button } from 'react-bootstrap/'
import TextTruncate from 'react-text-truncate';

//we receive the album as a prop and we have full object and we can use 

const SongItem = ({ album }) => {
    return (
        <a className='cardClick' href={album.link.attributes.href} target="_blank" >
        <Card className="box" style={{ width: '12rem' }} border='primary' key={album.id.attributes['im:id']}>
            <Card.Img className="image" variant="top" src={album['im:image'][2].label} />
            <Card.Body>
                <Card.Text className='album'>{ }
                    <TextTruncate
                        line={1}
                        truncateText="…"
                        text={album['im:name'].label}
                    />
                </Card.Text>

                <Card.Text className='artist'>
                    <TextTruncate
                        line={1}
                        truncateText="…"
                        text={album['im:artist'].label}
                    />
                </Card.Text>
                <p className='price'>Price : {album['im:price'].label}</p>
                <p className='genre'>Genre : {album.category.attributes.label}</p>
                <Button className="btn" variant="primary" href={album.link.attributes.href} target="_blank">Album Link</Button>
            </Card.Body>
            <Card.Footer className='font-release text-muted'>
                Release Date : {album['im:releaseDate'].attributes.label}
            </Card.Footer>
        </Card >
        </a>
    )
}

export default SongItem
