import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'

//functional component using es6 arrow function
const SongCard = () => {
    const cardInfo = [
        { image: "https://i.guim.co.uk/img/media/59afa112361abd0310fa711ee450327213add50e/0_24_5184_3110/master/5184.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1409e373e34014a83c91e2ca80fabe48", title: "Ellie", text: "the best singer" },
        { image: "", title: "Kim", text: "" },
        { image: "", title: "LP", text: "" },
        { image: "", title: "Mike", text: "" },
    ]
    
    const renderCard = (card, index) => {
        return (
            <Card border='primary' style={{ width: '2rem' }} key={index}>
                <Card.Img variant="top" src={card.image} />
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>
                        {card.text}
                    </Card.Text>
                </Card.Body>
            </Card >
        )
    }

    return (
        <div>
            <ul>
                <h1> {/*albums && console.log("Title ", albums.feed)*/}</h1>
            </ul>
            {cardInfo.map(renderCard)}
        </div>

    )
}


export default SongCard;