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