import React from 'react';
import ColumnList from './ColumnList';
import AddColumn from './AddColumn';

const App = () => {
  return (
    <main className="carrot-bag">
      <ColumnList />
      <AddColumn />
    </main>
  );
}

export default App;
