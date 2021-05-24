// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const countReducer = (previousState, { type, step }) => {
  switch (type) {
    case 'INCREMENT':
      return {
          ...previousState,
          count: previousState.count + step,
        }
    default:
      return previousState
  }
  
}

function Counter({initialCount = 0, step = 1}) {
  const [{ count }, dispatch] = React.useReducer(countReducer, { count: initialCount })

  const increment = () => dispatch({ type: 'INCREMENT', step })

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
