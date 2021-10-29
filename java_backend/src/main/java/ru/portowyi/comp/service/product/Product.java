package ru.portowyi.comp.service.product;

import lombok.NoArgsConstructor;
import lombok.ToString;
import ru.portowyi.comp.service.domain.BaseEntity;

import javax.persistence.Entity;

@Entity(name = "PRODUCTS")
@ToString
@NoArgsConstructor
public class Product extends BaseEntity {
}
