import React from 'react';
import PropTypes from 'prop-types';
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
                            key={card.id.toString()}
                        />
                    )}
                </React.Fragment>
            )}
        </Consumer>
    );
}

CardList.propTypes = {
    columnIndex: PropTypes.number
};

export default CardList;
