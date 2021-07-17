import React from 'react'

class App extends React.Component {
  render() {
    return (
      <>
        <p>Primeiro parágrafo!</p>
        <p>Segundo parágrafo!</p>
        <p>{new Date().toLocaleDateString('pt-BR')}</p>
        <div>
          <pre>Cansei de parágrafos...</pre>
        </div>
      </>
    );
  }
}

export default App;
