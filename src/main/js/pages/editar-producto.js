const React = require('react');
const {useState, useEffect} = require('react');
const { Link, useParams } = require('react-router-dom');
const client = require('../client');

const PageEditarProducto = () => {

    const [producto, setProducto] = useState({});

    let { id } = useParams();

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/productos/' + id
        }).done(response => {
            setProducto(response.entity);
        })
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/productos/' + id,
            entity: producto,
            headers: {'Content-Type': 'application/json'}
        }).done(() => window.location = "/");
    }


    return (
        <>
            <h1>Editar Productos</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" value={producto.nombre} onChange={(e)=>setProducto({...producto, nombre: e.target.value})} />
                <label htmlFor="categoria">Categoría</label>
                <input type="text" id="categoria" name="categoria" value={producto.categoria} onChange={(e)=>setProducto({...producto, categoria: e.target.value})} />
                <label htmlFor="descripcion">Descripción</label>
                <input type="text" id="descripcion" name="descripcion" value={producto.descripcion} onChange={(e)=>setProducto({...producto, descripcion: e.target.value})} />
                <input type="submit" value="Editar Producto" />
            </form>
            <hr />
            <Link to="/">Volver</Link>
        </>
    );
}

module.exports = PageEditarProducto;