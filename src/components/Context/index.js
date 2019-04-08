import React, {Component} from 'react';
import firebase from '../Firebase';

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


  writeColumnData = () => {
    firebase.firestore().collection("columns").doc("new-columns-id").set(this.state);
    console.log('DATA SAVED');
  }

  getColumnData = () => {
    var docRef = firebase.firestore().collection("columns").doc("new-columns-id")
    docRef.get().then((documentSnapshot) => {
      if (documentSnapshot.exists) {
        this.setState(documentSnapshot.data());
        console.log('DATA RETRIEVED');
      } else {
        console.log('doc not found')
      }
    })
  }

  componentDidMount() {
    this.getColumnData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state){
      this.writeColumnData();
    }
  }

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
