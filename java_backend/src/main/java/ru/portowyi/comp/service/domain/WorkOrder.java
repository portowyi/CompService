package ru.portowyi.comp.service.domain;

import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;

@Entity(name = "WORK_ORDERS")
@ToString
@NoArgsConstructor
public class WorkOrder extends BaseEntity{
}