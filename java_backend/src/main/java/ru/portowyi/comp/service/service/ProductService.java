package ru.portowyi.comp.service.service;

import org.springframework.stereotype.Service;
import ru.portowyi.comp.service.product.Product;
import ru.portowyi.comp.service.repository.ProductRepository;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product createOrUpdate(Product product){
        return productRepository.save(product);
    }
}
