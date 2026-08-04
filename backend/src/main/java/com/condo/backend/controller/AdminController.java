package com.condo.backend.controller;

import com.condo.backend.model.Admin;
import com.condo.backend.service.AdminService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Map<String, String> payload) {
        String username = payload.get("username");
        String password = payload.get("password");

        Admin admin = adminService.findByUsername(username);

        if (admin != null && password.equals(admin.getPassword())) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                                 .body("Invalid credentials");
        }
    }
}
