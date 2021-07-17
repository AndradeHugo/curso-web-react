import React from 'react';
import ReactDOM from 'react-dom';
import {Lista, Item} from './components/Lista';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Lista>
      Texto
      <Item key={999} completo={false}>Aninhando1</Item>
      <Item key={998} completo={true}>Aninhando2</Item>
    </Lista>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
