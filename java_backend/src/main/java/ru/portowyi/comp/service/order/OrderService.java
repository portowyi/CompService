package ru.portowyi.comp.service.order;

import org.springframework.stereotype.Service;

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
