import React from 'react';
import Card from './Card';
import { Consumer } from './Context'


const CardList = (props) => {
    return (
        <Consumer>
            { ({ columns }) => (
                <React.Fragment>
                    { columns[props.columnIndex].cards.map( ( card, index ) => 
                        <Card 
                            cardIndex={index}
                            columnIndex={props.columnIndex}
                        />
                    )}
                </React.Fragment>
            )}
        </Consumer>
    );
}

export default CardList