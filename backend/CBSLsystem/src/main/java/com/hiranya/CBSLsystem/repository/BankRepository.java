package com.hiranya.CBSLsystem.repository;

import com.hiranya.CBSLsystem.model.Bank;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface BankRepository extends JpaRepository<Bank, Integer> {
}
