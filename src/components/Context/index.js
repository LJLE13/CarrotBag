import React, {Component} from 'react';

const uuidv4 = require('uuid/v4');
const CarrotBagContext = React.createContext();

export class Provider extends Component {
  constructor(props) {
    super(props);
    this.handleAddColumn = this.handleAddColumn.bind(this);
    this.handleRemoveColumn = this.handleRemoveColumn.bind(this);
    this.handleAddCard = this.handleAddCard.bind(this);
    this.handleRemoveCard = this.handleRemoveCard.bind(this);
    this.state = {
      columns: [
        {
          name: "Column One",
          id: uuidv4(),
          cards: [
            {
              name: "Card One",
              id: uuidv4()
            }
          ]
        },
        {
          name: "Column Two",
          id: uuidv4(),
          cards: []
        }
      ]
    };
  };

  handleAddColumn(name) {
    this.setState(prevState => {
      return {
        columns: [
          ...prevState.columns,
          {
            name,
            id: uuidv4(),
            cards: []
          }
        ]
      }
    })
  }

  handleRemoveColumn(id) {
    this.setState(prevState => {
      return {
        columns: prevState.columns.filter(p => p.id !== id)
      };
    });
  }
    
  handleAddCard(name, columnIndex) {
    this.setState(prevState => {
        return (
            prevState.columns[columnIndex].cards.push({
                name,
                id: uuidv4()
            })
        );
    });
  }

  handleRemoveCard(columnIndex, cardId) {
    this.setState(prevState => {
      let updatedColumn = prevState.columns[columnIndex];
      updatedColumn.cards = updatedColumn.cards.filter(card => card.id !== cardId);
      prevState.columns[columnIndex] = updatedColumn;
      return {
        columns: prevState.columns
      }
    });
  }
    
  render() {
    return (
      <CarrotBagContext.Provider value={{
        columns: this.state.columns,
        actions: {
          addColumn: this.handleAddColumn,
          removeColumn: this.handleRemoveColumn,
          addCard: this.handleAddCard,
          removeCard: this.handleRemoveCard
        }
        }}>
        { this.props.children }
      </CarrotBagContext.Provider>
    );
  }
}

export const Consumer = CarrotBagContext.Consumer;
