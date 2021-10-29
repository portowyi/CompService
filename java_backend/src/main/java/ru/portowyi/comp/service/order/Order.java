package ru.portowyi.comp.service.order;

import lombok.NoArgsConstructor;
import lombok.ToString;
import ru.portowyi.comp.service.domain.BaseEntity;

import javax.persistence.Entity;

@Entity(name = "ORDERS")
@ToString
@NoArgsConstructor
public class Order extends BaseEntity {
}
