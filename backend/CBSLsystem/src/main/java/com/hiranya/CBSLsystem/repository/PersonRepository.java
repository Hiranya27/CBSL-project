package com.hiranya.CBSLsystem.repository;

import com.hiranya.CBSLsystem.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface PersonRepository extends JpaRepository<Person, Integer> {
}
