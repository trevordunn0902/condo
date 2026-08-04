package com.condo.backend.service;

import com.condo.backend.model.Vehicle;
import com.condo.backend.repository.VehicleRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleService {

    private final VehicleRepository vehicleRepository;

    public VehicleService(VehicleRepository vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }

    public List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }

    public Vehicle addVehicle(Vehicle vehicle) {
        return vehicleRepository.save(vehicle);
    }

    public Vehicle updateVehicle(Long id, Vehicle vehicleDetails) {
        Vehicle vehicle = vehicleRepository.findById(id).orElseThrow(() -> 
            new RuntimeException("Vehicle not found with id: " + id)
        );
        vehicle.setUnitNumber(vehicleDetails.getUnitNumber());
        vehicle.setVehicleMake(vehicleDetails.getVehicleMake());
        vehicle.setVehicleModel(vehicleDetails.getVehicleModel());
        vehicle.setVehicleColor(vehicleDetails.getVehicleColor());
        vehicle.setPlate(vehicleDetails.getPlate());
        return vehicleRepository.save(vehicle);
    }

    public void deleteVehicle(Long id) {
        vehicleRepository.deleteById(id);
    }
}
