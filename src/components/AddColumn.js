import React, { Component } from 'react';

class AddColumn extends Component {

    state = {
        value: ''
    };

    nameInput = React.createRef();
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.AddColumn(this.nameInput.current.value);
        e.currentTarget.reset();
    }
    
    render() {
        return (
            <section className="column__new">
                <form className="column__new__form" onSubmit={this.handleSubmit}>
                    <label>
                        <input 
                            type="text"
                            ref={this.nameInput}
                            placeholder="Add new column" 
                            onfocus="this.placeholder=''"
                            />
                        <button className="column__new__button">Add</button>
                    </label>
                </form>
            </section>
        );
    }
}

export default AddColumn;