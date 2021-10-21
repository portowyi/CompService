package ru.portowyi.comp.service.service;

import org.springframework.stereotype.Service;
import ru.portowyi.comp.service.domain.WorkOrder;
import ru.portowyi.comp.service.repository.WorkOrderRepository;

@Service
public class WorkOrderService {

    private final WorkOrderRepository workOrderRepository;

    public WorkOrderService(WorkOrderRepository workOrderRepository) {
        this.workOrderRepository = workOrderRepository;
    }

    public WorkOrder createOrUpdate(WorkOrder workOrder){
        return workOrderRepository.save(workOrder);
    }
}
