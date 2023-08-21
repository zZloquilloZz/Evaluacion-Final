package com.example.demo;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Venta {

	private @Id @GeneratedValue Long id;
	
	@ManyToOne()
	@JoinColumn(name = "id_producto")
	private Producto producto;

	@ManyToOne()
	@JoinColumn(name = "id_vendedor")
	private Vendedor vendedor;

	@ManyToOne()
	@JoinColumn(name = "id_cliente")
	private Cliente cliente;

	
	

	public Venta(Producto producto, Vendedor vendedor, Cliente cliente) {
		this.producto = producto;
		this.vendedor = vendedor;
		this.cliente = cliente;
	}

	private Venta() {}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Producto getProducto() {
		return producto;
	}

	public void setProducto(Producto producto) {
		this.producto = producto;
	}

	public Vendedor getVendedor() {
		return vendedor;
	}

	public void setVendedor(Vendedor vendedor) {
		this.vendedor = vendedor;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}
	
}