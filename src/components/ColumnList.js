import React from 'react';
import Column from './Column';

const ColumnList = (props) => {
    return (
        <React.Fragment>
            {props.columns.map( (column, index) =>
                <Column 
                  name={column.name}
                  index={index}
                  id={column.id}
                  removeColumn={props.removeColumn}
                  cards={column.cards}
                  addCard={props.addCard}
                  />
            )}
        </React.Fragment>
        )}

export default ColumnList;

