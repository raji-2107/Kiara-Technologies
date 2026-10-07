import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const location = useLocation();
  const navigate = useNavigate();

  const category = location.state?.category;
  const competition = location.state?.competition;

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    address: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const registrationData = {
      ...formData,
      category: category,
      competition: competition,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/register",
        registrationData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Backend Response:", response.data);

      // Go to success page
      navigate("/success");

    } catch (error) {
      console.error("Registration Error:", error);

      if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Response:", error.response.data);

        setError(
          "Unable to submit registration. Please check the backend server."
        );
      } else if (error.request) {
        setError(
          "Backend server is not running. Please start the backend."
        );
      } else {
        setError(
          "Something went wrong. Please try again."
        );
      }
    }
  };

  return (
    <div className="register-page">

      {/* Header */}
      <div className="register-header">
        <h1>Competition Registration</h1>

        <p>
          Complete the form below to register for the event
        </p>
      </div>

      {/* Registration Card */}
      <div className="register-card">

        <div className="form-title">
          <h2>Participant details</h2>

          <p>
            Please enter your details correctly
          </p>
        </div>

        {/* Selected Details */}
        <div className="selected-details">

          <div>
            <span>AGE CATEGORY</span>
            <strong>{category}</strong>
          </div>

          <div>
            <span>COMPETITION</span>
            <strong>{competition}</strong>
          </div>

        </div>

        {/* Error Message */}
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>

          {/* Full Name */}
          <div className="form-group">
            <label>Full name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Age and Phone */}
          <div className="form-row">

            <div className="form-group">
              <label>Age</label>

              <input
                type="number"
                name="age"
                placeholder="Enter your age"
                value={formData.age}
                onChange={handleChange}
                min="1"
                max="100"
                required
              />
            </div>

            <div className="form-group">
              <label>Phone number</label>

              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email address</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Address */}
          <div className="form-group">
            <label>Address</label>

            <textarea
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="submit-button"
          >
            Complete registration ↗
          </button>

        </form>

      </div>
    </div>
  );
}

export default Register;