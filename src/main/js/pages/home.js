const React = require('react');
const client = require('../client');
const {Link} = require('react-router-dom');

class PageHome extends React.Component {
	constructor(props) {
		super(props);
		this.state = { productos: [], clientes: [], vendedores: [] };
	}
	componentDidMount() {
		client({ method: 'GET', path: '/api/productos' }).done(response => {
			this.setState({ productos: response.entity._embedded.productos });
		});
		client({ method: 'GET', path: '/api/clientes' }).done(response => {
			this.setState({ clientes: response.entity._embedded.clientes });
		});
		client({ method: 'GET', path: '/api/vendedores' }).done(response => {
			this.setState({ vendedores: response.entity._embedded.vendedores });
		});
	}
	render() {
		return (
			<>
                <h1>Tecnologia</h1>

				<div style={{"width": "100%","display": "flex"}} >

					<div style={{"width": "calc(100%/3)"}}>
						<Titulo entidad="Producto" emoji="📦" />
						<ProductoList productos={this.state.productos} />
						<br />
						<Link to="/nuevo-producto">Nuevo Producto</Link>
					</div>

					<div style={{"width": "calc(100%/3)"}}>
						<Titulo entidad="Cliente" emoji="🧖" />
						<ClienteList clientes={this.state.clientes} />
						<br />
						<Link to="/nuevo-cliente">Nuevo Cliente</Link>
					</div>

					<div style={{"width": "calc(100%/3)"}}>
						<Titulo entidad="Vendedor" emoji="🧑‍💼" />
						<VendedorList vendedores={this.state.vendedores} />
						<br />
						<Link to="/nuevo-vendedor">Nuevo Vendedor</Link>
					</div>

				</div>



			</>
		)
	}
}

const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.emoji} - {props.entidad}</h2>
			<span>Listado de {props.entidad.toLowerCase()}</span>
			<hr />
		</>
	)
}


class ProductoList extends React.Component {
	render() {
		const productos = this.props.productos.map(producto =>
			<Producto key={producto._links.self.href} producto={producto} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Categoría</th>
						<th>Descripción</th>
						<th>Acciones</th>
					</tr>
					{productos}
				</tbody>
			</table>
		)
	}
}
class ClienteList extends React.Component {
	render() {
		const clientes = this.props.clientes.map(cliente =>
			<Cliente key={cliente._links.self.href} cliente={cliente} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{clientes}
				</tbody>
			</table>
		)
	}
}
class VendedorList extends React.Component {
	render() {
		const vendedores = this.props.vendedores.map(vendedor =>
			<Vendedor key={vendedor._links.self.href} vendedor={vendedor} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{vendedores}
				</tbody>
			</table>
		)
	}
}

class Producto extends React.Component {
	render() {
		const id = this.props.producto._links.self.href.split('/').slice(-1);
		return (
			<tr>
				<td>{this.props.producto.nombre}</td>
				<td>{this.props.producto.categoria}</td>
				<td>{this.props.producto.descripcion}</td>
				<td>
					<Link to={'/editar-producto/'+id}>Editar</Link>
				</td>
			</tr>
		)
	}
}
class Cliente extends React.Component {
	render() {
		const id = this.props.cliente._links.self.href.split("/").slice(-1);
		return (
			<tr>
				<td>{this.props.cliente.nombre}</td>
				<td>
					<Link to={`/editar-cliente/${id}`}>Editar</Link>
				</td>
			</tr>
		)
	}
}
class Vendedor extends React.Component {
	render() {
		const id = this.props.vendedor._links.self.href.split("/").slice(-1);
		return (
			<tr>
				<td>{this.props.vendedor.nombre}</td>
				<td>
					<Link to={`/ver-vendedor/${id}`}>Ver</Link>
				</td>
			</tr>
		)
	}
}

module.exports = PageHome;