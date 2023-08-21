const React = require('react');
const { Link, useParams } = require('react-router-dom');

const client = require('../client');
const { useState, useEffect } = require('react');

function PageEditarCliente() {

    const [cliente, setCliente] = useState({});

    // getting id param from route
    let { id } = useParams();

    useEffect(() => {
        client({ method: 'GET', path: '/api/clientes/' + id }).done(response => {
            setCliente(response.entity);
        });
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/clientes/' + id,
            entity: cliente,
            headers: { 'Content-Type': 'application/json' }
        }).done(() => window.location = "/");
    };

    return (
        <>
            <h1>Editar Cliente</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" value={cliente.nombre} onChange={(e) => setCliente({...cliente, nombre: e.target.value })} />
                <input type="submit" value="Editar Cliente" />
            </form>
            <hr />
            <Link to="/">Volver</Link>
        </>
    );
}

module.exports = PageEditarCliente;