package ru.portowyi.comp.service.customer;

import org.springframework.stereotype.Service;
import ru.portowyi.comp.service.email.EMail;
import ru.portowyi.comp.service.email.EMailRepository;
import ru.portowyi.comp.service.exceptions.CustomerIdException;
import ru.portowyi.comp.service.exceptions.EMailAlreadyExistException;
import ru.portowyi.comp.service.exceptions.TelephoneNumberException;

@Service
public class CustomerService {

    private final CustomerRepository customerRepository;
    private final EMailRepository eMailRepository;

    public CustomerService(CustomerRepository customerRepository, EMailRepository eMailRepository) {
        this.customerRepository = customerRepository;
        this.eMailRepository = eMailRepository;
    }

    public Customer createOrUpdate(Customer customer){
        EMail eMail = customer.getEMail();

        if (eMail != null && eMail.getId() == null){
            if (eMailRepository.existsByEmail(eMail.getEmail())){
                throw new EMailAlreadyExistException("Указанный адрес электронной почты уже существует");
            }
        }

        try {
            return customerRepository.save(customer);
        } catch (Exception ex) {
            throw new TelephoneNumberException("Клиент с таким номером телефона '"
                    + customer.getTelephoneNumber() + "' уже существует");
        }
    }

    public Customer findById(Long id){
        return customerRepository.findById(id)
                .orElseThrow(() -> new CustomerIdException("Клиента с таким идентификатором не существует"));
    }

    public Iterable<Customer> findAll(){
        return customerRepository.findAll();
    }

    public CustomerCount count(){
        return new CustomerCount(customerRepository.count());
    }

    public void deleteCustomerById(Long id){
        if (customerRepository.existsById(id)){
            customerRepository.deleteById(id);
        } else {
            throw new CustomerIdException("Клиента с таким идентификатором не существует");
        }
    }
}
