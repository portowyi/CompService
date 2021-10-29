package ru.portowyi.components;

public class WorkComputer implements Computer{
    private Processor processor;

    public WorkComputer(Processor processor) {
        this.processor = processor;
    }

    public Processor getProcessor() {
        return processor;
    }

    public void setProcessor(Processor processor) {
        this.processor = processor;
    }

    @Override
    public String toString() {
        return "WorkComputer{" +
                "processor=" + processor +
                '}';
    }
}
