import React, {Component} from 'react';

const CarrotBagContext = React.createContext();

export class Provider extends Component {
    state = {
        columns: [
          {
            name: "Column One",
            id: 1,
            cards: [
              {
                name: "Card One",
                id: 1
              }
            ]
          },
          {
            name: "Column Two",
            id: 2,
            cards: []
          }
        ]
      }
    
      prevColumnId = 2;
      prevCardId = 1;
    
      handleAddColumn = (name) => {
        this.setState( prevState => {
          return {
            columns: [
              ...prevState.columns,
              {
                name,
                id: this.prevColumnId +=1,
                cards: []
              }
            ]
          }
        })
      }
    
      handleRemoveColumn = (id) => {
        this.setState(prevState => {
          return {
            columns: prevState.columns.filter( p => p.id !== id)
          };
        });
      }
    
      handleAddCard = (name, columnIndex) => {
        this.setState(prevState => {
            return (
                prevState.columns[columnIndex].cards.push({
                    name,
                    id: this.prevCardId +=1
                })
            );
        });
    }
    
      render() {
        return (
          <CarrotBagContext.Provider value={{
            columns: this.state.columns,
            actions: {
              removeColumn: this.handleRemoveColumn,
              addCard: this.handleAddCard,
              addColumn: this.handleAddColumn
            }
            }}>
            { this.props.children }
          </CarrotBagContext.Provider>
        );
    }
}

export const Consumer = CarrotBagContext.Consumer;
