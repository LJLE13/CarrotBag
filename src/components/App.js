import React, { Component } from 'react';
import ColumnList from './ColumnList';
import AddColumn from './AddColumn';


class App extends Component {
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

  handleAddCard = (name, columnId) => {
    this.setState(prevState => {
      var newState = { columns: [] }
      prevState.columns.forEach( p => {
        if (p.id === columnId) {
          newState.columns.push({
            name: p.name,
            id: p.id,
            cards: [
              ...p.cards,
              {
                name,
                id: this.prevCardId +=1
              }
            ]
          })
        } else {
          newState.columns.push( p )
        }
      })
      return newState
    });
  }


  render() {
    return (
        <main class="wrapper">
            <ColumnList 
              columns={this.state.columns}
              removeColumn={this.handleRemoveColumn}
              addCard={this.handleAddCard}
              />
          <AddColumn AddColumn={this.handleAddColumn}/>
        </main>
    );
  }
}

export default App;
