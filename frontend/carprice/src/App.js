import React, { useState } from "react";
import Select from "react-select";
import "./App.css";
function App() {
  const [price, setPrice] = useState(null);

  const [formData, setFormData] = useState({
    car_name: null,
    brand: null,
    model: null,
    vehicle_age: "",
    km_driven: "",
    seller_type: null,
    fuel_type: null,
    transmission_type: null,
    mileage: "",
    engine: "",
    max_power: "",
    seats: ""
  });

  // 🔹 Dropdown options (replace with your dataset values later)
 const brands = [
  { value: "Maruti", label: "Maruti" },
  { value: "Hyundai", label: "Hyundai" },
  { value: "Ford", label: "Ford" },
  { value: "Renault", label: "Renault" },
  { value: "Mini", label: "Mini" },
  { value: "Mercedes-Benz", label: "Mercedes-Benz" },
  { value: "Toyota", label: "Toyota" },
  { value: "Volkswagen", label: "Volkswagen" },
  { value: "Honda", label: "Honda" },
  { value: "Mahindra", label: "Mahindra" },
  { value: "Datsun", label: "Datsun" },
  { value: "Tata", label: "Tata" },
  { value: "Kia", label: "Kia" },
  { value: "BMW", label: "BMW" },
  { value: "Audi", label: "Audi" },
  { value: "Land Rover", label: "Land Rover" },
  { value: "Jaguar", label: "Jaguar" },
  { value: "MG", label: "MG" },
  { value: "Isuzu", label: "Isuzu" },
  { value: "Porsche", label: "Porsche" },
  { value: "Skoda", label: "Skoda" },
  { value: "Volvo", label: "Volvo" },
  { value: "Lexus", label: "Lexus" },
  { value: "Jeep", label: "Jeep" },
  { value: "Maserati", label: "Maserati" },
  { value: "Bentley", label: "Bentley" },
  { value: "Nissan", label: "Nissan" },
  { value: "Ferrari", label: "Ferrari" },
  { value: "Mercedes-AMG", label: "Mercedes-AMG" },
  { value: "Rolls-Royce", label: "Rolls-Royce" },
  { value: "Force", label: "Force" }
];

  const models = [
  { value: "Alto", label: "Alto" },
  { value: "Grand", label: "Grand" },
  { value: "I20", label: "I20" },
  { value: "Ecosport", label: "Ecosport" },
  { value: "Wagon R", label: "Wagon R" },
  { value: "I10", label: "I10" },
  { value: "Venue", label: "Venue" },
  { value: "Swift", label: "Swift" },
  { value: "Verna", label: "Verna" },
  { value: "Duster", label: "Duster" },
  { value: "Cooper", label: "Cooper" },
  { value: "Ciaz", label: "Ciaz" },
  { value: "C-Class", label: "C-Class" },
  { value: "Innova", label: "Innova" },
  { value: "Baleno", label: "Baleno" },
  { value: "Swift Dzire", label: "Swift Dzire" },
  { value: "Vento", label: "Vento" },
  { value: "Creta", label: "Creta" },
  { value: "City", label: "City" },
  { value: "Bolero", label: "Bolero" },
  { value: "Fortuner", label: "Fortuner" },
  { value: "Kwid", label: "Kwid" },
  { value: "Amaze", label: "Amaze" },
  { value: "Santro", label: "Santro" },
  { value: "Xuv500", label: "Xuv500" },
  { value: "Kuv100", label: "Kuv100" },
  { value: "Ignis", label: "Ignis" },
  { value: "Redigo", label: "Redigo" },
  { value: "Scorpio", label: "Scorpio" },
  { value: "Marazzo", label: "Marazzo" },
  { value: "Aspire", label: "Aspire" },
  { value: "Figo", label: "Figo" },
  { value: "Vitara", label: "Vitara" },
  { value: "Tiago", label: "Tiago" },
  { value: "Polo", label: "Polo" },
  { value: "Seltos", label: "Seltos" },
  { value: "Celerio", label: "Celerio" },
  { value: "Go", label: "Go" },
  { value: "5", label: "5" },
  { value: "Cr-V", label: "Cr-V" },
  { value: "Endeavour", label: "Endeavour" },
  { value: "Kuv", label: "Kuv" },
  { value: "Jazz", label: "Jazz" },
  { value: "3", label: "3" },
  { value: "A4", label: "A4" },
  { value: "Tigor", label: "Tigor" },
  { value: "Ertiga", label: "Ertiga" },
  { value: "Safari", label: "Safari" },
  { value: "Thar", label: "Thar" },
  { value: "Hexa", label: "Hexa" },
  { value: "Rover", label: "Rover" },
  { value: "Eeco", label: "Eeco" },
  { value: "A6", label: "A6" },
  { value: "E-Class", label: "E-Class" },
  { value: "Q7", label: "Q7" },
  { value: "Z4", label: "Z4" },
  { value: "6", label: "6" },
  { value: "Xf", label: "Xf" },
  { value: "X5", label: "X5" },
  { value: "Hector", label: "Hector" },
  { value: "Civic", label: "Civic" },
  { value: "D-Max", label: "D-Max" },
  { value: "Cayenne", label: "Cayenne" },
  { value: "X1", label: "X1" },
  { value: "Rapid", label: "Rapid" },
  { value: "Freestyle", label: "Freestyle" },
  { value: "Superb", label: "Superb" },
  { value: "Nexon", label: "Nexon" },
  { value: "Xuv300", label: "Xuv300" },
  { value: "Dzire Vxi", label: "Dzire Vxi" },
  { value: "S90", label: "S90" },
  { value: "Wr-V", label: "Wr-V" },
  { value: "Xl6", label: "Xl6" },
  { value: "Triber", label: "Triber" },
  { value: "Es", label: "Es" },
  { value: "Wrangler", label: "Wrangler" },
  { value: "Camry", label: "Camry" },
  { value: "Elantra", label: "Elantra" },
  { value: "Yaris", label: "Yaris" },
  { value: "Gl-Class", label: "Gl-Class" },
  { value: "7", label: "7" },
  { value: "S-Presso", label: "S-Presso" },
  { value: "Dzire Lxi", label: "Dzire Lxi" },
  { value: "Aura", label: "Aura" },
  { value: "Xc", label: "Xc" },
  { value: "Ghibli", label: "Ghibli" },
  { value: "Continental", label: "Continental" },
  { value: "Cr", label: "Cr" },
  { value: "Kicks", label: "Kicks" },
  { value: "S-Class", label: "S-Class" },
  { value: "Tucson", label: "Tucson" },
  { value: "Harrier", label: "Harrier" },
  { value: "X3", label: "X3" },
  { value: "Octavia", label: "Octavia" },
  { value: "Compass", label: "Compass" },
  { value: "Cls", label: "Cls" },
  { value: "Glanza", label: "Glanza" },
  { value: "Macan", label: "Macan" },
  { value: "X4", label: "X4" },
  { value: "Dzire Zxi", label: "Dzire Zxi" },
  { value: "Xc90", label: "Xc90" },
  { value: "F-Pace", label: "F-Pace" },
  { value: "A8", label: "A8" },
  { value: "Mux", label: "Mux" },
  { value: "Gtc4Lusso", label: "Gtc4Lusso" },
  { value: "Gls", label: "Gls" },
  { value: "X-Trail", label: "X-Trail" },
  { value: "Xe", label: "Xe" },
  { value: "Xc60", label: "Xc60" },
  { value: "Panamera", label: "Panamera" },
  { value: "Alturas", label: "Alturas" },
  { value: "Altroz", label: "Altroz" },
  { value: "Nx", label: "Nx" },
  { value: "Carnival", label: "Carnival" },
  { value: "C", label: "C" },
  { value: "Rx", label: "Rx" },
  { value: "Ghost", label: "Ghost" },
  { value: "Quattroporte", label: "Quattroporte" },
  { value: "Gurkha", label: "Gurkha" }
];

const carNames = [
  { value: "Maruti Alto", label: "Maruti Alto" },
  { value: "Hyundai Grand", label: "Hyundai Grand" },
  { value: "Hyundai i20", label: "Hyundai i20" },
  { value: "Ford Ecosport", label: "Ford Ecosport" },
  { value: "Maruti Wagon R", label: "Maruti Wagon R" },
  { value: "Hyundai i10", label: "Hyundai i10" },
  { value: "Hyundai Venue", label: "Hyundai Venue" },
  { value: "Maruti Swift", label: "Maruti Swift" },
  { value: "Hyundai Verna", label: "Hyundai Verna" },
  { value: "Renault Duster", label: "Renault Duster" },
  { value: "Mini Cooper", label: "Mini Cooper" },
  { value: "Maruti Ciaz", label: "Maruti Ciaz" },
  { value: "Mercedes-Benz C-Class", label: "Mercedes-Benz C-Class" },
  { value: "Toyota Innova", label: "Toyota Innova" },
  { value: "Maruti Baleno", label: "Maruti Baleno" },
  { value: "Maruti Swift Dzire", label: "Maruti Swift Dzire" },
  { value: "Volkswagen Vento", label: "Volkswagen Vento" },
  { value: "Hyundai Creta", label: "Hyundai Creta" },
  { value: "Honda City", label: "Honda City" },
  { value: "Mahindra Bolero", label: "Mahindra Bolero" },
  { value: "Toyota Fortuner", label: "Toyota Fortuner" },
  { value: "Renault KWID", label: "Renault KWID" },
  { value: "Honda Amaze", label: "Honda Amaze" },
  { value: "Hyundai Santro", label: "Hyundai Santro" },
  { value: "Mahindra XUV500", label: "Mahindra XUV500" },
  { value: "Mahindra KUV100", label: "Mahindra KUV100" },
  { value: "Maruti Ignis", label: "Maruti Ignis" },
  { value: "Datsun RediGO", label: "Datsun RediGO" },
  { value: "Mahindra Scorpio", label: "Mahindra Scorpio" },
  { value: "Mahindra Marazzo", label: "Mahindra Marazzo" },
  { value: "Ford Aspire", label: "Ford Aspire" },
  { value: "Ford Figo", label: "Ford Figo" },
  { value: "Maruti Vitara", label: "Maruti Vitara" },
  { value: "Tata Tiago", label: "Tata Tiago" },
  { value: "Volkswagen Polo", label: "Volkswagen Polo" },
  { value: "Kia Seltos", label: "Kia Seltos" },
  { value: "Maruti Celerio", label: "Maruti Celerio" },
  { value: "Datsun GO", label: "Datsun GO" },
  { value: "BMW 5", label: "BMW 5" },
  { value: "Honda CR-V", label: "Honda CR-V" },
  { value: "Ford Endeavour", label: "Ford Endeavour" },
  { value: "Mahindra KUV", label: "Mahindra KUV" },
  { value: "Honda Jazz", label: "Honda Jazz" },
  { value: "BMW 3", label: "BMW 3" },
  { value: "Audi A4", label: "Audi A4" },
  { value: "Tata Tigor", label: "Tata Tigor" },
  { value: "Maruti Ertiga", label: "Maruti Ertiga" },
  { value: "Tata Safari", label: "Tata Safari" },
  { value: "Mahindra Thar", label: "Mahindra Thar" },
  { value: "Tata Hexa", label: "Tata Hexa" },
  { value: "Land Rover Rover", label: "Land Rover Rover" },
  { value: "Maruti Eeco", label: "Maruti Eeco" },
  { value: "Audi A6", label: "Audi A6" },
  { value: "Mercedes-Benz E-Class", label: "Mercedes-Benz E-Class" },
  { value: "Audi Q7", label: "Audi Q7" },
  { value: "BMW Z4", label: "BMW Z4" },
  { value: "BMW 6", label: "BMW 6" },
  { value: "Jaguar XF", label: "Jaguar XF" },
  { value: "BMW X5", label: "BMW X5" },
  { value: "MG Hector", label: "MG Hector" },
  { value: "Honda Civic", label: "Honda Civic" },
  { value: "Isuzu D-Max", label: "Isuzu D-Max" },
  { value: "Porsche Cayenne", label: "Porsche Cayenne" },
  { value: "BMW X1", label: "BMW X1" },
  { value: "Skoda Rapid", label: "Skoda Rapid" },
  { value: "Ford Freestyle", label: "Ford Freestyle" },
  { value: "Skoda Superb", label: "Skoda Superb" },
  { value: "Tata Nexon", label: "Tata Nexon" },
  { value: "Mahindra XUV300", label: "Mahindra XUV300" },
  { value: "Maruti Dzire VXI", label: "Maruti Dzire VXI" },
  { value: "Volvo S90", label: "Volvo S90" },
  { value: "Honda WR-V", label: "Honda WR-V" },
  { value: "Maruti XL6", label: "Maruti XL6" },
  { value: "Renault Triber", label: "Renault Triber" },
  { value: "Lexus ES", label: "Lexus ES" },
  { value: "Jeep Wrangler", label: "Jeep Wrangler" },
  { value: "Toyota Camry", label: "Toyota Camry" },
  { value: "Hyundai Elantra", label: "Hyundai Elantra" },
  { value: "Toyota Yaris", label: "Toyota Yaris" },
  { value: "Mercedes-Benz GL-Class", label: "Mercedes-Benz GL-Class" },
  { value: "BMW 7", label: "BMW 7" },
  { value: "Maruti S-Presso", label: "Maruti S-Presso" },
  { value: "Maruti Dzire LXI", label: "Maruti Dzire LXI" },
  { value: "Hyundai Aura", label: "Hyundai Aura" },
  { value: "Volvo XC", label: "Volvo XC" },
  { value: "Maserati Ghibli", label: "Maserati Ghibli" },
  { value: "Bentley Continental", label: "Bentley Continental" },
  { value: "Honda CR", label: "Honda CR" },
  { value: "Nissan Kicks", label: "Nissan Kicks" },
  { value: "Mercedes-Benz S-Class", label: "Mercedes-Benz S-Class" },
  { value: "Hyundai Tucson", label: "Hyundai Tucson" },
  { value: "Tata Harrier", label: "Tata Harrier" },
  { value: "BMW X3", label: "BMW X3" },
  { value: "Skoda Octavia", label: "Skoda Octavia" },
  { value: "Jeep Compass", label: "Jeep Compass" },
  { value: "Mercedes-Benz CLS", label: "Mercedes-Benz CLS" },
  { value: "Datsun redi-GO", label: "Datsun redi-GO" },
  { value: "Toyota Glanza", label: "Toyota Glanza" },
  { value: "Porsche Macan", label: "Porsche Macan" },
  { value: "BMW X4", label: "BMW X4" },
  { value: "Maruti Dzire ZXI", label: "Maruti Dzire ZXI" },
  { value: "Volvo XC90", label: "Volvo XC90" },
  { value: "Jaguar F-PACE", label: "Jaguar F-PACE" },
  { value: "Audi A8", label: "Audi A8" },
  { value: "ISUZU MUX", label: "ISUZU MUX" },
  { value: "Ferrari GTC4Lusso", label: "Ferrari GTC4Lusso" },
  { value: "Mercedes-Benz GLS", label: "Mercedes-Benz GLS" },
  { value: "Nissan X-Trail", label: "Nissan X-Trail" },
  { value: "Jaguar XE", label: "Jaguar XE" },
  { value: "Volvo XC60", label: "Volvo XC60" },
  { value: "Porsche Panamera", label: "Porsche Panamera" },
  { value: "Mahindra Alturas", label: "Mahindra Alturas" },
  { value: "Tata Altroz", label: "Tata Altroz" },
  { value: "Lexus NX", label: "Lexus NX" },
  { value: "Kia Carnival", label: "Kia Carnival" },
  { value: "Mercedes-AMG C", label: "Mercedes-AMG C" },
  { value: "Lexus RX", label: "Lexus RX" },
  { value: "Rolls-Royce Ghost", label: "Rolls-Royce Ghost" },
  { value: "Maserati Quattroporte", label: "Maserati Quattroporte" },
  { value: "Isuzu MUX", label: "Isuzu MUX" },
  { value: "Force Gurkha", label: "Force Gurkha" }

  ];

const fuelTypes = [
  { value: "Petrol", label: "Petrol" },
  { value: "Diesel", label: "Diesel" },
  { value: "CNG", label: "CNG" },
  { value: "LPG", label: "LPG" },
  { value: "Electric", label: "Electric" }
];

  const transmissionTypes = [
    { value: "Manual", label: "Manual" },
    { value: "Automatic", label: "Automatic" }
  ];

  const sellerTypes = [
  { value: "Individual", label: "Individual" },
  { value: "Dealer", label: "Dealer" },
  { value: "Trustmark Dealer", label: "Trustmark Dealer" }
];
  // 🔹 Handle dropdown change
  const handleSelect = (name, selectedOption) => {
    setFormData({
      ...formData,
      [name]: selectedOption
    });
  };

  // 🔹 Handle number input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 🔹 Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      car_name: formData.car_name?.value,
      brand: formData.brand?.value,
      model: formData.model?.value,
      vehicle_age: Number(formData.vehicle_age),
      km_driven: Number(formData.km_driven),
      seller_type: formData.seller_type?.value,
      fuel_type: formData.fuel_type?.value,
      transmission_type: formData.transmission_type?.value,
      mileage: Number(formData.mileage),
      engine: Number(formData.engine),
      max_power: Number(formData.max_power),
      seats: Number(formData.seats)
    };

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dataToSend)
      });

      const result = await response.json();
      setPrice(result.predicted_price);
    } catch (error) {
      console.error(error);
      alert("Error connecting to API");
    }
  };

  return (
    <div className="container">
      <h2>Car Price Prediction</h2>

      <form onSubmit={handleSubmit}>

        {/* 🔹 Dropdowns */}
        <label>Car Name</label>
        <Select options={carNames} onChange={(e) => handleSelect("car_name", e)} />

        <label>Brand</label>
        <Select options={brands} onChange={(e) => handleSelect("brand", e)} />

        <label>Model</label>
        <Select options={models} onChange={(e) => handleSelect("model", e)} />

        <label>Fuel Type</label>
        <Select options={fuelTypes} onChange={(e) => handleSelect("fuel_type", e)} />

        <label>Transmission</label>
        <Select options={transmissionTypes} onChange={(e) => handleSelect("transmission_type", e)} />

        <label>Seller Type</label>
        <Select options={sellerTypes} onChange={(e) => handleSelect("seller_type", e)} />

        {/* 🔹 Numeric Inputs */}
        <label>Vehicle Age</label>
        <input type="number" name="vehicle_age" onChange={handleChange} required />

        <label>KM Driven</label>
        <input type="number" name="km_driven" onChange={handleChange} required />

        <label>Mileage</label>
        <input type="number" step="0.1" name="mileage" onChange={handleChange} required />

        <label>Engine</label>
        <input type="number" name="engine" onChange={handleChange} required />

        <label>Max Power</label>
        <input type="number" step="0.1" name="max_power" onChange={handleChange} required />

        <label>Seats</label>
        <input type="number" name="seats" onChange={handleChange} required />

        <br /><br />
        <button type="submit">Predict Price</button>
      </form>

      {price && <h3>Predicted Price: ₹{price}</h3>}
    </div>
  );
}

export default App;