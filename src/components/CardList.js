import React from 'react';
//import { Robots } from './Robots';
import Card from './Card';

const CardList = ({ Robots }) => {
    const cardsArray = Robots.map((user, index) => {
        return (<Card
            key={index}
            id={Robots[index].id}
            name={Robots[index].name}
            email={Robots[index].email}
        />
        )
    })
    return (
        <div>
            {cardsArray}
        </div>
    );
}

export default CardList