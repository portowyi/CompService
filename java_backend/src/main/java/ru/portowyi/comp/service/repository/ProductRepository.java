package ru.portowyi.comp.service.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.portowyi.comp.service.product.Product;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {
}
