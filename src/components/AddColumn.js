import React from 'react';
import { Consumer } from './Context';

const AddColumn = () => {

    const nameInput = React.createRef();
    
    return (
        <Consumer>
            { ({ actions }) => {
                const handleSubmit = (e) => {
                    e.preventDefault();
                    actions.addColumn(nameInput.current.value);
                    e.currentTarget.reset();
                }
                
                return (
                    <section className="column__new">
                        <form className="column__new__form" onSubmit={handleSubmit}>
                            <label>
                                <input 
                                    type="text"
                                    ref={nameInput}
                                    placeholder="Add new column" 
                                    />
                                <button className="column__new__button">Add</button>
                            </label>
                        </form>
                    </section>
                );
            }}
        </Consumer>
    );
}

export default AddColumn;
