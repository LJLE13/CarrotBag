import React, {Component} from 'react';
import { Consumer } from './Context';


class Card extends Component {
    render () {
        const {
            cardIndex,
            columnIndex
        } = this.props

        return (
            <Consumer>
                { ({ columns }) => (
                    <article className="card">
                        <a href="#">
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