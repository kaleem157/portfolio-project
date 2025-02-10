import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/") // Replace with your Flask route if different
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => setMessage(data.message)) // Assuming 'message' is the key in JSON response
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;