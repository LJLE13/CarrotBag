import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CardList from './CardList';
import AddCard from './AddCard';
import { Consumer } from './Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumpster } from '@fortawesome/free-solid-svg-icons'


class Column extends PureComponent {

    static propTypes = {
        index: PropTypes.number.isRequired
    }

    render() {
        const { index } = this.props;

        return (
            <Consumer>
                { ({ columns, actions }) => (
                    <section className="column">
                        <div className="column__header">
                            <div className="column__header__title">
                                Column - { columns[index].name }
                            </div>
                            <button className="column__remove" onClick={() => actions.removeColumn(columns[index].id)}><FontAwesomeIcon icon={ faDumpster } /></button>
                        </div>
                        <div className="column__inner">
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
