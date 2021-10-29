package ru.portowyi;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import ru.portowyi.components.Computer;
import ru.portowyi.components.HomeComputer;

public class Main {
    public static void main(String[] args) {

        ApplicationContext context = new ClassPathXmlApplicationContext("application-context.xml");
        Computer computer = context.getBean("homeComputer", HomeComputer.class);
        System.out.println(computer.toString());

    }
}
