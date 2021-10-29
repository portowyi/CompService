package ru.portowyi.comp.service.exceptions;

public class TelephoneNumberExceptionResponse implements ExceptionResponse{
    private String telephoneNumber;

    public String getTelephoneNumber() {
        return telephoneNumber;
    }

    @Override
    public void setMessage(String telephoneNumber) {
        this.telephoneNumber = telephoneNumber;
    }
}
