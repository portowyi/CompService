package ru.portowyi.comp.service.service;

import org.springframework.stereotype.Service;
import ru.portowyi.comp.service.domain.Customer;
import ru.portowyi.comp.service.exceptions.TelephoneNumberException;
import ru.portowyi.comp.service.repository.CustomerRepository;

@Service
public class CustomerService {

    private final CustomerRepository customerRepository;

    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public Customer createOrUpdate(Customer customer){
        try {
            return customerRepository.save(customer);
        } catch (Exception ex) {
            throw new TelephoneNumberException("Клиент с таким номером телефона '"
                    + customer.getTelephoneNumber() + "' уже существует");
        }
    }
}
