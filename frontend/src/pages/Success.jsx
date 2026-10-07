import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  return (
    <div className="success-page">
      <div className="success-card">

        <div className="success-icon">
          ✓
        </div>

        <h1>Registration Successful!</h1>

        <p>
          Your registration has been successfully submitted.
        </p>

        <p>
          Thank you for participating in the State Level Competition 2026.
        </p>

        <button onClick={() => navigate("/")}>
          Back to Home
        </button>

      </div>
    </div>
  );
}

export default Success;