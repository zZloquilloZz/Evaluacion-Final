const React = require('react');
const ReactDOM = require('react-dom');
const { createBrowserRouter, RouterProvider } = require('react-router-dom');

const PageHome = require('./pages/home');
const PageNuevoCliente = require('./pages/nuevo-cliente');
const PageNuevoProducto= require('./pages/nuevo-producto');
const PageNuevoVendedor = require('./pages/nuevo-vendedor');
const PageNuevaVenta = require('./pages/nueva-venta');
const PageEditarCliente = require('./pages/editar-cliente');
const PageEditarProducto = require('./pages/editar-producto');
const PageVerVendedor= require('./pages/ver-vendedor')



const router = createBrowserRouter([
	{ path: '/', element: <PageHome /> },
	{ path: '/editar-cliente/:id', element: <PageEditarCliente /> },
	{ path: '/nuevo-cliente', element: <PageNuevoCliente /> },
	{ path: '/editar-producto/:id', element: <PageEditarProducto /> },
	{ path: '/nuevo-producto', element: <PageNuevoProducto /> },
	{ path: '/nuevo-vendedor', element: <PageNuevoVendedor /> },
	{ path: '/ver-vendedor/:id', element: <PageVerVendedor /> },
	{ path: '/nuevo-vendedor/:id/nueva-venta', element: <PageNuevaVenta /> },
]);


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react')
)