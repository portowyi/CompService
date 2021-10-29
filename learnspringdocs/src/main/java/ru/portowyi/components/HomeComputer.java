package ru.portowyi.components;

public class HomeComputer implements Computer{
    private Processor processor;
    private int cores;
    private int memory;

    public HomeComputer(Processor processor) {
        this.processor = processor;
        this.cores = cores;
        this.memory = memory;
    }

    public Processor getProcessor() {
        return processor;
    }

    public void setProcessor(Processor processor) {
        this.processor = processor;
    }

    public int getCores() {
        return cores;
    }

    public void setCores(int cores) {
        this.cores = cores;
    }

    public int getMemory() {
        return memory;
    }

    public void setMemory(int memory) {
        this.memory = memory;
    }

    @Override
    public String toString() {
        return "HomeComputer{" +
                "processor=" + processor +
                ", cores=" + cores +
                ", memory=" + memory +
                '}';
    }
}
