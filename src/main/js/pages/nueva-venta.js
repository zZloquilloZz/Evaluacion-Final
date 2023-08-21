const React = require('react');
const {useState, useEffect} = require('react');
const { Link,useParams } = require('react-router-dom');
const client = require('../client');


const PageNuevaVenta = () => {

    let { id } = useParams();
    const [clientes, setClientes] = useState([])
    const [productos, setProductos] = useState([])
    const [idCliente, setIdCliente] = useState('')
    const [idProducto, setIdProducto] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/ventas',
            entity: {
                vendedor: 'http://localhost:8080/api/vendedores/'+id,
                cliente: 'http://localhost:8080/api/clientes/'+idCliente,
                productos: 'http://localhost:8080/api/productos/'+idProducto},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
           window.location = '/';
        })
    }

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/clientes'
        }).done(response=>{
            let clientes2 = [];
            response.entity._embedded.clientes.map(cliente => {
                clientes2.push({value: cliente._links.self.href.split('/').slice(-1), label: cliente.nombre})
            })
            setClientes(clientes2)
        })
        client({
            method: 'GET',
            path: '/api/productos'
        }).done(response=>{
            let productos2 = [];
            response.entity._embedded.productos.map(producto => {
                productos2.push({value: producto._links.self.href.split('/').slice(-1), label: producto.nombre})
            })
            setProductos(productos2)
        })

    },[])

    return (
        <>
            <h1>Nueva Venta</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor='cliente'>Cliente</label>
                <select name="cliente" id="cliente" onChange={(e)=>{setIdCliente(e.target.value)}}>
                    {clientes.map(cliente => {	
                        return (
                            <option key={cliente.value} value={cliente.value}>{cliente.label}</option>
                        )
                    })}
                </select>
                
                <label>Producto</label>
                <select name="producto" id="producto" onChange={(e)=>{setIdProducto(e.target.value)}}>
                    {productos.map(producto => {	
                        return (
                            <option key={producto.value} value={producto.value}>{producto.label}</option>
                        )
                    })}
                </select>

                <input type="submit" value="Nueva Venta" />

            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = PageNuevaVenta;