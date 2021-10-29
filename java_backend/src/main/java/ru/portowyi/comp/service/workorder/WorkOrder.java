package ru.portowyi.comp.service.workorder;

import lombok.NoArgsConstructor;
import lombok.ToString;
import ru.portowyi.comp.service.domain.BaseEntity;

import javax.persistence.Entity;

@Entity(name = "WORK_ORDERS")
@ToString
@NoArgsConstructor
public class WorkOrder extends BaseEntity {
}