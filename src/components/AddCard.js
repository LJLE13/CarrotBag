import React, {Component} from 'react';

class AddCard extends Component {

    state = {
        value: ''
    };

    nameInput = React.createRef();
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addCard(this.nameInput.current.value, this.props.columnId);
        e.currentTarget.reset();
    }

    render() {
        return (
            <form className="column__form" onSubmit={this.handleSubmit}>
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
    }
}

export default AddCard;