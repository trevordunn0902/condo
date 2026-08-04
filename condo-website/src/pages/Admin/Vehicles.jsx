import React, { useEffect, useState } from "react";
import { VehicleAPI } from "@/api/vehicleApi";
import "./Vehicles.css";

const emptyForm = {
  id: null,
  unitNumber: "",
  vehicleMake: "",
  vehicleModel: "",
  vehicleColor: "",
  plate: "",
};

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [unitSearch, setUnitSearch] = useState("");
  const [plateSearch, setPlateSearch] = useState("");

  const loadVehicles = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await VehicleAPI.getAll();
      setVehicles(res.data || []);
      setFilteredVehicles(res.data || []);
    } catch (err) {
      console.error(err);
      setError("Failed to load vehicles. Check backend connection.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadVehicles();
  }, []);

  const handleAddClick = () => {
    setForm(emptyForm);
    setIsEditing(false);
    setShowForm(true);
  };

  const handleEditClick = (vehicle) => {
    setForm({
      id: vehicle.id ?? null,
      unitNumber: vehicle.unitNumber ?? "",
      vehicleMake: vehicle.vehicleMake ?? "",
      vehicleModel: vehicle.vehicleModel ?? "",
      vehicleColor: vehicle.vehicleColor ?? "",
      plate: vehicle.plate ?? "",
    });
    setIsEditing(true);
    setShowForm(true);
  };

  const handleDeleteClick = async (id) => {
    const ok = window.confirm("Are you sure you want to delete this vehicle?");
    if (!ok) return;

    try {
      await VehicleAPI.delete(id);
      setVehicles((prev) => prev.filter((v) => v.id !== id));
      setFilteredVehicles((prev) => prev.filter((v) => v.id !== id));
    } catch (err) {
      console.error(err);
      alert("Delete failed. Check console for details.");
      loadVehicles();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.unitNumber || !form.plate) {
      alert("Please provide at least Unit Number and Plate.");
      return;
    }

    setIsSubmitting(true);
    try {
      if (isEditing && form.id !== null) {
        await VehicleAPI.update(form.id, {
          unitNumber: form.unitNumber,
          vehicleMake: form.vehicleMake,
          vehicleModel: form.vehicleModel,
          vehicleColor: form.vehicleColor,
          plate: form.plate,
        });
      } else {
        await VehicleAPI.add({
          unitNumber: form.unitNumber,
          vehicleMake: form.vehicleMake,
          vehicleModel: form.vehicleModel,
          vehicleColor: form.vehicleColor,
          plate: form.plate,
        });
      }
      await loadVehicles();
      setShowForm(false);
      setForm(emptyForm);
    } catch (err) {
      console.error(err);
      alert("Save failed. Check console for details.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSearch = () => {
    const filtered = vehicles.filter((v) => {
      const unitMatch = unitSearch
        ? v.unitNumber?.toLowerCase().includes(unitSearch.toLowerCase())
        : false;
      const plateMatch = plateSearch
        ? v.plate?.toLowerCase().includes(plateSearch.toLowerCase())
        : false;
      return unitMatch || plateMatch;
    });
    setFilteredVehicles(filtered);
  };

  return (
    <div className="page-container">
      <div className="page-content vehicles-content">
        <h1 className="page-title">Vehicles</h1>

        <div className="vehicles-top">
          <div className="vehicles-search">
            <input
              type="text"
              value={unitSearch}
              onChange={(e) => setUnitSearch(e.target.value)}
              placeholder="Unit Number"
              className="search-input"
            />

            <span className="or-label">OR</span>

            <input
              type="text"
              value={plateSearch}
              onChange={(e) => setPlateSearch(e.target.value)}
              placeholder="Plate"
              className="search-input"
            />

            <button className="search-btn" onClick={handleSearch}>
              Search
            </button>
          </div>

          <div className="actions">
            <button className="add-btn" onClick={handleAddClick}>
              + Add New Vehicle
            </button>
          </div>
        </div>

        <div className="underline"></div>

        {loading ? (
          <p className="small">Loading vehicles...</p>
        ) : error ? (
          <p className="small" style={{ color: "red" }}>{error}</p>
        ) : filteredVehicles.length === 0 ? (
          <p className="small">No vehicles found.</p>
        ) : (
          <div className="vehicles-list">
            <div className="vehicles-row vehicles-row-head">
              <div className="col col-unit">Unit</div>
              <div className="col col-make">Make</div>
              <div className="col col-model">Model</div>
              <div className="col col-color">Color</div>
              <div className="col col-plate">Plate</div>
              <div className="col col-actions">Actions</div>
            </div>

            {filteredVehicles.map((v) => (
              <div className="vehicles-row" key={v.id}>
                <div className="col col-unit">{v.unitNumber || "-"}</div>
                <div className="col col-make">{v.vehicleMake || "-"}</div>
                <div className="col col-model">{v.vehicleModel || "-"}</div>
                <div className="col col-color">{v.vehicleColor || "-"}</div>
                <div className="col col-plate">{v.plate || "-"}</div>
                <div className="col col-actions">
                  <button className="row-btn edit" onClick={() => handleEditClick(v)}>
                    Edit
                  </button>
                  <button className="row-btn delete" onClick={() => handleDeleteClick(v.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {showForm && (
          <div className="form-overlay">
            <div className="form-card">
              <h2>{isEditing ? "Edit Vehicle" : "Add Vehicle"}</h2>

              <form onSubmit={handleSubmit} className="vehicle-form">
                <label>
                  Unit Number
                  <input
                    name="unitNumber"
                    value={form.unitNumber}
                    onChange={handleChange}
                    placeholder="e.g. 400"
                    required
                  />
                </label>

                <label>
                  Make
                  <input
                    name="vehicleMake"
                    value={form.vehicleMake}
                    onChange={handleChange}
                    placeholder="e.g. Honda"
                  />
                </label>

                <label>
                  Model
                  <input
                    name="vehicleModel"
                    value={form.vehicleModel}
                    onChange={handleChange}
                    placeholder="e.g. CRV"
                  />
                </label>

                <label>
                  Color
                  <input
                    name="vehicleColor"
                    value={form.vehicleColor}
                    onChange={handleChange}
                    placeholder="e.g. White"
                  />
                </label>

                <label>
                  Plate
                  <input
                    name="plate"
                    value={form.plate}
                    onChange={handleChange}
                    placeholder="e.g. BZYJ 225"
                    required
                  />
                </label>

                <div className="form-actions">
                  <button type="button" className="btn cancel" onClick={() => setShowForm(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn save" disabled={isSubmitting}>
                    {isSubmitting ? "Saving..." : "Save"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Vehicles;
