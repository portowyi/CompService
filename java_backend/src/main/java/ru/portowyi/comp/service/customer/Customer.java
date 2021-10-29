package ru.portowyi.comp.service.customer;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import ru.portowyi.comp.service.domain.BaseEntity;
import ru.portowyi.comp.service.email.EMail;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity(name = "CUSTOMERS")
@ToString
@NoArgsConstructor
public class Customer extends BaseEntity {

    @Column(name = "FIRST_NAME")
    @Size(min = 3, message = "Имя не может быть короче трех символов!")
    @JsonProperty("firstName")
    @Getter
    @Setter
    private String firstName;

    @Column(name = "SECOND_NAME", nullable = false)
    @Size(min = 3, message = "Фамилия не может быть короче двух символов!")
    @JsonProperty("surName")
    @Getter
    @Setter
    private String secondName;

    @Column(name = "COMMENT", length = 256)
    @JsonProperty("comment")
    private String comment;

    public String getComment() {
        if (comment == null) return "";
        return comment;
    }

    public void setComment(String comment) {
        if (comment == null) comment = "";
        this.comment = comment;
    }

    @Column(name = "TELEPHONE_NUMBER", unique = true)
    @NotBlank(message = "Необходимо заполнить номер телефона!")
    @JsonProperty("telephoneNumber")
    @Getter
    @Setter
    private String telephoneNumber;

    @OneToOne(cascade = CascadeType.ALL)
    @JsonProperty("eMail")
    @Getter
    @Setter
    private EMail eMail;
}
