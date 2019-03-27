import React, { Component } from 'react';
import CardList from './CardList';
import AddCard from './AddCard';
import { Consumer } from './Context';


class Column extends Component {
    render() {
        const { index } = this.props
        return (
            <Consumer>
                { ({ columns, actions }) => (
                    <section class="column">
                        <div className="column__header">
                            <div className="column__header__title">
                                Column - { columns[index].name }
                            </div>
                            <button className="column__remove" onClick={() => actions.removeColumn(columns[index].id)}>Remove</button>
                        </div>
                        <div class="column__inner">
                            <CardList columnIndex={ index } />
                            <AddCard columnIndex={ index }/>
                        </div>
                    </section>
                )}
            </Consumer>
        );
    }
}

export default Column;