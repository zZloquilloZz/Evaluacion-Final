const React = require('react');
const {useState, useEffect} = require('react');
const {useParams} = require('react-router-dom');
const client = require('../client');
const {Link} = require('react-router-dom');

const PageVerVendedor = ()=>{

    let {id} = useParams();
    const [vendedor, setVendedor] = useState({});
    const [ventas, setVentas] = useState([]);

    useEffect(()=>{

        const url_vendedor = '/api/Vendedores/'+id

        client({
            method: 'GET',
            path: url_vendedor
        }).done((response)=>{setVendedor(response.entity);})

        client({
            method: 'GET',
            path: url_vendedor + '/formacion'
        }).done((response)=>{setVentas(response.entity);})

    }, []);

    return (
        <>
            <h1>Ver Vendedor</h1>

            <table border="1">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <td>{vendedor.nombre}</td>
                    </tr>
                </tbody>
            </table>

            <hr />

            <table border="1">
                <thead>
                    <tr>
                        <th colSpan="2">ventas</th>  
                    </tr>
                    <tr>
                        <th>Cliente</th>
                        <th>Producto</th>
                    </tr>
                </thead>
                <tbody>
                    {ventas.map(ventas => {
                        return (
                            <tr key={ventas.ID}>
                                <td>{ventas.CLIENTE}</td>
                                <td>{ventas.PRODUCTO}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Link to={`/ver-vendedor/${id}/nueva-venta`}>Nueva Venta</Link> | <Link to="/">Volver</Link>
        </>
    );
}

module.exports = PageVerVendedor;