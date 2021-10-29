package ru.portowyi.comp.service.exceptions;

public class EMailAlreadyExistException extends RuntimeException{
    public EMailAlreadyExistException(String message) {
        super(message);
    }
}
