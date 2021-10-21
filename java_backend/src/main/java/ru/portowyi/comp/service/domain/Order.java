package ru.portowyi.comp.service.domain;

import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;

@Entity(name = "ORDERS")
@ToString
@NoArgsConstructor
public class Order extends BaseEntity{
}
