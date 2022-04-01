package com.hiranya.CBSLsystem.controller;

import com.hiranya.CBSLsystem.model.Person;
import com.hiranya.CBSLsystem.service.PersonService;
import com.hiranya.CBSLsystem.service.PersonServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/person")
@CrossOrigin
public class PersonController {

    @Autowired
    private PersonService personService;

    @PostMapping("/add")
    public String add(@RequestBody Person person){
        personService.savePerson(person);
        return "New person is added";
    }

    @GetMapping("/getAllPersons")
    public List<Person> getAllPersons(){
        return personService.getAllPersons();
    }

}
