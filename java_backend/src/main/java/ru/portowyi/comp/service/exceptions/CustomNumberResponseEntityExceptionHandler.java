package ru.portowyi.comp.service.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@RestController
@ControllerAdvice
public class CustomNumberResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler
    public final ResponseEntity handleTelephoneNumberException(TelephoneNumberException exception, WebRequest request){
        return createResponse(exception, new TelephoneNumberExceptionResponse());
    }

    @ExceptionHandler
    public final ResponseEntity handleCustomerIdException(CustomerIdException exception, WebRequest request){
        return createResponse(exception, new CustomerIdExceptionResponse());
    }

    @ExceptionHandler
    public final ResponseEntity handleEmailAlreadyExistException(EMailAlreadyExistException exception, WebRequest request){
        return createResponse(exception, new EMailAlreadyExistExceptionResponse());
    }

    private <T extends Exception, D extends ExceptionResponse> ResponseEntity createResponse(T exception, D exceptionResponse){
        exceptionResponse.setMessage(exception.getMessage());
        return new ResponseEntity(exceptionResponse, HttpStatus.BAD_REQUEST);
    }
}
