import React from 'react';
import Column from './Column';
import { Consumer } from './Context';

const ColumnList = () => {
    return (
        <Consumer>
            { ({ columns }) => (
                <React.Fragment>
                    { columns.map( (column, index) =>
                        <Column index={index} />
                    )}
                </React.Fragment>
            )}
        </Consumer>
        )}

export default ColumnList;

