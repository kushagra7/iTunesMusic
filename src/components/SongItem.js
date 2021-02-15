import React from 'react'
import { Card, Button } from 'react-bootstrap/'
import TextTruncate from 'react-text-truncate';

//we receive the album as a prop and we have full object and we can use 

const SongItem = ({ album }) => {
    console.log(album)

    return (
        <Card className="box" style={{ width: '12rem' }} border='primary' key={album.id.attributes['im:id']}>
            <Card.Img className="image" variant="top" src={album['im:image'][2].label} />
            <Card.Body>
                <Card.Title>{ }
                    <TextTruncate
                        line={2}
                        truncateText="…"
                        text={album.title.label}
                    />
                </Card.Title>

                <Card.Text>
                    <TextTruncate
                        line={1}
                        truncateText="…"
                        text={album['im:artist'].label}
                    />
                </Card.Text>
                <blockquote className="blockquote mb-0">
                    <footer className="blockquote-footer">
                        Price : <cite title="Source Title">{album['im:price'].label}</cite>
                    </footer>
                </blockquote>
                <Button className="btn" variant="primary" href={album.link.attributes.href} target="_blank">Album Link</Button>
            </Card.Body>
            <Card.Footer>
                <TextTruncate
                    line={2}
                    truncateText="…"
                    text={album.rights.label}
                    className="text-muted"
                />
            </Card.Footer>

        </Card >
    )
}

export default SongItem
