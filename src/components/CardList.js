import React from 'react';
import Card from './Card';


const CardList = (props) => {
    return (
        <React.Fragment>
            {props.cards.map( ( card, index ) => 
                <Card 
                    name={card.name}
                    index={index}
                    id={card.id}
                />
            )}
        </React.Fragment>
    );
}

export default CardList