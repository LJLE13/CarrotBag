import React, {Component} from 'react';


class Card extends Component {
    render () {
        const {
            name,
            id,
            index
        } = this.props

        return (
            <article class="card">
                <a href="#">
                    <p class="card__title">Card name is {name}</p>
                </a>
                <dialog class="card__full">Hello</dialog>
            </article>
        );
    }
}

export default Card;