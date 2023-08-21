package com.example.demo;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @RequestMapping(value = "/")
    public String home(){
        return "index";
    }

    @GetMapping(path = "/api/ventas/{id}/formacion")
    public @ResponseBody List<Map<String, Object>> formacion(@PathVariable Integer id){
        String sql = "SELECT venta.id as ID, cliente.nombre as CLIENTE, producto.nombre as PRODUCTO FROM venta JOIN cliente ON venta.id_cliente = cliente.id JOIN producto ON venta.id_producto = producto.id WHERE venta.id_venta = ?";
        List<Map<String, Object>> queryResult = jdbcTemplate.queryForList(sql, id);
        return queryResult;
    }
}
