package com.example.imp.controller;

import com.example.imp.model.Product;
import com.example.imp.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/")
public class ProductController {
    @Autowired
    private ProductService service;

    @GetMapping("/")
    public List<Product> getAllProducts(){
        return service.getAllProduct();
    }

}
