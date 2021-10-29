package ru.portowyi.comp.service.exceptions;

public class CustomerIdExceptionResponse implements ExceptionResponse{
    private String id;

    public CustomerIdExceptionResponse() {
    }

    @Override
    public void setMessage(String msg) {
        this.id = msg;
    }

    public String getId() {
        return id;
    }
}
