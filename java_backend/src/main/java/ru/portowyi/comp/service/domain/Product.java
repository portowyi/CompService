package ru.portowyi.comp.service.domain;

import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;

@Entity(name = "PRODUCTS")
@ToString
@NoArgsConstructor
public class Product extends BaseEntity{
}
