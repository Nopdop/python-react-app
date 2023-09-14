// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import { useState, useEffect } from "react";

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  // This request is proxied to the backend
  useEffect(() => {
    fetch("/time")
      .then((res) => res.json())
      .then((data) => {
        const date = new Date(0);
        setCurrentTime(date.setUTCSeconds(data.time));
      });
  }, []);

  return (
    <div style={{background: "green", color: "white"}}>
      <p>The current date is '{new Date(currentTime).toString()}'.</p>
    </div>
  );
}

export default App;
