package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "vendedores", path = "vendedores")
public interface VendedorRepository extends CrudRepository<Vendedor, Long> {

}