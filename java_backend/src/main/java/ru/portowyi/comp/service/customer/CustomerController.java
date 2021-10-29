package ru.portowyi.comp.service.customer;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import ru.portowyi.comp.service.service.validation.ErrorMapValidationService;

import javax.validation.Valid;

@CrossOrigin(origins = "http://localhost:3000")
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
        System.out.println(customer);
        if (result.hasErrors()) return validationService.validate(result);
        return new ResponseEntity<>(customerService.createOrUpdate(customer), HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public Iterable<Customer> getAllCustomers(){
        return customerService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getCustomerById(@PathVariable(name = "id") Long id){
        return new ResponseEntity<>(customerService.findById(id), HttpStatus.OK);

    }

    @GetMapping("/count")
    public ResponseEntity<CustomerCount> count(){
        return new ResponseEntity<>(customerService.count(), HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteCustomer(@PathVariable(name = "id") Long id){
        customerService.deleteCustomerById(id);
        return new ResponseEntity<>("Удаление успешно", HttpStatus.OK);
    }

}
