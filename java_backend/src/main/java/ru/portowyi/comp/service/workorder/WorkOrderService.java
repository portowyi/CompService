package ru.portowyi.comp.service.workorder;

import org.springframework.stereotype.Service;

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
