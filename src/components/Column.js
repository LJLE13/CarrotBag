import React, { Component } from 'react';
import Card from './Card';
import AddCard from './AddCard';


class Column extends Component {
    render() {
        const {
            name,
            id,
            index,
            removeColumn,
            cards,
            addCard
        } = this.props
        return (
            <section class="column">
                <div className="column__header">
                    <div className="column__header__title">
                        Liam - { name }
                    </div>
                    <button className="column__remove" onClick={() => removeColumn(id)}>Remove</button>
                </div>
                <div class="column__inner">
                    {cards.map( ( card, index ) => 
                        <Card 
                            name={card.name}
                            index={index}
                            id={card.id}
                        />
                    )}
                    <AddCard addCard={addCard} columnId={id}/>
                </div>
            </section>
        );
    }
}

export default Column;