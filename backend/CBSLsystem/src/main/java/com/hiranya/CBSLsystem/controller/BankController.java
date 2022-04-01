package com.hiranya.CBSLsystem.controller;

import com.hiranya.CBSLsystem.model.Bank;
import com.hiranya.CBSLsystem.service.BankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bank")
@CrossOrigin

public class BankController {
    @Autowired
    private BankService bankService;

    @PostMapping("/add-bank")
    public String add(@RequestBody Bank bank){
        bankService.saveBank(bank);
        return "New bank is added";
    }

    @GetMapping("/getAllBanks")
    public List<Bank> getAllBanks() {return bankService.getAllBanks();}


}
