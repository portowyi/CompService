package ru.portowyi.comp.service.web;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.portowyi.comp.service.domain.Customer;
import ru.portowyi.comp.service.service.CustomerService;
import ru.portowyi.comp.service.service.validation.ErrorMapValidationService;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/v1/customer")
public class CustomerController {

    private final CustomerService customerService;
    private final ErrorMapValidationService validationService;

    public CustomerController(CustomerService customerService, ErrorMapValidationService validationService) {
        this.customerService = customerService;
        this.validationService = validationService;
    }

    @PostMapping("")
    public ResponseEntity<?> createCustomer(@Valid @RequestBody Customer customer, BindingResult result){
        if (result.hasErrors()) return validationService.validate(result);
        return new ResponseEntity<Customer>(customerService.createOrUpdate(customer), HttpStatus.CREATED);
    }
}
