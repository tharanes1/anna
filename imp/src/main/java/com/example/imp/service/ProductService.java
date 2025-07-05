package com.example.imp.service;

import com.example.imp.model.Product;
import com.example.imp.repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepo repo;

    public List<Product> getAllProduct(){
        return repo.findAll();
    }
}
