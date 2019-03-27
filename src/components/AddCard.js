import React, { Component } from 'react';
import { Consumer } from './Context'

class AddCard extends Component {

    nameInput = React.createRef();

    render() {
        const { columnIndex } = this.props;

        return (
            <Consumer>
                {({ actions }) => {
                    const handleSubmit = (e) => {
                        e.preventDefault();
                        actions.addCard(this.nameInput.current.value, columnIndex);
                        e.currentTarget.reset();
                    }
    
                    return (
                        <form className="column__form" onSubmit={handleSubmit}>
                            <label>
                                <input 
                                    type="text"
                                    ref={this.nameInput}
                                    placeholder="Add new card" 
                                    onfocus="this.placeholder=''"
                                    />
                                <button className="column__new__button">Add</button>
                            </label>
                        </form>
                    );
                }}
            </Consumer>
        );
    }
}
    
    
    


export default AddCard;