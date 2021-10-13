import React from 'react'
import SomeExampleComponent from './components/example/someExampleComponent';
import ClickCount from './components/clickcount/clickCount';

const App: React.FC = () => {
  return (
    <div>
      <SomeExampleComponent />
      <ClickCount />
    </div>
  )
}

export default App
