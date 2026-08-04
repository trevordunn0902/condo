package com.condo.backend.controller;

import com.condo.backend.model.Vehicle;
import com.condo.backend.service.VehicleService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vehicles")
public class VehicleController {

    private final VehicleService vehicleService;

    public VehicleController(VehicleService vehicleService) {
        this.vehicleService = vehicleService;
    }

    @GetMapping
    public List<Vehicle> getAllVehicles() {
        return vehicleService.getAllVehicles();
    }

    @PostMapping
    public Vehicle addVehicle(@RequestBody Vehicle vehicle) {
        return vehicleService.addVehicle(vehicle);
    }

    @PutMapping("/{id}")
    public Vehicle updateVehicle(@PathVariable Long id, @RequestBody Vehicle vehicleDetails) {
        return vehicleService.updateVehicle(id, vehicleDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteVehicle(@PathVariable Long id) {
        vehicleService.deleteVehicle(id);
    }
}
