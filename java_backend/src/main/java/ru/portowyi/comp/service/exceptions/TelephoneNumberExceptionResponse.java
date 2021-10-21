package ru.portowyi.comp.service.exceptions;

public class TelephoneNumberExceptionResponse {
    private String telephoneNumber;

    public TelephoneNumberExceptionResponse(String telephoneNumber) {
        this.telephoneNumber = telephoneNumber;
    }

    public String getTelephoneNumber() {
        return telephoneNumber;
    }

    public void setTelephoneNumber(String telephoneNumber) {
        this.telephoneNumber = telephoneNumber;
    }
}
