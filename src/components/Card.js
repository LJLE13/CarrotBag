import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';

class Card extends PureComponent {

    static propTypes = {
        cardIndex: PropTypes.number.isRequired,
        columnIndex: PropTypes.number.isRequired
    }

    render () {
        const {
            cardIndex,
            columnIndex
        } = this.props

        return (
            <Consumer>
                { ({ columns, actions }) => (
                    <article className="card">
                        <a href="#" onClick={() => actions.removeCard(columnIndex, columns[columnIndex].cards[cardIndex].id)}>
                            <p className="card__title">Card name is { columns[columnIndex].cards[cardIndex].name }</p>
                        </a>
                        <dialog className="card__full">Hello</dialog>
                    </article>
                )}
            </Consumer>
        );
    }
}

export default Card;
