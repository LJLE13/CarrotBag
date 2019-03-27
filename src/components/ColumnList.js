import React from 'react';
import Column from './Column';
import { Consumer } from './Context';

const ColumnList = () => {
    return (
        <Consumer>
            { ({ columns }) => (
                <React.Fragment>
                    { columns.map( (column, index) =>
                        <Column 
                        index={index}
                        key={column.id.toString()}
                         />
                    )}
                </React.Fragment>
            )}
        </Consumer>
        )}

export default ColumnList;
