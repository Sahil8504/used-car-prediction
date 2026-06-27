# Project Report: Car Price Prediction System

## Title of Project
**Car Price Prediction System using Machine Learning**

---

## Introduction
The used car market has witnessed rapid growth in recent years. Estimating the accurate value of a used car is a complex task due to the numerous factors involved, such as the car's age, mileage, brand, fuel type, and other mechanical specifications. The Car Price Prediction System is a web-based application designed to solve this problem by leveraging machine learning algorithms to provide an accurate and automated price estimation based on historical data.

---

## Scope and Objectives
**Objectives:**
- To predict the price of a used car reliably based on user-provided features.
- To create a user-friendly frontend interface for users to easily select car specifications.
- To provide a scalable backend API that handles the prediction logic using a pre-trained machine learning model.

**Scope:**
- The system focuses on cars available in the historical dataset provided (e.g., CarDekho dataset).
- It handles parameters such as Brand, Model, Vehicle Age, KM Driven, Seller Type, Fuel Type, Transmission, Mileage, Engine specs, and Max Power.
- This project is aimed to assist individuals, car dealers, and buyers in making informed pricing decisions without requiring extensive domain knowledge.

---

## Project Description
This project is an end-to-end Machine Learning web application structured into two main components:
1. **Machine Learning Model & Backend API**: A predictive model trained on historical used-car data (using Scikit-Learn and Pandas) exported as a pickle file (`model.pkl` and `transformer.pkl`). A Flask REST API acts as the bridge that receives car features via HTTP POST requests, passes them through the data transformer, and feeds them into the ML model to output a predicted price.
2. **Frontend Interface**: A responsive and interactive web application built using React. This interface allows users to input the necessary details about the car through forms and dropdowns and displays the predicted price in real time.

---

## Existing System
In the existing ecosystem, car price estimations are primarily carried out through:
- **Manual Evaluation**: Depreciating factors are manually calculated, which is time-consuming and often inconsistent.
- **Rule-based Systems**: Hard-coded heuristics that apply fixed depreciation curves regardless of specific manufacturer nuances.
- **Human Appraisers**: Reliance on expert appraisers who can introduce subjective biases.

**Disadvantages of Existing Systems:**
- High margin of error and bias.
- Slow and inconvenient for everyday users.
- Inability to scale to thousands of daily inquiries effectively.

---

## Proposed System
The proposed system replaces manual appraisal with a data-driven Machine Learning model. 
- A user submits the car's details through an intuitive React frontend.
- The details are securely formatted and sent via an API structure to the Flask backend.
- The pre-trained mathematical model transforms the data and calculates an objective prediction based on correlations learned from thousands of similar cars.

**Advantages of the Proposed System:**
- Objective and consistent results devoid of human bias.
- Instantaneous predictions.
- Highly accessible via a standard web browser.

---

## Technology Used
- **Frontend Development:** React.js, HTML5, Vanilla CSS, React-Select
- **Backend Development:** Python, Flask, Flask-CORS
- **Machine Learning & Data Processing:** Scikit-Learn, Pandas, Pickle
- **Development Tools:** VS Code, Git/GitHub, Node.js, npm

---

## Implementation of Project

### 1. `backend/app.py`
This is the Flask backend that exposes a REST endpoint for accepting incoming data, transforming it, and returning the prediction from the model.

```python
from flask import Flask, request, jsonify
import pandas as pd
import pickle
from flask_cors import CORS

# Initialize app
app = Flask(__name__)
CORS(app)

# Load model and transformer
with open("model.pkl", "rb") as f:
    model = pickle.load(f)

with open("transformer.pkl", "rb") as f:
    transformer = pickle.load(f)

# Home route
@app.route("/")
def home():
    return "Car Price Prediction API is running!"

# Prediction route
@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()

        # Convert JSON to DataFrame
        input_data = pd.DataFrame([data])

        # Transform input
        transformed_data = transformer.transform(input_data)

        # Predict
        prediction = model.predict(transformed_data)

        return jsonify({
            "predicted_price": int(prediction[0])
        })

    except Exception as e:
        return jsonify({"error": str(e)})

# Run app
if __name__ == "__main__":
    app.run(debug=True)
```

### 2. `frontend/carprice/src/App.js`
This file contains the logic for the React web application that creates the user interface and connects with the Flask API to retrieve predictions.

```javascript
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

  // Dropdown options (Truncated for brevity)
  const brands = [ { value: "Maruti", label: "Maruti" }, { value: "Hyundai", label: "Hyundai" } ]; 
  const fuelTypes = [ { value: "Petrol", label: "Petrol" }, { value: "Diesel", label: "Diesel" } ];
  const transmissionTypes = [ { value: "Manual", label: "Manual" }, { value: "Automatic", label: "Automatic" } ];
  const sellerTypes = [ { value: "Individual", label: "Individual" }, { value: "Dealer", label: "Dealer" } ];

  // Handle dropdown change
  const handleSelect = (name, selectedOption) => {
    setFormData({
      ...formData,
      [name]: selectedOption
    });
  };

  // Handle number input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Submit
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
        headers: { "Content-Type": "application/json" },
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
        <label>Brand</label>
        <Select options={brands} onChange={(e) => handleSelect("brand", e)} />
        
        <label>Fuel Type</label>
        <Select options={fuelTypes} onChange={(e) => handleSelect("fuel_type", e)} />

        <label>Transmission</label>
        <Select options={transmissionTypes} onChange={(e) => handleSelect("transmission_type", e)} />

        <label>Vehicle Age</label>
        <input type="number" name="vehicle_age" onChange={handleChange} required />

        <label>KM Driven</label>
        <input type="number" name="km_driven" onChange={handleChange} required />

        <button type="submit">Predict Price</button>
      </form>

      {price && <h3>Predicted Price: ₹{price}</h3>}
    </div>
  );
}

export default App;
```

---

## Screenshots of user interface or output
*(Note: As the application runs locally, you can paste the screenshots of your final rendered application interface and the CLI server running here.)*

**Frontend UI Example Placeholder**
*(Insert Screenshot showing the Form here)*

**Successful Prediction Output Placeholder**
*(Insert Screenshot after clicking "Predict Price" and displaying the price)*

**Backend Server Running**
*(Insert Screenshot of the Terminal displaying `* Running on http://127.0.0.1:5000/`)*

---

## Conclusion
The Car Price Prediction System effectively bridges the gap between historical market data and end-users seeking accurate vehicle valuations. By pairing a robust Machine Learning algorithm with a modern, responsive web stack (Flask and React), the system successfully delivers real-time, data-driven and objective pricing information. Future iterations could integrate more comprehensive datasets, add geographical variations, and display market price bounds rather than a single absolute value.
