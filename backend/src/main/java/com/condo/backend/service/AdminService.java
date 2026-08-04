package com.condo.backend.service;

import com.condo.backend.model.Admin;
import com.condo.backend.repository.AdminRepository;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    private final AdminRepository adminRepository;

    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    public Admin findByUsername(String username) {
        return adminRepository.findByUsername(username);
    }
}
