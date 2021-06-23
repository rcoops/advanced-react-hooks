// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CountContext = React.createContext()

function countReducer({ count }, { type }) {
  switch (type) {
    case 'increment': {
      return {count: count + 1}
    }
    case 'decrement': {
      return {count: count - 1}
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`)
    }
  }
}
function CountProvider({ children }) {
  const [state, dispatch] = React.useReducer(countReducer, { count: 0 })
  const value = { state, dispatch }

  return <CountContext.Provider value={value}>{children}</CountContext.Provider>
}

function useCount() {
  const context = React.useContext(CountContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context
}

function CountDisplay() {
  const { state: { count } } = useCount();

  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const { dispatch } = useCount();

  const increment = () => dispatch({ type: 'increment' })
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
