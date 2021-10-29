package ru.portowyi.comp.service.email;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class EMail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private Long id;

    @Email
    @NotBlank
    @Getter
    @Setter
    @JsonProperty("eMail")
    @Column(unique = true)
    private String email;
}
