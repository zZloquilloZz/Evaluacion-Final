package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final ProductoRepository repositoryP;
	private final VentaRepository repositoryT;
	private final VendedorRepository repositoryV;
	private final ClienteRepository repositoryC;

	@Autowired
	public DatabaseLoader(
		ProductoRepository repositoryP,
		VentaRepository repositoryT,
		VendedorRepository repositoryV,
		ClienteRepository repositoryC
		) {
		this.repositoryP = repositoryP;
		this.repositoryT = repositoryT;
		this.repositoryV = repositoryV;
		this.repositoryC = repositoryC;
	}

	@Override
	public void run(String... strings) throws Exception {

		Producto P1 = new Producto("Leche Gloria", "Lacteos", "Vitamina");
		Producto P2 = new Producto("Yogurth", "Lacteos", "Vitamina");
		Producto P3 = new Producto("Cereales", "cereales", "Vitaminas B12");
		this.repositoryP.save(P1);
		this.repositoryP.save(P2);
		this.repositoryP.save(P3);

		
		Vendedor V1 = new Vendedor("Ademir Fernandez");
		Vendedor V2 = new Vendedor("jose Perez");
		this.repositoryV.save(V1);
		this.repositoryV.save(V2);

		Cliente C1 = new Cliente("Maria Chavez");
		Cliente C2 = new Cliente("Miles Cubas");
		Cliente C3 = new Cliente("Juan lopez");
		this.repositoryC.save(C1);
		this.repositoryC.save(C2);
		this.repositoryC.save(C3);

		Venta VT1 = new Venta(P1,V2,C3);
		Venta VT2 = new Venta(P3,V1,C1);
		Venta VT3 = new Venta(P2,V1,C2);
		this.repositoryT.save(VT1);
		this.repositoryT.save(VT2);
		this.repositoryT.save(VT3);

	}
}