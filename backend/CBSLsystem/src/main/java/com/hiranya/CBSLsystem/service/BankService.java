package com.hiranya.CBSLsystem.service;

import com.hiranya.CBSLsystem.model.Bank;

import java.util.List;

public interface BankService {
    public Bank saveBank(Bank bank);
    public List<Bank> getAllBanks();
}
