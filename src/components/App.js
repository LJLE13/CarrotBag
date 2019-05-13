import React from 'react'
import ColumnList from './ColumnList'
import AddColumn from './AddColumn'

const App = () => {
  return (
    <main className='carrot-bag'>
      <div className='column-container'>
        <ColumnList />
        <AddColumn />
      </div>
    </main>
  )
}

export default App
