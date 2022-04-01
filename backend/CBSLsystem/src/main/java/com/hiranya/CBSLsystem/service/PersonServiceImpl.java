package com.hiranya.CBSLsystem.service;

import com.hiranya.CBSLsystem.model.Person;
import com.hiranya.CBSLsystem.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class PersonServiceImpl implements PersonService{
    @Autowired
    private PersonRepository personRepository;



    @Override
    public Person savePerson(Person person) {
        return personRepository.save(person);
    }

    @Override
    public List<Person> getAllPersons() {
        return personRepository.findAll();
    }
}
