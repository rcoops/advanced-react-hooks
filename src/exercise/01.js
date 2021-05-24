// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const countReducer = (previousState, stateChange) => ({
  ...previousState,
  ...(typeof stateChange === 'function' ? stateChange(previousState): stateChange),
})

function Counter({initialCount = 0, step = 1}) {
  const [{ count }, setState] = React.useReducer(countReducer, { count: initialCount })

  const increment = () => setState(({ count: currentCount }) => ({ count: currentCount + step }))

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
