import React, {useState, useEffect} from 'react';

const App = () => {
    const [nome, setNome] = useState(undefined);

    const changeName = (event) => {
        setNome(event.target.value);
    }

    const saveDataSession = () => {
        if (nome == undefined) {
            const nomeSalvo = sessionStorage.getItem('nome');
            setNome(nomeSalvo);
        } else {
            sessionStorage.setItem('nome', nome);
        }
    }

    useEffect(saveDataSession, [nome]);

    return (
        <>
            Nome: <input type="text" onChange={changeName}></input>
            <br />
            Olaar {nome}, turo bom?
        </>
    );
}

export default App;