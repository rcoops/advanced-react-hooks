// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const countReducer = (previousState, newState) => ({
  ...previousState,
  ...(typeof newState === 'function' ? newState(previousState): newState),
})

function Counter({initialCount = 0, step = 1}) {
  const [{ count }, setState] = React.useReducer(countReducer, { count: initialCount })

  const increment = () => setState(({ currentCount }) => ({ count: currentCount + step }))

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
