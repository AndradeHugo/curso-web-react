import React from 'react'

class Formulario extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            linguagem: 'Java',
            tipo: 'Estudante',
            dedico: false,
            bio: ''
        }

        this.handleSubmit = (event) => {
            event.preventDefault();
            console.log(this.state);
        }

        this.changeName = (event) => {
            this.setState({ nome: event.target.value });
        }

        this.changeLinguagem = (event) => {
            this.setState({ linguagem: event.target.value });
        }

        this.changeTipo = (event) => {
            this.setState({ tipo: event.target.value });
        }

        this.changeDedico = (event) => {
            this.setState({dedico: event.target.value});
        }

        this.changeBio = (event) => {
            this.setState({bio: event.target.value});
        }
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nome: <input type="text" value={this.state.nome} onChange={this.changeName} />
                    </label>
                    <br /><br />
                    <label>
                        Linguagem favorita:
                        <select value={this.state.linguagem} onChange={this.changeLinguagem}>
                            <option>Java</option>
                            <option>Python</option>
                            <option>JavaScript</option>
                        </select>
                    </label>
                    <br /><br />
                    <label>
                        O que você é?
                        <input type="radio" value="Programador" checked={this.state.tipo == 'Programador'} onChange={this.changeTipo}></input> Programador
                        <input type="radio" value="Estudante" checked={this.state.tipo == 'Estudante'} onChange={this.changeTipo}></input> Estudante
                    </label>
                    <br /><br />
                    <label>
                        <input type="checkbox" checked={this.state.dedico} onChange={this.changeDedico}></input> Dedico 1h por dia de estudos.
                    </label>
                    <br /><br />
                    <label>
                        Bio: <textarea cols="40" value={this.state.bio} onChange={this.changeBio}></textarea>
                    </label>
                    <br /><br />
                    <input type="submit" value="Salvar"></input>
                </form>
            </>
        );
    }

}

export default Formulario;