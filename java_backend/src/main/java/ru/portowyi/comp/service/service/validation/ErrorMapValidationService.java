package ru.portowyi.comp.service.service.validation;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import java.util.HashMap;
import java.util.Map;

@Service
public class ErrorMapValidationService {

    public ResponseEntity<?> validate(BindingResult result){
        Map<String, String> errorMap = new HashMap<>();
        for (FieldError errField : result.getFieldErrors()){
            errorMap.put(errField.getField(), errField.getDefaultMessage());
        }
        return new ResponseEntity<>(errorMap, HttpStatus.BAD_REQUEST);
    }

}