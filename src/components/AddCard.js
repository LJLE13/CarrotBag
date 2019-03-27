import React from 'react';
import { Consumer } from './Context'

const AddCard = (props) => {

    const nameInput = React.createRef();

    return (
        <Consumer>
            {({ actions }) => {
                const handleSubmit = (e) => {
                    e.preventDefault();
                    actions.addCard(nameInput.current.value, props.columnIndex);
                    e.currentTarget.reset();
                }

                return (
                    <form className="column__form" onSubmit={handleSubmit}>
                        <label>
                            <input 
                                type="text"
                                ref={nameInput}
                                placeholder="Add new card" 
                                />
                            <button className="column__new__button">Add</button>
                        </label>
                    </form>
                );
            }}
        </Consumer>
    );
}

export default AddCard;
