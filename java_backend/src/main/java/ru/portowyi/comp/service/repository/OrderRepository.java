package ru.portowyi.comp.service.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.portowyi.comp.service.domain.Order;

@Repository
public interface OrderRepository extends CrudRepository<Order, Long> {
}
