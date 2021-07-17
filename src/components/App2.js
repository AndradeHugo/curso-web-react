import React from 'react'

class App2 extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="box">
        <div id="titulo">{this.props.title}</div>
        <div id="texto">{this.props.children}</div>
      </div>
    );
  }
}

export default App2;
