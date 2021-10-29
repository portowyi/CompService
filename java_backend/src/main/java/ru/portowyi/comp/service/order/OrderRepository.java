package ru.portowyi.comp.service.order;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.portowyi.comp.service.order.Order;

@Repository
public interface OrderRepository extends CrudRepository<Order, Long> {
}
