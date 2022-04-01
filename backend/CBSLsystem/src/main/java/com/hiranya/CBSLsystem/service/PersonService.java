package com.hiranya.CBSLsystem.service;

import com.hiranya.CBSLsystem.model.Person;

import java.util.List;


public interface PersonService {
    public Person savePerson(Person person);
    public List<Person> getAllPersons();
}
