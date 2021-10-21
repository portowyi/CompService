package ru.portowyi.comp.service.service;

import org.springframework.stereotype.Service;
import ru.portowyi.comp.service.domain.Order;
import ru.portowyi.comp.service.repository.OrderRepository;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public Order createOrUpdate(Order order){
        return orderRepository.save(order);
    }
}
