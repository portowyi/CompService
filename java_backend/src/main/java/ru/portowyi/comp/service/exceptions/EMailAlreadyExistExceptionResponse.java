package ru.portowyi.comp.service.exceptions;

public class EMailAlreadyExistExceptionResponse implements ExceptionResponse{
    private String eMail;

    public EMailAlreadyExistExceptionResponse(String eMail) {
    }

    public EMailAlreadyExistExceptionResponse() {}

    public String getEMail() {
        return eMail;
    }

    public void setMessage(String eMail) {
        this.eMail = eMail;
    }
}
