import React from 'react'

class App4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {nome: undefined, txtNome: ''};
    }

    changeTxtName = (event) => {
        this.setState({ txtNome: event.target.value });
    }

    componentDidMount = () => {
        const nome = sessionStorage.getItem('nome');
        if (nome) {
            this.setState({nome});
        }
    }

    persistName = () => {
        const txtDoNome = this.state.txtNome;
        this.setState({ nome: txtDoNome });
        sessionStorage.setItem('nome', txtDoNome);
    }

    render() {
        const renderForm = () => {
            return (
                <>
                    Nome: <input id="nome" type="text" onChange={this.changeTxtName}></input>
                    <button id="btnSalvar" onClick={this.persistName}>Salvar</button>
                </>
            );
        } 
        
        const renderText = () => {
            return (
                <>
                    <p>Olá {this.state.nome}</p>
                </>
            );
        }

        return !this.state.nome ? renderForm() : renderText();
    }

}

export default App4;