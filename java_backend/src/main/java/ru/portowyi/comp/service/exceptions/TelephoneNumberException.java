package ru.portowyi.comp.service.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class TelephoneNumberException extends RuntimeException{
    public TelephoneNumberException(String message) {
        super(message);
    }
}
